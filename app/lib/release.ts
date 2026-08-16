const REPO = "epalosh/openfov";

// Used when the GitHub API is unreachable or rate-limited at render time.
const FALLBACK_VERSION = "0.2.1";

/**
 * Latest published (non-draft, non-prerelease) release tag, without the
 * leading "v". Revalidated hourly so the site tracks GitHub on its own.
 */
export async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return FALLBACK_VERSION;

    const data = (await res.json()) as { tag_name?: string };
    const version = data.tag_name?.trim().replace(/^v/i, "");

    return version || FALLBACK_VERSION;
  } catch {
    return FALLBACK_VERSION;
  }
}
