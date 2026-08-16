import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://robustdata.systems"),
  title: "Robust Data Systems",
  description: "Storage engine and data store consulting focused on performance, tunability, self-tuning systems, and indexing.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Robust Data Systems",
    description: "Data systems. Dependable.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Robust Data Systems — Data systems. Made dependable." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robust Data Systems",
    description: "Data systems. Dependable.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
