"use client"
import EmailList from "@/components/component/emailHistory";
import SubscriberList from "@/components/component/subscriberList";
import { CreateIcon } from "@/components/icons/create";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAtom, useAtomValue } from "jotai";
import {
  Bitcoin,
  Cloud,
  DeleteIcon,
  LifeBuoy,
  LogOut,
  LucideTrash,
  Mail,
  PlusCircleIcon,
  Trash,
  TrashIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { YourData } from "@/lib/states/store";
import UserContext from "@/lib/states/userContext";


type ServicesProp = {
  id: number;
  service_name: string;
};

const Page = () => {
  const user = useContext(UserContext)
  console.log(user.user);
  
  if(!user){
    return <div>Loading...</div>
  }
  return ( 
    <div className="p-2">
      <header className="w-full flex items-center justify-between p-6">
        <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl">
          Hello, {user.user?.first}
        </h1></div>
        <Button className="flex gap-2 font-semibold text-base">
          <PlusCircleIcon />
          Compose new mail
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 items-center justify-center ">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <SubscriberList />
          <EmailList />
        </div>
      </main>
    </div>
  );
};

export default Page;

const NoAppPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10 border-4 border-primary p-3 rounded-lg">
      <p className="text-xl text-muted-foreground text-center">
        A modal dialog that interrupts the user with <br />
        important content and expects a response.
      </p>
      <Button>Create</Button>
    </div>
  );
};
