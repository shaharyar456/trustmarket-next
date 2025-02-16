import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title:
    "TrustMarket - Discover Local Services and Small Businesses in Toronto",
  description:
    "Explore TrustMarket for local services, small businesses, and unique opportunities in Toronto, Ontario.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TrustMarket",
    description:
      "Explore TrustMarket for unique services and businesses in your area.",
    url: "https://trustmarket.ca",
    images: "/images/trustmarket-home.jpg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
