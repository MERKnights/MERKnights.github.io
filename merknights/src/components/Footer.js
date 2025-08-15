import Link from "next/link";

export default function Footer() {
return (
    <footer className="mt-12" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container mx-auto px-4 py-8">
            <div className="text-sm flex items-center justify-between gap-4">
                <div>
                    <div className="font-medium" style={{ color: "var(--color-secondary)" }}>Marine Environment Robotics @ UCF</div>
                    <div className="opacity-70" style={{ color: "var(--color-accent)" }}>© {new Date().getFullYear()} All rights reserved.</div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="/logos/MER_Trident/MER_Trident.svg"
                        alt="MER Trident"
                        className="h-40 w-auto"
                    />
                </div>

                <nav className="flex items-center gap-4">
                    <Link className="hover:underline" href="/about" style={{ color: "var(--color-foreground)" }}>About</Link>
                    <Link className="hover:underline" href="/sponsors" style={{ color: "var(--color-foreground)" }}>Sponsors</Link>
                    <a className="hover:underline" href="mailto:ucf.marine.robotics@gmail.com" style={{ color: "var(--color-foreground)" }}>Contact</a>
                </nav>
            </div>
        </div>
    </footer>
);
}
