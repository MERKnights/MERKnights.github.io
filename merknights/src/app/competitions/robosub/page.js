export const metadata = { title: "RoboSub" };

export default function RoboSubPage() {
  return (
    <section className="space-y-4">
  <h1 className="text-3xl font-bold" style={{ color: "var(--color-secondary)" }}>RoboSub</h1>
  <p className="opacity-80" style={{ color: "var(--color-accent)" }}>
        RoboSub is an autonomous underwater vehicle competition focused on
        perception, autonomy, and robust underwater platforms.
      </p>
  <h2 className="text-xl font-semibold" style={{ color: "var(--color-secondary)" }}>Focus Areas</h2>
  <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--color-accent)" }}>
        <li>Computer vision and perception</li>
        <li>Controls and navigation</li>
        <li>Acoustics and localization</li>
      </ul>
    </section>
  );
}
