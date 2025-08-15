import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero (full width edge-to-edge, no cropping) */}
      <section className="full-bleed -mt-10 relative overflow-hidden bg-black">
        {/* Image spans the entire viewport width without cropping */}
        <Image
          src="/images/TeamInFrontOfTaurus.JPG"
          alt="Marine Environment Robotics team in front of the Taurus vehicle"
          width={2400}
          height={1600}
          priority
          sizes="100vw"
          className="w-full h-auto opacity-60 select-none"
        />

        {/* Fade/gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        {/* Foreground content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 py-10 sm:px-10">
          <h1>
            Marine Environment Robotics @ UCF
          </h1>
          <p className="hidden sm:block" style={{ color: "var(--color-accent)" }}>
            Building the future of marine robotics through hands-on engineering, research, and competition.
          </p>
        </div>
      </section>


      <section className="text-center space-y-4">
        <p>
          The Marine Environment Robotics club at the University of Central Florida is dedicated to making robotics
          education accessible while promoting marine conservation through innovative research and the practical
          application of robotics. Our current focus is the MATE International ROV Competition and RoboSub international
          AUV competition, where we design and build underwater vehicles to perform a variety of real-world tasks.
        </p>
      </section>
    </div>
  );
}
