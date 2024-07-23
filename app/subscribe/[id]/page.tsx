
import { AvatarDemo } from '@/components/Avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
    const name = "Sahil";
  return (
    <div className='flex  min-h-screen items-center justify-center'>
      <Card className='w-2/6 flex flex-col justify-evenly items-center h-[500px] text-center '>
        <AvatarDemo/>
        <p className='pl-6 pr-6'>By subscribing to our newsletter service, you agree to receive emails from the individual newsletter creators. The aim of this service is to enable individuals to create and distribute their own newsletters to interested subscribers.</p>
        <Label>Subscribe to {name}</Label>
        <Input className='w-1/2' placeholder='@email.com'/>
        <Button>Subscribe</Button>
        </Card>
    </div>
  )
}

export default page