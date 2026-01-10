"use client";

import { Suspense } from "react";
import AdminBookings from "@/views/admin/Bookings";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminBookings />
    </Suspense>
  );
}
