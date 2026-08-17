import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const repoUrl = searchParams.get("repo");

  if (!repoUrl) {
    return NextResponse.json({ error: "Missing repo parameter" }, { status: 400 });
  }

  const match = repoUrl.match(
    /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/
  );

  if (!match) {
    return NextResponse.json(
      { error: "Invalid GitHub repo URL" },
      { status: 400 }
    );
  }

  const [, owner, repo] = match;


  const result = {
    repo: repoUrl,
    aiSlopDetected: false,
  };

  return NextResponse.json(result);
}