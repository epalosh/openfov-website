type Comment = { quote: string; user: string };

const COMMENTS: Comment[] = [
  {
    quote:
      "Just installed your software. It was so easy. No need to mess around with any settings. It’s an absolute game changer for us single monitor folk. Appreciate your work 🙏",
    user: "deaddropfarms",
  },
  { quote: "This is amazing", user: "seaofb**bs9434" },
  { quote: "Woah! Looks smooth and intuitive!", user: "stoodi" },
  {
    quote: "I feel like this would be great for my ultrawide.",
    user: "HarringtonMAH11",
  },
  { quote: "I think this is so dope!", user: "ArcRaiderKindaPvP" },
  {
    quote: "I've been waiting for this for a couple years!!",
    user: "Wukulelelele",
  },
  {
    quote:
      "Ill def check this out. As someone with a single ultra wide screen, i hate pressing a button to look left or right mid race",
    user: "vish4l",
  },
  { quote: "Nice!!!", user: "Affectionate-Exit-86" },
  { quote: "nice work", user: "you_killed_my_" },
  {
    quote:
      "I was just thinking about this since i use something similar for DCS, thanks for making it!",
    user: "**opMasterMC",
  },
  {
    quote:
      "So awesome. Heading to micro center to get a webcam this weekend.",
    user: "surechoice999",
  },
  {
    quote:
      "Dude you sir are doing the Lord's work with this creation this really should be built right into iRacing as an option and they should give you credit and royalties on it in my opinion. Something like this would be an absolute game changer for anyone with limited hardware.",
    user: "RabicanShiver",
  },
  { quote: "Can’t wait to try this", user: "Putrid-Industry8963" },
  {
    quote:
      "This is amazing. Stop! Get paid for this! Get a sweet 8 figures for this. Then for work for change. iRACING $$$$",
    user: "brekfist",
  },
];

// Deal the comments across three columns so each stream loops its own set.
const COLUMN_COUNT = 3;
const COLUMNS: Comment[][] = Array.from({ length: COLUMN_COUNT }, (_, c) =>
  COMMENTS.filter((_, i) => i % COLUMN_COUNT === c),
);

// Per-column scroll duration and a negative delay so the streams start
// out of phase with each other.
const COLUMN_TIMING = [
  { dur: "52s", delay: "-6s" },
  { dur: "64s", delay: "-31s" },
  { dur: "58s", delay: "-17s" },
];

function avatarInitial(user: string) {
  const ch = user.replace(/[^a-z0-9]/gi, "")[0] ?? "?";
  return ch.toUpperCase();
}

// Cheap stable hash → one of four avatar tints.
function avatarTone(user: string) {
  let h = 0;
  for (let i = 0; i < user.length; i++) h = (h * 31 + user.charCodeAt(i)) | 0;
  return Math.abs(h) % 4;
}

function CommentRow({ c, hidden }: { c: Comment; hidden?: boolean }) {
  return (
    <article className="rc" aria-hidden={hidden || undefined}>
      <div className={`rc-avatar rc-tone-${avatarTone(c.user)}`}>
        {avatarInitial(c.user)}
      </div>
      <div className="rc-user">u/{c.user}</div>
      <p className="rc-body">{c.quote}</p>
      <div className="rc-actions" aria-hidden="true">
        <span className="rc-vote">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
          </svg>
          <span className="rc-vote-dot" />
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
          </svg>
        </span>
        <span className="rc-reply">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 13.5 3.6 10.3A5.5 5.5 0 1 1 5.7 12.4z" />
          </svg>
          Reply
        </span>
      </div>
      <span className="rc-thread" aria-hidden="true" />
    </article>
  );
}

function ThreadColumn({
  comments,
  dur,
  delay,
  className = "",
  hidden,
}: {
  comments: Comment[];
  dur: string;
  delay: string;
  className?: string;
  hidden?: boolean;
}) {
  return (
    <div className={`thread-col ${className}`} aria-hidden={hidden || undefined}>
      <div
        className="thread-stream"
        style={{ "--dur": dur, "--delay": delay } as React.CSSProperties}
      >
        {/* Rendered twice so the upward scroll loops seamlessly. */}
        {comments.map((c, i) => (
          <CommentRow c={c} key={`a-${i}`} />
        ))}
        {comments.map((c, i) => (
          <CommentRow c={c} hidden key={`b-${i}`} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="thread-wall"
      aria-label="What people are saying"
      data-reveal
      suppressHydrationWarning
    >
      {COLUMNS.map((col, ci) => (
        <ThreadColumn
          key={ci}
          comments={col}
          dur={COLUMN_TIMING[ci].dur}
          delay={COLUMN_TIMING[ci].delay}
        />
      ))}
      {/* Single-column stream with every comment; only shown on phones. */}
      <ThreadColumn
        comments={COMMENTS}
        dur="150s"
        delay="-20s"
        className="thread-col-all"
        hidden
      />
    </section>
  );
}
