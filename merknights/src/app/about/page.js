export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold" style={{ color: "var(--color-secondary)" }}>About the Marine Environment Club</h1>
      <p className="opacity-80" style={{ color: "var(--color-accent)" }}>
        The Marine Environment Club (MEC) at the University of Central Florida
        is a student-led organization focused on marine robotics, ocean
        conservation, and hands-on engineering projects.
      </p>
      <p className="opacity-80" style={{ color: "var(--color-accent)" }}>
        We compete in international competitions such as MATE ROV, RoboSub, and
        RoboBoat while providing members opportunities to learn mechanical,
        electrical, and software engineering skills.
      </p>
    </section>
  );
}
