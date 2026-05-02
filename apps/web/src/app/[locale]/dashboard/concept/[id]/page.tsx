import { prisma } from "database";
import { auth } from "@/auth";
import LanguageDetail from "@/components/concept/LanguageDetail";
import { notFound, redirect } from "next/navigation";

export default async function ConceptDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  
  if (!session?.user?.id) {
    redirect("/login");
  }

  const concept = await prisma.conceptNode.findUnique({
    where: { id },
    include: {
      definitions: true,
      examples: true,
    },
  });

  if (!concept) {
    notFound();
  }

  const userLanguages = await prisma.userLanguage.findMany({
    where: { userId: session.user.id },
  });

  const targetLanguages = userLanguages.map(l => l.languageCode);

  // If user has no target languages, use a default or show a message
  const languagesToUse = targetLanguages.length > 0 ? targetLanguages : ["ja"];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Chi tiết Concept</h1>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-sm">
              ID: {id}
            </span>
          </div>
        </div>

        <div className="p-8 bg-zinc-900/50 border border-white/10 rounded-3xl backdrop-blur-xl">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Ý nghĩa trung tâm</h2>
          <p className="text-4xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent mb-8">
            {concept.meaningCentral}
          </p>
          
          <LanguageDetail 
            conceptId={id}
            initialDefinitions={concept.definitions.map(d => ({
              id: d.id,
              text: d.text,
              languageCode: d.languageCode
            }))}
            initialExamples={concept.examples.map(e => ({
              id: e.id,
              text: e.text,
              languageCode: e.languageCode
            }))}
            targetLanguages={languagesToUse}
          />
        </div>
      </div>
    </div>
  );
}
