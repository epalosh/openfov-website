import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const TITLE =
  "OpenFOV vs TrackIR — a free, open source head tracking alternative for iRacing";
const DESCRIPTION =
  "Comparing OpenFOV and TrackIR for iRacing — hardware, cost, latency, accuracy, and software. The honest case for using a webcam-based open source head tracker instead of TrackIR 5.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://openfov.com/vs-trackir" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://openfov.com/vs-trackir",
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

export default function VsTrackIRPage() {
  return (
    <>
      <SiteHeader />
      <div className="page">
        <article className="article">
          <div className="article-eyebrow">Compare</div>
          <h1>OpenFOV vs TrackIR — a free TrackIR alternative for iRacing</h1>
          <p className="article-lede">
            TrackIR 5 has been the de-facto head tracker for sim racing for
            over a decade — it&rsquo;s great hardware, but it&rsquo;s also
            $150+ for the camera and another $50+ for the TrackClip Pro.
            OpenFOV is a free, open source alternative that uses any webcam
            and works inside iRacing the same way. Here&rsquo;s an honest
            comparison.
          </p>

          <h2>The short version</h2>
          <p>
            <strong>Use TrackIR</strong> if you already own one, or if you
            race professionally and need every last millisecond of latency
            and sub-degree precision. <strong>Use OpenFOV</strong> if you
            want VR-style head look in iRacing for $0, on hardware you
            already own, with source code you can read and modify.
          </p>

          <h2>Hardware comparison</h2>

          <h3>TrackIR 5</h3>
          <ul>
            <li>Dedicated IR camera ($170)</li>
            <li>Reflective TrackClip Pro on your headset / cap ($55)</li>
            <li>Mounted to top of monitor, USB-powered</li>
            <li>Requires reasonably dim ambient infrared</li>
          </ul>

          <h3>OpenFOV</h3>
          <ul>
            <li>Any USB or built-in webcam ($0&ndash;$80)</li>
            <li>Nothing on your head — bare-face tracking</li>
            <li>Mounted anywhere with a clear view of your face</li>
            <li>Works in normal room lighting; lighting affects quality</li>
          </ul>

          <h2>Latency</h2>
          <p>
            TrackIR runs a dedicated IR sensor at 120&nbsp;Hz with effectively
            zero processing delay — you&rsquo;re looking at single-digit
            millisecond latency. OpenFOV runs at the webcam&rsquo;s native
            frame rate (typically 30 or 60&nbsp;fps) plus a few milliseconds
            of inference. In practice that&rsquo;s 15&ndash;30&nbsp;ms total
            — fast enough that virtually every driver can&rsquo;t tell the
            difference during normal racing. Professional alien-tier racers
            doing back-to-back testing may prefer TrackIR; everyone else
            won&rsquo;t notice.
          </p>

          <h2>Accuracy and tracking quality</h2>
          <p>
            TrackIR&rsquo;s IR reflectors give it deterministic sub-degree
            tracking that doesn&rsquo;t care about your face or expression.
            OpenFOV&rsquo;s face-mesh model is extremely accurate at the
            ranges you&rsquo;ll actually use it (yaw &plusmn;60&deg;, pitch
            &plusmn;30&deg;) and degrades gracefully when you look way off to
            the side. Both feel completely natural while racing.
          </p>

          <h2>Software and integration</h2>
          <p>
            TrackIR ships with NaturalPoint&rsquo;s closed-source software
            that exposes a head pose via a private API; iRacing supports it
            natively. OpenFOV is fully open source under MIT, drives the same
            iRacing in-car camera offsets, and has no DRM, no telemetry, and
            no account requirement. You can audit the entire codebase or
            build it yourself in one command.
          </p>

          <h2>Cost</h2>
          <p>
            TrackIR 5 + TrackClip Pro: roughly <strong>$225</strong> in 2026.
            OpenFOV: <strong>$0</strong>, or about $30 if you need to buy a
            webcam. Even a brand-new Logitech C920 ($60) costs a quarter of
            the TrackIR bundle.
          </p>

          <h2>When OpenFOV is the better pick</h2>
          <ul>
            <li>You&rsquo;re a casual or enthusiast-level iRacer</li>
            <li>You want to try head tracking before committing to hardware</li>
            <li>You don&rsquo;t want anything mounted on your head</li>
            <li>You value open source and want to inspect / modify the code</li>
            <li>You&rsquo;re on a laptop and don&rsquo;t have monitor space</li>
            <li>You stream and don&rsquo;t want the TrackClip in your face cam</li>
          </ul>

          <h2>When TrackIR is the better pick</h2>
          <ul>
            <li>You race competitively and need absolute minimum latency</li>
            <li>You race in very dark rooms where webcams struggle</li>
            <li>You already own one — no reason to switch</li>
          </ul>

          <h2>Where OpenFOV fits with other free options</h2>
          <p>
            There&rsquo;s a long history of free TrackIR alternatives — most
            notably <strong>OpenTrack</strong>, which is a fantastic project
            but typically requires you to build a DIY IR LED clip or use a
            PlayStation Eye camera with hand-soldered filters. OpenFOV is
            aimed at people who want the same outcome (in-game head look in
            iRacing) without any hardware project at all — point a webcam at
            your face and go.
          </p>

          <hr />
          <p>
            Convinced? See the{" "}
            <Link href="/install">install guide</Link> or read{" "}
            <Link href="/how-it-works">how OpenFOV works</Link> under the
            hood.
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
