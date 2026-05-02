// Minimal stub of next/server for Vitest environment
export class NextResponse {
  static redirect(url: URL) {
    return { type: "redirect", url };
  }
  static next() {
    return { type: "next" };
  }
  static json(body: unknown) {
    return { type: "json", body };
  }
}

export class NextRequest {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
}
