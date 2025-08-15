export const metadata = { title: "About" };
import { DISCORD_INVITE, GOOGLE_CALENDAR } from "@/config/links";

export default function AboutPage() {
  return (
    <>
    <section>
      <h1>Join MER Knights:</h1>
      <p>
        Are you interested in getting hands on experience in robotics? MER Knights is an interdisciplinary club meaning members from all
        majors are welcome to participate. We need all skillsets.
        <br></br>
        <br></br>
        Click the button below to join our Discord server:
      </p>
      <a
        href={DISCORD_INVITE}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          backgroundColor: '#5865F2',
          color: '#ffffff',
          border: '1px solid #5865F2',
          borderRadius: '0.25rem',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        <img
          src="/logos/DiscordLogo.svg"
          alt="Discord Logo"
          width={24}
          height={24}
          style={{
            marginRight: '0.5rem',
            filter: 'invert(1)'
          }}
        />
        Join on Discord
      </a>
      <p>
        We post all meetings and communicate about all projects on Discord. We host GBMs once a month which is the best way to learn about the club.
      </p>
  </section>
  <section>
      <h2>Club Calendar</h2>
      <p className="accent-paragraph">Upcoming meetings and events are posted on our Google Calendar.</p>
      <div className="card overflow-hidden">
        <iframe
          title="MER Knights Google Calendar"
          src={GOOGLE_CALENDAR}
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </div>
  </section>
  </>
  );
}
