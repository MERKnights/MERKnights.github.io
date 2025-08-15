import EqualHeightImageRow from "@/components/EqualHeightImageRow";
import Image from "next/image";

export const metadata = { title: "RoboBoat" };

export default function RoboBoatPage() {
  return (
    <section>
        <div className="flex justify-between items-start">
            <div>
                <h1>RoboBoat</h1>
                <p>
                    RoboBoat is an Autonomous Surface Vehicle competition held by RoboNation.
                    The competition is open to high schools and universities around the world.
                    Every March, more than 25 teams compete in a set of challenges designed to test their
                    engineering and problem-solving skills.
                    <br></br>
                    <br></br>
                    Tasks may include navigating through a channel, seeking out and shooting targets along the course,
                    and docking the boat, all autonomously.
                    <br></br>
                    <br></br>
                    The RoboBoat team is not officially part of MER Knights, but some of our members do participate.
                    The Orlando RoboBoat Team is led by Don Harper, the director of the TI Innovation Lab, so you
                    can reach out to him if you are interested in getting invovled.
                </p>
                <a
                    href="https://roboboat.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/logos/RoboboatLogo.png"
                        width={300}
                        height={1}
                        alt="RoboBoat Competition logo"
                        className="rounded-lg pb-1"
                    />
                </a>
            </div>
        </div>
        <div>
            <h1>2025 Competition</h1>
            <p>
                The WaterDogs competed at the 2025 RoboBoat competition in Sarasota, Florida in March with their boat, 
                the Astronautical.
            </p>
            <EqualHeightImageRow
                className="pt-2"
                images={[
                    {
                        src: "/images/2025RoboboatInWater.jpg",
                        alt: "2025 RoboBoat",
                        width: 300,
                        height: 300,
                    },
                    {
                        src: "/images/2025RoboboatCompetition.png",
                        alt: "2025 RoboBoat Competition",
                        width: 889,
                        height: 300,
                    },
                    {
                        src: "/images/2025AstronauticalCloseup.png",
                        alt: "2025 Astronautical Closeup",
                        width: 500,
                        height: 300,
                    },
                ]}
            />
        </div>
    </section>
  );
}
