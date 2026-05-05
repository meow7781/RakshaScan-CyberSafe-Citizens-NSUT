import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberKavach — AI-Powered Citizen Cybersecurity",
  description: "Protecting Indian citizens from phishing, scams, and cyber threats with real-time AI intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid-bg">
        {children}
      </body>
    </html>
  );
}
