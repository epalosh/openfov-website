import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="page">
      <section className="titleblock">
        <div className="text">
          <h1>
            Webcam head tracking
            <br />
            <em>for iRacing.</em>
          </h1>
          <p>
            OpenFOV uses your webcam to control iRacing&rsquo;s in&#8209;game
            FOV. Unlocks VR&#8209;style functionality for your monitor!
          </p>
        </div>
        <div className="actions">
          <div className="release-label">
            <span>Latest release</span>
            <span className="v">v0.1.0</span>
          </div>

          <a
            className="btn-download"
            href="https://github.com/epalosh/openfov/releases/latest"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="win-logo"
              viewBox="0 0 14 14"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="0" y="0" width="6.4" height="6.4" />
              <rect x="7.6" y="0" width="6.4" height="6.4" />
              <rect x="0" y="7.6" width="6.4" height="6.4" />
              <rect x="7.6" y="7.6" width="6.4" height="6.4" />
            </svg>
            <span>Download for Windows</span>
            <svg
              className="arrow"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8h10m0 0-4-4m4 4-4 4" />
            </svg>
          </a>

          <a
            className="btn-source"
            href="https://github.com/epalosh/openfov"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="gh"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 .5C3.77.5.5 3.77.5 8c0 3.39 2.2 6.26 5.24 7.27.38.07.52-.17.52-.37 0-.18 0-.66-.01-1.3-2.13.46-2.58-1.03-2.58-1.03-.35-.89-.85-1.13-.85-1.13-.7-.47.05-.46.05-.46.77.05 1.18.79 1.18.79.68 1.17 1.79.83 2.23.64.07-.5.27-.84.49-1.03-1.71-.19-3.5-.85-3.5-3.8 0-.84.3-1.53.79-2.07-.08-.19-.34-.97.07-2.03 0 0 .65-.21 2.12.79.62-.17 1.27-.26 1.93-.26.65 0 1.31.09 1.93.26 1.47-1 2.11-.79 2.11-.79.42 1.06.16 1.84.08 2.03.49.54.79 1.23.79 2.07 0 2.96-1.8 3.61-3.51 3.79.28.24.52.71.52 1.43 0 1.04-.01 1.87-.01 2.13 0 .2.14.45.53.37C13.31 14.26 15.5 11.39 15.5 8 15.5 3.77 12.23.5 8 .5Z" />
            </svg>
            View source on GitHub
            <svg
              className="ext"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path d="M4 2h6v6M10 2 3 9" />
            </svg>
          </a>
        </div>
      </section>

      <div className="monitor">
        <div className="monitor-frame">
          <div className="monitor-bezel-top" />
          <div className="monitor-screen">
            <video
              className="monitor-video"
              src="/demo.mp4"
              poster="/demo-poster.png"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="OpenFOV demo"
            />
            <div className="monitor-grid" aria-hidden="true" />
            <div className="monitor-glare" aria-hidden="true" />
          </div>
        </div>
        <div className="monitor-neck" aria-hidden="true" />
        <div className="monitor-base" aria-hidden="true" />
        <div className="monitor-shadow" aria-hidden="true" />
      </div>

      <SiteFooter />
      </div>
    </>
  );
}
