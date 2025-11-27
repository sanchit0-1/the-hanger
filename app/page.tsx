"use client"
import { redirect, useRouter } from "next/navigation";


export default function Page(){
  redirect('/login')

  const mongodb = process.env.MONGODB_URI;
  console.log(mongodb)
  return(<>
    <h2>
      hello sanchit!
    </h2>
  </>)
}