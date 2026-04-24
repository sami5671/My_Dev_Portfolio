import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Sami Alam || Portfolio",
  description: "",
  icons: {
    icon: [
      {
        url: "/profile.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/profile.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/profile.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/profile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
