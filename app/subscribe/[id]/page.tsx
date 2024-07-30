"use client";
import { AvatarDemo } from "@/components/Avatar";
import { BackgroundBeams } from "@/components/ui/background-beans";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  const name = "Sahil";
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-extrabold">
          Join {name} Newsletter
        </h1>
        <p></p>
        <p className="relative z-10 text-md md:text-xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans">
          On subscribing you will get mail from the {name}{" "}
        </p>
        <div className="flex flex-col items-center justify-center gap-8">
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <Button className=" bg-neutral-900 text-neutral-500">Subscribe</Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
