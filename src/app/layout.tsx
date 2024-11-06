"use client";
import dynamic from "next/dynamic"; // Import dynamic for client-only rendering
import { LeftSidebar } from "@/components/Leftside-bar";
import { MainLayout } from "@/components/main-layout";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import type { NextTopLoaderProps } from "nextjs-toploader"; // Ensure types are imported if needed

import { GoogleOAuthProvider } from "@react-oauth/google";

// Dynamically import NextTopLoader without server-side rendering
const DynamicTopLoader = dynamic(
  () =>
    import("nextjs-toploader").then((mod) => mod.default) as Promise<
      React.ComponentType<NextTopLoaderProps>
    >,
  { ssr: false }
);
// Do not export metadata from this file
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const pathname = usePathname();
  useEffect(() => {
    const user = localStorage.getItem("user");
    // Check if user exists in localStorage
    if (user !== null && pathname == '/') {
      router.replace('/chat');
    } else {
      if (user == null && pathname == '/chat') {
        router.replace('/')
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
      </head>
      <body className="scroll-smooth">
        <DynamicTopLoader color="#d97706" showSpinner={false} speed={300} />
        <MainLayout>
          <GoogleOAuthProvider
            clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
          >
            {children}
          </GoogleOAuthProvider>
        </MainLayout>
      </body>
    </html>
  );
}