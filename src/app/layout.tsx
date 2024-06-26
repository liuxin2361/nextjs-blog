import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NICK_NAME, WEB_SITE_NAME } from "@/constants/info";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s - ${WEB_SITE_NAME}`,
    default: `${WEB_SITE_NAME}`,
  },
  description: `The blog of ${NICK_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
