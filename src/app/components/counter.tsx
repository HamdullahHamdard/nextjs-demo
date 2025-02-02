"use client"
import {useState} from 'react';

export const Counter = () =>{
    console.log('Counter Component')
    const [count, setCount] = useState(0);
    return <button onClick={()=> setCount(count +1 )} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        Clicked {count} times
    </button>
}