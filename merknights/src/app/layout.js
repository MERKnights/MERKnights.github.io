import localFont from "next/font/local";
import { Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const bodyFont = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = localFont({
  src: "./fonts/revive-80-wide.ttf",
  variable: "--font-heading",
  weight: "400 800",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Marine Environment Robotics @ UCF",
    template: "%s | MER @ UCF",
  },
  description:
    "Official website for the Marine Environment Club at the University of Central Florida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className={`${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}>
        <NavBar />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
