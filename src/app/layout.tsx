import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AOSProvider from "@/components/AOSProvider";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "../context/auth-context";
import Providers from "../context/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synli AI",
  description: "AI-Powered Influencer Marketing for Small Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Providers>
          <AOSProvider>
            <main>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <AuthProvider>
                  <>{children}</>
                  <Toaster />
                </AuthProvider>
              </ThemeProvider>
            </main>
          </AOSProvider>
        </Providers>
      </body>
    </html>
  );
}
