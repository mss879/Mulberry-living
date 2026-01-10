"use client";

import { Suspense } from "react";
import Booking from "@/views/Booking";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Booking />
    </Suspense>
  );
}
