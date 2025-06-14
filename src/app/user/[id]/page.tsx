"use client";
import { useUserDetails } from "@/services/users";
import { useParams } from 'next/navigation'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, Car, Mail, Calendar, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

export default function UserPage() {
  const { id } = useParams();
  const { user, isLoading, error } = useUserDetails(Number(id));

  if (user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black p-4 width-[65%]">
        <section className="flex flex-col gap-4 w-[25%] justify-start">
          <Button className="w-[12%]" onClick={() => window.history.back()} variant="outline">
            <ArrowLeftFromLine size={64} />
          </Button>
          <Card key={user.id} className="w-full]">
            <CardHeader>
              <CardTitle className="font-bold text-lg">{user.name}</CardTitle>
              <CardAction className="flex flex-row gap-2">
                <Badge>{user.role}</Badge>
                {user.active ? (
                  <Badge variant="secondary">Active</Badge>
                ):(
                  <Badge variant="destructive">Inactive</Badge>
                )}
              </CardAction>
              <CardDescription>
                <div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car size={16} />
                    <span>{user.city}, {user.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{user.age}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info size={16} />
                    <span>ID: {user.id} - Created at: {dayjs(user.createdAt).format("DD/MM/YYYY HH:mm")}</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>
        </section>
      </main>
    );
  }

}