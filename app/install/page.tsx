import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const TITLE = "Install OpenFOV — webcam head tracking for iRacing on Windows";
const DESCRIPTION =
  "Step-by-step install guide for OpenFOV — set up free webcam head tracking for iRacing on Windows in under five minutes. Download, webcam configuration, iRacing setup, troubleshooting.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://openfov.com/install" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://openfov.com/install",
    type: "article",
    images: ["/link-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/link-preview.png"],
  },
};

export default function InstallPage() {
  return (
    <>
      <SiteHeader />
      <div className="page">
        <article className="article">
          <div className="article-eyebrow">Guide · Install &amp; setup</div>
          <h1>Install OpenFOV for iRacing on Windows</h1>
          <p className="article-lede">
            OpenFOV is a free, open source head tracker for iRacing that runs
            on any Windows 10 or 11 machine with a webcam. The full setup
            takes about five minutes — here&rsquo;s the complete walkthrough.
          </p>

          <h2>What you&rsquo;ll need</h2>
          <ul>
            <li>A PC running Windows 10 or 11</li>
            <li>
              Any USB or built-in webcam (the Logitech C920 / C922 / Brio and
              most laptop cameras work great)
            </li>
            <li>An active iRacing membership</li>
            <li>~150 MB of free disk space</li>
          </ul>

          <h2>Step 1 — Download the latest release</h2>
          <p>
            Head to the{" "}
            <a
              href="https://github.com/epalosh/openfov/releases/latest"
              target="_blank"
              rel="noreferrer"
            >
              OpenFOV releases page on GitHub
            </a>{" "}
            and download the latest <code>OpenFOV-setup.exe</code>. Every
            release is signed and built from the public source — you can
            inspect the build workflow in the repo.
          </p>

          <h2>Step 2 — Install</h2>
          <p>
            Run the installer. Windows SmartScreen may show a warning the
            first time because the binary doesn&rsquo;t carry an EV code
            signing certificate (those cost $400/year and OpenFOV is free) —
            click <strong>More info &rarr; Run anyway</strong>. If you&rsquo;d
            rather build from source, the GitHub repo has a one-command
            developer build under the README.
          </p>

          <h2>Step 3 — Pick your webcam</h2>
          <p>
            Launch OpenFOV. The first run opens the camera picker. Choose the
            webcam you want to use for head tracking, then click{" "}
            <strong>Calibrate</strong>. Look straight at the monitor and stay
            still for 2&ndash;3 seconds while OpenFOV captures your neutral
            head pose. This is what the rest of your movement will be
            measured against — try to sit how you normally sit while racing.
          </p>

          <h3>Webcam tips for the best tracking quality</h3>
          <ul>
            <li>
              <strong>Lighting matters more than resolution.</strong> Even
              indirect window light is better than a 4K webcam in a dark room.
            </li>
            <li>
              <strong>Mount the webcam centered above your monitor</strong>{" "}
              (the same place you&rsquo;d put a Zoom camera).
            </li>
            <li>
              <strong>Distance: arm&rsquo;s length.</strong> About
              50&ndash;80&nbsp;cm from your face is the sweet spot.
            </li>
            <li>
              <strong>Disable webcam &ldquo;auto-framing&rdquo;</strong>{" "}
              features (Logitech RightSight, Windows Studio Effects, etc.) —
              they move the image and confuse the tracker.
            </li>
          </ul>

          <h2>Step 4 — Configure iRacing</h2>
          <p>
            Inside iRacing, open <strong>Options &rarr; Driver</strong> and
            make sure <em>Cockpit Head Movement</em> is enabled. That&rsquo;s
            it — OpenFOV drives the same camera offsets iRacing already
            supports, so no special mod or DLL injection is needed. Your
            membership is in no way at risk.
          </p>

          <h2>Step 5 — Drive</h2>
          <p>
            Start any session and OpenFOV will begin sending head pose to
            iRacing the moment you&rsquo;re in-car. Turn your head left, the
            camera looks left. Lean forward, the camera leans into the
            corner. Adjust sensitivity in the OpenFOV tray menu if you want
            more or less travel.
          </p>

          <h2>Troubleshooting</h2>

          <h3>The in-game camera doesn&rsquo;t move</h3>
          <p>
            Check that <em>Cockpit Head Movement</em> is enabled in iRacing
            options and that OpenFOV is reporting a live pose (the tray icon
            turns green when tracking is active).
          </p>

          <h3>Tracking is jittery</h3>
          <p>
            Usually a lighting problem. Add a soft light source in front of
            you (a desk lamp aimed at the wall behind your monitor works
            great) and recalibrate.
          </p>

          <h3>The camera drifts when I&rsquo;m looking straight ahead</h3>
          <p>
            Recalibrate from the OpenFOV tray menu. Drift typically means
            your seating position changed from the original calibration.
          </p>

          <h3>Where to get help</h3>
          <p>
            Open an issue on{" "}
            <a
              href="https://github.com/epalosh/openfov/issues"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            — include your Windows version, webcam model, and a short
            description of what&rsquo;s happening. The project is actively
            maintained.
          </p>

          <hr />
          <p>
            New to webcam head tracking? Read{" "}
            <Link href="/how-it-works">how OpenFOV works under the hood</Link>,
            or see why it&rsquo;s a popular{" "}
            <Link href="/vs-trackir">free TrackIR alternative</Link>.
          </p>
          <a
            className="article-cta"
            href="https://github.com/epalosh/openfov/releases/latest"
            target="_blank"
            rel="noreferrer"
          >
            Download OpenFOV for Windows &rarr;
          </a>
        </article>
        <SiteFooter />
      </div>
    </>
  );
}
