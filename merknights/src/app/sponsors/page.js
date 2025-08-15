export const metadata = { title: "Sponsors" };

const tiers = [
  { name: "Platinum", items: [] },
  { name: "Gold", items: [] },
  { name: "Silver", items: [] },
];

export default function SponsorsPage() {
  return (
    <section className="space-y-4">
      <h1>Sponsors</h1>
      <p className="accent-text">
        We’re looking for sponsors to help us with our mission of furthering student innovation.
        To become a sponsor, please contact us at <a className="underline" href="mailto:ucf.marine.robotics@gmail.com">ucf.marine.robotics@gmail.com</a>.
      </p>
      <h2>Detailed Sponsorship Packet Coming Soon</h2>
    </section>
  );
}
