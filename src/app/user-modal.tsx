"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

const getUser = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`,
  };
};

export const UserModal = () => {
  const userId = useSearchParams().get("userId");
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["user-info", userId],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!userId,
    queryFn: () => getUser(userId as string),
  });

  return (
    <Dialog
      open={!!userId}
      onOpenChange={(open) => {
        if (!open) {
          router.replace("/");
        }
      }}
    >
      <DialogContent>
        {!data ? (
          <div className="h-40 w-40 bg-red-400">BIG Loading...</div>
        ) : (
          <p>User ${data.id}</p>
        )}
      </DialogContent>
    </Dialog>
  );
};
