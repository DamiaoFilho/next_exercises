"use client";
import { useState } from "react";
import { User } from "@/types/types";
import SimpleForm from "@/components/SimpleForm";
import HookZod from "@/components/HookZod";

const defaultUser: User = {
  name: "Jhon Doe",
  email: "jhon.doe@example.com",
  phone: "(99) 99999-9999",
}

export default function Home() {
  const [user, setUser] = useState<User>(defaultUser);
  const [activeForm, setActiveForm] = useState<'simple' | 'hookzod'>('simple');

  return (
    <main className="flex w-full min-h-screen flex-row items-center justify-center">
      <div className="w-[75%] min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveForm('simple')}
            className={`px-4 py-2 rounded ${
              activeForm === 'simple' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Simple Form
          </button>
          <button
            onClick={() => setActiveForm('hookzod')}
            className={`px-4 py-2 rounded ${
              activeForm === 'hookzod' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            React Hook Form + Zod
          </button>
        </div>
        {activeForm === 'simple' ? (
          <SimpleForm setUser={setUser}/>
        ) : (
          <HookZod setUser={setUser}/>
        )}
      </div>
      <div className="flex flex-col justify-center items-center w-[25%] gap-4 bg-white min-h-screen">
        <h2 className="font-bold text-2xl m-2 text-black">User Info</h2>
        <p className="text-black">Name: {user.name}</p>
        <p className="text-black">Email: {user.email}</p>
        <p className="text-black">Phone: {user.phone}</p>
      </div>
    </main>
  );
}
