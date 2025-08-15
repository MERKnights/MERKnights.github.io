export const metadata = { title: "Sponsors" };

const tiers = [
  { name: "Platinum", items: [] },
  { name: "Gold", items: [] },
  { name: "Silver", items: [] },
];

export default function SponsorsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--color-secondary)" }}>Sponsors</h1>
      <p className="mb-8 opacity-80 max-w-2xl" style={{ color: "var(--color-accent)" }}>
        We’re grateful to our sponsors whose support enables student innovation.
        To become a sponsor, please contact us at <a className="underline" href="mailto:mec@ucf.edu">mec@ucf.edu</a>.
      </p>
      <div className="space-y-8">
        {tiers.map((t) => (
          <div key={t.name}>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--color-secondary)" }}>{t.name}</h2>
            {t.items.length === 0 ? (
              <div className="text-sm opacity-60" style={{ color: "var(--color-accent)" }}>Your logo here</div>
            ) : (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {t.items.map((s) => (
                  <li key={s.name} className="card p-4">{s.name}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
