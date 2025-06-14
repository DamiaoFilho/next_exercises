"use client";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useUsers } from "@/services/users";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const { users, isLoading, mutate, error } = useUsers();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4 width-[65%]">
      <section className="flex flex-wrap flex-row gap-4 w-full justify-center">
        {users?.map((user) => (
          <Card key={user.id} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>
                {user.email}
              </CardDescription>
              <CardAction>
                <Button onClick={() => router.push(`/user/${user.id}`)} className="w-full">
                  Details
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
