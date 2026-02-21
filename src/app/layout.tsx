import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileWarning from "@/components/MobileWarning";
import MVPNotice from "@/components/MVPNotice";

export const metadata: Metadata = {
  title: "SF Capital — Student Investment Society",
  description: "SF Capital is a student-run investment society managing a live demo fund with real-time portfolio tracking and performance analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="24b74a2c-ead3-4a5b-8e92-129d2a8c5c97" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <MVPNotice />
        <MobileWarning />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
