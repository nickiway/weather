import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather App",
  description: "The application to get the weather information display",
  keywords: ["weather", "today", "temperature"],
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
