// app/components/PostHogClientProvider.tsx
"use client";

import { useEffect } from "react";
import { initPostHog } from "@/app/lib/posthog";

export default function PostHogClientProvider() {
  useEffect(() => {
    initPostHog();
  }, []);

  return null;
}
