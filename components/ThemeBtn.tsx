"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeBtn = () => {
const [mounted, setMounted] = useState(false)
const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
    <button
        className="relative h-8 w-16 bg-gray-900 text-[#52ab98] rounded-full cursor-pointer dark:bg-white overflow-hidden"
        >
        <span className="absolute bottom-0 top-0 left-0 right-0 m-auto h-5 w-5 block text-[#52ab98] font-bold">;?</span>
    </button>
    )
  }

  return (
    <button
        className="relative h-8 w-16 bg-gray-900 text-[#52ab98] rounded-full cursor-pointer dark:bg-white overflow-hidden"
        onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
        >
        <MoonIcon className={`absolute bottom-0 top-0 left-0 right-0 ${theme === 'light' ? 'translate-x-0' : 'translate-x-[50px]'} m-auto h-5 w-5 transition-transform duration-300 ease-in-out`}/>
        <SunIcon className={`absolute bottom-0 top-0 left-0 right-0 ${theme === 'dark' ? 'translate-x-0' : '-translate-x-[50px]'} m-auto h-5 w-5 transition-transform duration-300 ease-in-out`}/>
    </button>
  )
}

export default ThemeBtn