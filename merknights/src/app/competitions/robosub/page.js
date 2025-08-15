import Image from "next/image";
import EqualImageHeight from "@/components/EqualHeightImageRow";

export const metadata = { title: "RoboSub" };

export default function RoboSubPage() {
  return (
    <section>
        <div className="flex justify-between items-start">
            <div className="flex-1 space-y-4">
                <h1>RoboSub</h1>
                <p>
                    RoboSub is a competition hosted by RoboNation that challenges students to design and build
                    and Autonomous Underwater Vehicle (AUV). Every August, teams from around the world compete in a variety of challenges.
                    The AUV will need to complete navigation challenges, identyify objects, and interact with its environment.
                </p>
                <a
                    href="https://robosub.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/logos/RoboSubLogo.png"
                        width={300}
                        height={1}
                        alt="RoboSub Competition logo"
                        className="rounded-lg pb-1"
                    />
                </a>

                <h3>Members of our RoboSub Team Will Work In:</h3>
                <ul className="accent-paragraph">
                    <li>- Collaborative design utilizing CAD</li>
                    <li>
                        - Designing parts for manufacturing (3D printing, laser cutting,
                        machining)
                    </li>
                    <li>- Electrical system design and integration</li>
                    <li>- Simulation of the robot to test autonomy software</li>
                    <li>- Autonomous control using ROS2 including computer vision, sensor fusion, and path planning</li>
                    <li>- Testing and validation of AUV systems</li>
                </ul>
            </div>
            {/* <div className="ml-6 flex-shrink-0">
                <Image
                    src="/logos/NeptuneKnights/NeptuneKnights_FullLogo_MetallicGoldTransparentBackground.png"
                    width={500}
                    height={500}
                    alt="Neptune Knights Full Gear"
                />
            </div> */}
        </div>
        {/* <div>
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
        </div> */}
    </section>
  );
}
