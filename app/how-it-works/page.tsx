import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const TITLE = "How OpenFOV's webcam head tracking works in iRacing";
const DESCRIPTION =
  "How OpenFOV reads your head pose from a normal webcam and drives iRacing's in-game FOV in real time — the capture, tracking, and projection pipeline explained.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://openfov.com/how-it-works" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://openfov.com/how-it-works",
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

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <div className="page">
        <article className="article">
          <div className="article-eyebrow">Guide · How it works</div>
          <h1>How OpenFOV&rsquo;s webcam head tracking works in iRacing</h1>
          <p className="article-lede">
            OpenFOV is a free, open source head tracker for iRacing that uses a
            regular USB or laptop webcam — no infrared clip, no IR camera, no
            VR headset. This page walks through the full capture &rarr; track
            &rarr; project pipeline so you know exactly what&rsquo;s happening
            when you race.
          </p>

          <h2>1. Capture: a normal webcam, on your machine</h2>
          <p>
            OpenFOV opens any DirectShow-compatible camera — the built-in
            webcam on your laptop, a USB webcam clipped to your monitor, or a
            dedicated streaming camera like the Logitech C920 or Brio. Frames
            stream at up to 1080p / 60&nbsp;fps and stay entirely on your local
            machine. No cloud upload, no telemetry, no account required.
          </p>
          <p>
            Because OpenFOV does not require infrared LEDs or a special camera,
            the up-front cost of webcam-based head tracking for iRacing is zero
            if you already have a webcam, and roughly $30 if you don&rsquo;t.
            That&rsquo;s the core idea behind the project: <strong>VR-style
            immersion in iRacing without spending $150+ on a TrackIR rig or
            $400+ on a VR headset</strong>.
          </p>

          <h2>2. Track: face-mesh head pose estimation</h2>
          <p>
            Every webcam frame is fed to a small on-device face-mesh model that
            returns the 3D pose of your head — six degrees of freedom in
            total:
          </p>
          <ul>
            <li>
              <strong>Yaw</strong> — looking left and right (the biggest one
              for sim racing — corner apex, mirror checks, looking through the
              corner)
            </li>
            <li>
              <strong>Pitch</strong> — looking up and down (cresting hills,
              spotting braking markers)
            </li>
            <li>
              <strong>Roll</strong> — tilting your head sideways (cornering
              lean, leaning to see past the A-pillar)
            </li>
            <li>
              <strong>Translation (x, y, z)</strong> — leaning forward to see
              into a corner, leaning sideways to peek past the wheel
            </li>
          </ul>
          <p>
            The model runs locally on your CPU at the camera&rsquo;s frame
            rate. Tracking latency is typically a single frame plus a few
            milliseconds of inference — well below what you can perceive while
            driving.
          </p>

          <h2>3. Project: writing pose into iRacing&rsquo;s camera API</h2>
          <p>
            Once OpenFOV has your head pose, it writes those values directly
            into iRacing&rsquo;s in-car camera offsets. Yaw becomes a camera
            rotation, translation becomes a camera offset, and roll adds a
            subtle tilt. The result: the in-game cockpit camera moves the way
            your real head moves, in real time, every frame.
          </p>
          <p>
            Because OpenFOV drives the official iRacing FOV / camera offsets
            rather than injecting input or simulating a fake VR HMD,
            it&rsquo;s fully compatible with triples, ultrawides, and standard
            single-monitor setups. There&rsquo;s nothing to configure inside
            iRacing beyond turning your in-car head movement on.
          </p>

          <h2>Why it feels VR-like on a flat monitor</h2>
          <p>
            On a regular monitor without head tracking, iRacing&rsquo;s camera
            is locked to your steering wheel. You can&rsquo;t look into a
            corner; you can&rsquo;t lean to spot braking markers; you
            can&rsquo;t check your mirror without rebinding keys. With OpenFOV
            running, the camera tracks your head one-to-one. Looking through
            the apex of Eau Rouge, leaning forward to spot the Daytona bus
            stop, glancing at your wing mirror at Spa — it all just works,
            naturally.
          </p>
          <p>
            That&rsquo;s why we describe OpenFOV as &ldquo;VR-style
            functionality for your monitor.&rdquo; You don&rsquo;t get full
            stereo depth like a Quest 3 or Pimax — but you get the most
            valuable VR feature for sim racing (1:1 head-look) at zero cost.
          </p>

          <h2>System requirements</h2>
          <ul>
            <li>Windows 10 or Windows 11</li>
            <li>A working USB or built-in webcam</li>
            <li>iRacing (any membership tier)</li>
            <li>~150&nbsp;MB of disk space</li>
          </ul>

          <hr />
          <p>
            Ready to try it? See the{" "}
            <Link href="/install">OpenFOV install guide</Link>, or compare to
            other options on the{" "}
            <Link href="/vs-trackir">OpenFOV vs TrackIR</Link> page.
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
