"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import socialLinks from "./socialLinks";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
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

return (
    <header className="border-b sticky top-0 z-50 backdrop-blur" style={{ backgroundColor: "color-mix(in oklab, var(--color-background) 85%, transparent)", borderColor: "var(--color-border)" }}>
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
                                        className={`px-2 py-1 rounded ${
                                            pathname === l.href ? "font-medium" : ""
                                        }`}
                                        style={{ color: pathname === l.href ? "var(--color-primary)" : undefined }}
                                    >
                                        {l.label}
                                    </Link>
                                    <div className="absolute left-0 mt-2 hidden group-hover:block rounded shadow-lg" style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}>
                                        <ul className="py-2">
                                            {l.children.map((c) => (
                                                <li key={c.href}>
                                                    <Link
                                                        href={c.href}
                                                        className={`block whitespace-nowrap px-4 py-2 ${
                                                            pathname === c.href ? "font-medium" : ""
                                                        }`}
                                                        style={{ color: pathname === c.href ? "var(--color-primary)" : undefined }}
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
                                    className={`px-2 py-1 rounded ${
                                        pathname === l.href ? "font-medium" : ""
                                    }`}
                                    style={{ color: pathname === l.href ? "var(--color-primary)" : undefined }}
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
