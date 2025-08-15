// Centralized social links for the navbar and elsewhere.
// Update the hrefs and ensure corresponding icons exist in /public/logos.

import { DISCORD_INVITE } from "@/config/links";

const socialLinks = [
  {
    key: "discord",
  href: DISCORD_INVITE,
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
