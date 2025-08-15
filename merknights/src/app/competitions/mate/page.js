import Image from "next/image";

export const metadata = { title: "MATE ROV" };

export default function MatePage() {
return (
    <section className="space-y-4">
        <h1 className="text-6xl font-bold" style={{ color: "var(--color-secondary)" }}>MATE ROV</h1>
        <p className="opacity-80" style={{ color: "var(--color-accent)" }}>
            The MATE ROV competition challenges teams to design, build, and operate
            remotely operated vehicles to complete underwater tasks inspired by real-world scenarios.
        </p>
        <a href="https://materovcompetition.org" target="_blank" rel="noopener noreferrer">
            <Image
                src="/logos/MATELogo.png"
                width={300}
                height={1}
                alt="MATE ROV Competition logo"
                className="rounded-lg"
            />
        </a>
        
        <h2 className="text-xl font-semibold" style={{ color: "var(--color-secondary)" }}>Focus Areas</h2>
        <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--color-accent)" }}>
            <li>ROV frame and buoyancy</li>
            <li>Tether management and topside control</li>
            <li>Embedded control and sensor integration</li>
        </ul>
        <h1 className="text-5xl font-bold" style={{ color: "var(--color-secondary)" }}>2024 Season</h1>
        <p>
            The 2024 MATE Competiion was MER Knight's first project. In the first year of the club's founding, the Neptune Knights ROV Team was established.
            In our first year, we qualifiied for and competed at the international competition in Kingsport, Tennessee.
        </p>
        <div className="grid auto-cols-max grid-flow-col gap-4">
            <Image
                src="/images/2024MATECompetitionTeam.jpg"
                alt="2024 MATE Competition Team from MER Knights"
                width={300}
                height={1}
                className="rounded-lg object-cover w-full h-auto"
            />
            <Image
                src="/images/2024MATECompetitionPoolside.jpg"
                alt="2024 MATE Competition Poolside"
                width={500}
                height={1}
                className="h-full rounded-lg object-cover w-full h-auto"
            />
            <Image
                src="/images/2024ROV.jpg"
                alt="2024 MER Knights' ROV"
                width={300}
                height={200}
                className="h-full rounded-lg object-cover w-full h-auto"
            />
        </div>
    </section>
);
}
