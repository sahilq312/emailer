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
import {
  Bitcoin,
  Cloud,
  DeleteIcon,
  Github,
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
import React from "react";

type ServicesProp = {
  id: number;
  service_name: string;
};

const app = [
  {
    id: 1,
    service_name: "dizo",
  },
  {
    id: 2,
    service_name: "dizo",
  },
  {
    id: 3,
    service_name: "dizo",
  },
  {
    id: 4,
    service_name: "dizo",
  },
  {
    id: 5,
    service_name: "dizo",
  },
];

const page = () => {
  return (
    <div className="p-2">
      <header className="w-full flex justify-between p-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl">
          Services
        </h1>
        <Button>Create</Button>
      </header>
      <main className="flex flex-col  gap-4 justify-center items-center">
        {app.length == 0 ? (
          <NoAppPage />
        ) : (
          app.map((item: ServicesProp) => (
            <Card
              className=" sm:w-2/5 w-full border p-3 flex justify-between items-center"
              key={item.id}
            >
              <h2 className="text-lg">{item.service_name}</h2>
              <div className="flex gap-2 items-center">
                {/* <Button className="flex gap-3"><PlusCircleIcon/>Compose</Button> */}
                {/* DropdownMenu  */}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-primary" variant="outline">Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Compose</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <span>Support</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          ))
        )}
      </main>
    </div>
  );
};

export default page;

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
