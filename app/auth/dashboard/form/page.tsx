import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex  items-center justify-center">
      <form className="w-2/3 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Label>Subject</Label>
        <Input type="text" /></div>
        <div className="grid w-full gap-4">
            <Label>Body</Label>
          <Textarea placeholder="Type your message here." />
          <Button>Send message</Button>
        </div>
      </form>
    </div>
  );
};

export default page;
