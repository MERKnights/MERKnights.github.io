import Link from "next/link";

export const metadata = { title: "Competitions" };

const comps = [
  { href: "/competitions/mate", title: "MATE ROV", blurb: "Remotely operated vehicle competition focused on underwater tasks." },
  { href: "/competitions/robosub", title: "RoboSub", blurb: "Autonomous underwater vehicle challenge." },
  { href: "/competitions/roboboat", title: "RoboBoat", blurb: "Autonomous surface vessel competition." },
];

export default function CompetitionsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--color-secondary)" }}>Competitions</h1>
      <p className="mb-6 opacity-80 max-w-2xl" style={{ color: "var(--color-accent)" }}>
        MEC participates in multiple marine robotics competitions. Explore each
        team to learn about the objectives, technologies, and how to get
        involved.
      </p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {comps.map((c) => (
          <li key={c.href} className="card p-4 hover:shadow-sm transition-shadow">
            <h2 className="font-semibold text-lg mb-1">
              <Link className="hover:underline" href={c.href}>{c.title}</Link>
            </h2>
            <p className="text-sm opacity-80" style={{ color: "var(--color-accent)" }}>{c.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
