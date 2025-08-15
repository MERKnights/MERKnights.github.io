import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Marine Environment Robotics @ UCF
      </h1>
      <p className="max-w-2xl mx-auto opacity-80" style={{ color: "var(--color-accent)" }}>
        Building the future of marine robotics through hands-on engineering,
        research, and competition.
      </p>
      <p>
        The Marine Environment Robotics club at the University of Central Florida is dedicated to making robotics 
        education accessible while promoting marine conservation through innovative research and the practical 
        application of robotics. Our current focus is the MATE International ROV Competition and RoboSub international AUV competition, where we will design and build 
        underwater vehicles to perform various tasks.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link className="px-5 py-3 rounded font-medium" href="/competitions" style={{ backgroundColor: "var(--color-primary)", color: "#0a0a0a" }}>
          Explore Competitions
        </Link>
        <Link className="px-5 py-3 rounded border hover:opacity-90" href="/about" style={{ borderColor: "var(--color-border)" }}>
          Learn More
        </Link>
      </div>
    </section>
  );
}
