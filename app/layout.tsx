import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme.provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "KaDa Cleaning",
  description: "(c) 2024 - SkaSoft",
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn("bg-slate-200 text-gray-950 relative", font.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-[#94c0fe] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
