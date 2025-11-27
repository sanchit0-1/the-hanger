"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Page(){
  const route = useRouter();
  useEffect(() => {   route.push('/login')
 }, []);
  const mongodb = process.env.MONGODB_URI;
  console.log(mongodb)
  return(<>
    <h2>
      hello sanchit!
    </h2>
  </>)
}