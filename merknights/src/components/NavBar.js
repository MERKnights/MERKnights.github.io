"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import socialLinks from "./socialLinks";

const links = [
  { href: "/", label: "Home" },
  { href: "/join", label: "Join" },
  {
    href: "/competitions",
    label: "Competitions",
    children: [
      { href: "/competitions/mate", label: "MATE" },
      { href: "/competitions/robosub", label: "RoboSub" },
      { href: "/competitions/roboboat", label: "RoboBoat" },
    ],
  },
  { href: "/sponsors", label: "Sponsors" },
];

export default function NavBar() {
    const pathname = usePathname();

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <header className="border-b sticky top-0 z-50 backdrop-blur site-header">
        <div className="container mx-auto px-4 py-3 flex items-center gap-6">
            <Link href="/" className="flex items-center" aria-label="MERKnights @ UCF">
                    <img
                        src="/logos/MER_Logo/MER_DetailedLogo_Circle.png"
                        alt="MERKnights @ UCF"
                        className="h-20 w-auto"
                    />
            </Link>
            <nav className="flex-1">
                <ul className="flex items-center gap-4 text-sm">
                    {links.map((l) => (
                        <li key={l.href} className="relative group">
                            {l.children ? (
                                <>
                                    <Link
                                                                                href={l.href}
                                                                                className={`nav-link ${isActive(l.href) ? "nav-link--active" : ""}`}
                                    >
                                        {l.label}
                                    </Link>
                                                                        <div className="absolute left-0 top-full pt-2 hidden group-hover:block menu-dropdown">
                                                                                <ul className="py-2 min-w-[10rem]">
                                            {l.children.map((c) => (
                                                <li key={c.href}>
                                                    <Link
                                                                                                                href={c.href}
                                                                                                                className={`block whitespace-nowrap px-4 py-2 ${isActive(c.href) ? "nav-link--active" : ""}`}
                                                    >
                                                        {c.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                                                <Link
                                                                        href={l.href}
                                                                        className={`nav-link ${isActive(l.href) ? "nav-link--active" : ""}`}
                                                                >
                                    {l.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                    <a
                        key={s.key}
                        href={s.href}
                        {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center hover:opacity-80 transition-opacity"
                        aria-label={s.ariaLabel}
                        title={s.title}
                    >
                        <img src={s.iconSrc} alt={s.title} className="h-6 w-6 social-icon" />
                    </a>
                ))}
            </div>
        </div>
    </header>
    );
}
