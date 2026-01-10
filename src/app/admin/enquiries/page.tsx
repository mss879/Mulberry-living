"use client";

import { Suspense } from "react";
import AdminEnquiries from "@/views/admin/Enquiries";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminEnquiries />
    </Suspense>
  );
}
