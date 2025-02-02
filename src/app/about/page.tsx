"use client"
import { useRouter } from "next/navigation"
export default function About () {
    const router = useRouter();
    return (
    <div>
        <h1>About Us</h1>
        <button onClick={()=> router.push("/")} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
            Go Home
        </button>
    </div>
    

    );
}