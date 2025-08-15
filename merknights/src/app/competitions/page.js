import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Competitions" };

const comps = [
  {
    href: "/competitions/mate",
    title: "MATE ROV",
    blurb: "Remotely Operated Vehicle competition",
    image: "/images/2024MATECompetitionTeam.jpg", // Replace with your preferred image
  },
  {
    href: "/competitions/robosub",
    title: "RoboSub",
    blurb: "Autonomous Underwater Vehicle challenge.",
    image: "/logos/RoboSubLogo.png", // Replace with your preferred image
  },
  {
    href: "/competitions/roboboat",
    title: "RoboBoat",
    blurb: "Autonomous Surface Vehicle competition.",
    image: "/images/2025RoboboatInWater.jpg", // Add when available
  },
];

export default function CompetitionsPage() {
  return (
    <section>
      <h1>Competitions</h1>
  <p>
        MER Knights participates in multiple marine robotics competitions. Explore each 
        team to learn about the objectives, technologies, and how to get
        involved.
      </p>
  <p>
        If you are interested in participating in any competition, be sure to join our Discord.
        All of our communication for meeting times and design updates are via Discord.
      </p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {comps.map((c) => (
          <li key={c.href} className="group card overflow-hidden p-0 rounded-lg hover:shadow-sm transition-shadow">
            <Link href={c.href} className="block relative h-96 sm:h-112">
              {/* Image or gradient fallback */}
              {c.image ? (
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover brightness-75 group-hover:brightness-[.70] transition duration-300"
                  priority={false}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-700" />
              )}

              {/* Dark overlay to improve text readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors" />

              {/* Text content */}
              <div className="relative z-10 h-full w-full flex flex-col justify-end p-4">
                <h3>
                  {c.title}
                </h3>
                <p style={{ color: "#ffffff" }}>{c.blurb}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
