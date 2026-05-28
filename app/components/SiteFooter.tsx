export function SiteFooter() {
  return (
    <footer>
      <div>© 2026 OpenFOV — MIT licensed</div>
      <div className="right">
        <a
          href="https://github.com/epalosh/openfov"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
        <a
          href="https://github.com/epalosh/openfov/releases"
          target="_blank"
          rel="noreferrer"
        >
          Releases
        </a>
        <a
          href="https://github.com/epalosh/openfov/issues"
          target="_blank"
          rel="noreferrer"
        >
          Issues
        </a>
        {/* SEO: comment out the next line to make subpages fully orphan. */}
        {/* <Link href="/how-it-works">Guide</Link> */}
      </div>
    </footer>
  );
}
