// Centralized social links for the navbar and elsewhere.
// Update the hrefs and ensure corresponding icons exist in /public/logos.

const socialLinks = [
  {
    key: "discord",
    href: "https://discord.gg/Bj8UrN6ktP",
    title: "Discord",
    ariaLabel: "Discord",
    iconSrc: "/logos/DiscordLogo.svg",
    external: true,
  },
  {
    key: "email",
    href: "mailto:ucf.marine.robotics@gmail.com",
    title: "Email",
    ariaLabel: "Email",
    iconSrc: "/logos/EmailLogo.svg",
    external: false,
  },
  {
    key: "instagram",
    href: "https://instagram.com/merknights",
    title: "Instagram",
    ariaLabel: "Instagram",
    iconSrc: "/logos/InstagramLogo.svg",
    external: true,
  },
  {
    key: "github",
    href: "https://github.com/merknights",
    title: "GitHub",
    ariaLabel: "GitHub",
    iconSrc: "/logos/GithubLogo.svg",
    external: true,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/company/marine-environment-robotics",
    title: "LinkedIn",
    ariaLabel: "LinkedIn",
    iconSrc: "/logos/LinkedinLogo.svg",
    external: true,
  }
];

export default socialLinks;
