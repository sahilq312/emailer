"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAtom } from "jotai"

type EmailListType = {
  data : Email[];
}


export default function EmailList({data} : EmailListType) {
  if(!data){
    return (
      <Card><h1>no email</h1></Card>
    )
  }
  return (
    <Card>
      <CardHeader className="">
        <CardTitle>Emails</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
       {!data ?? <div className="flex justify-center items-center gap-4"><p>No Mail History</p></div>} 
        {data.map((item,i)=> (
         <div key={i} className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
              {item.body}
            </p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div> 
        ))}
      </CardContent>
    </Card>
  )
}
