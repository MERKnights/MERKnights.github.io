import Image from "next/image";
import EqualHeightImageRow from "@/components/EqualHeightImageRow";

export const metadata = { title: "MATE ROV" };

export default function MatePage() {
return (
    <section>
        <div className="flex justify-between items-start">
            <div className="flex-1 space-y-4">
                <h1>MATE ROV</h1>
                <p>
                    The MATE ROV competition challenges teams to design, build, and operate
                    remotely operated vehicles to complete underwater tasks inspired by
                    real-world scenarios. MER Knights' MATE ROV Team is the Neptune Knights.
                </p>
                <a
                    href="https://materovcompetition.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/logos/MATELogo.png"
                        width={300}
                        height={1}
                        alt="MATE ROV Competition logo"
                        className="rounded-lg pb-1"
                    />
                </a>

                <h3>Members of Neptune Knights Work In:</h3>
                <ul className="accent-paragraph">
                    <li>- Collaborative design utilizing CAD</li>
                    <li>
                        - Designing parts for manufacturing (3D printing, laser cutting,
                        machining)
                    </li>
                    <li>- Electrical system design and integration</li>
                    <li>- Software integration including control software</li>
                    <li>- Testing and validation of ROV systems</li>
                </ul>
            </div>
            <div className="ml-6 flex-shrink-0">
                <Image
                    src="/logos/NeptuneKnights/NeptuneKnights_FullLogo_MetallicGoldTransparentBackground.png"
                    width={500}
                    height={500}
                    alt="Neptune Knights Full Gear"
                />
            </div>
        </div>
        <div>
            <h1>2024 Season</h1>
            <p>
                The 2024 MATE Competition was MER Knights' first project. In the first
                year of the club's founding, the Neptune Knights ROV Team was
                established. In our first year, we qualified for and competed at the
                international competition in Kingsport, Tennessee.
            </p>
            <EqualHeightImageRow
                className="pt-2"
                images={[
                    {
                        src: "/images/2024MATECompetitionTeam.jpg",
                        alt: "2024 MATE Competition Team from MER Knights",
                        width: 300,
                        height: 300,
                    },
                    {
                        src: "/images/2024MATECompetitionPoolside.jpg",
                        alt: "2024 MATE Competition Poolside",
                        width: 889,
                        height: 300,
                    },
                    {
                        src: "/images/2024ROV.jpg",
                        alt: "2024 MER Knights' ROV",
                        width: 500,
                        height: 300,
                    },
                ]}
            />
        </div>
    </section>
);
}
