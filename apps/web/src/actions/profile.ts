"use server";

import { auth } from "@/auth";
import { prisma } from "database";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";

const ProfileUpdateSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự").max(50, "Tên không được quá 50 ký tự"),
  targetLanguages: z.array(z.string()).min(1, "Vui lòng chọn ít nhất một ngôn ngữ"),
});

export async function updateUserProfile(data: {
  name?: string;
  targetLanguages: string[];
}) {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, error: "Bạn cần đăng nhập để thực hiện thao tác này" };
  }

  const userId = session.user.id;

  try {
    // Validate data
    const validatedData = ProfileUpdateSchema.parse(data);

    // Verify language codes are supported
    const supportedCodes = SUPPORTED_LANGUAGES.map(l => l.code);
    const invalidLangs = validatedData.targetLanguages.filter(code => !supportedCodes.includes(code));
    
    if (invalidLangs.length > 0) {
      return { success: false, error: "Một số ngôn ngữ bạn chọn không được hỗ trợ" };
    }

    await prisma.$transaction(async (tx) => {
      // Update user info
      await tx.user.update({
        where: { id: userId },
        data: {
          name: validatedData.name,
        },
      });

      // Update target languages
      await tx.userLanguage.deleteMany({
        where: { userId },
      });

      if (validatedData.targetLanguages.length > 0) {
        await tx.userLanguage.createMany({
          data: validatedData.targetLanguages.map((code) => ({
            userId,
            languageCode: code,
          })),
        });
      }
    });

    revalidatePath("/dashboard/profile");
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error("Failed to update profile:", error);
    return { success: false, error: "Đã có lỗi xảy ra khi cập nhật hồ sơ. Vui lòng thử lại sau." };
  }
}
