"use client";

import LandingPage from "@/components/landing-page/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();

  return (
      <LandingPage />
  );
}
