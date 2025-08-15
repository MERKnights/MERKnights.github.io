export const metadata = { title: "RoboBoat" };

export default function RoboBoatPage() {
  return (
    <section className="space-y-4">
  <h1 className="text-3xl font-bold" style={{ color: "var(--color-secondary)" }}>RoboBoat</h1>
  <p className="opacity-80" style={{ color: "var(--color-accent)" }}>
        RoboBoat is an autonomous surface vehicle competition focusing on
        navigation, obstacle avoidance, and on-water autonomy.
      </p>
  <h2 className="text-xl font-semibold" style={{ color: "var(--color-secondary)" }}>Focus Areas</h2>
  <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--color-accent)" }}>
        <li>Perception and state estimation</li>
        <li>Path planning and control</li>
        <li>Hull design and propulsion</li>
      </ul>
    </section>
  );
}
