"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserModal } from "./user-modal";
import { Suspense } from "react";

const users = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function Page() {
  return (
    <>
      <Suspense>
        <UserModal />
      </Suspense>
      <div className="flex h-screen flex-col items-center justify-center p-24 gap-2">
        {users.map((userId) => (
          <Button asChild key={userId}>
            <Link href={`/?userId=${userId}`}>User {userId}</Link>
          </Button>
        ))}
      </div>
    </>
  );
}
