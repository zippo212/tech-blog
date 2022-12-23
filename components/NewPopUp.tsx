"use client"
import Image from "next/image"
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use';
import { XMarkIcon,InformationCircleIcon } from "@heroicons/react/24/solid";
import {useIsomorphicLayoutEffect} from 'react-use';

const NewPopUp = () => {
    const [show,setShow] = useState(false)
    const [screen,setScreen] = useState({width:0,height:0});
    const { width, height } = useWindowSize()
    useEffect(() => {
        if (!localStorage.getItem('visited')) {
          // This is the user's first time visiting the website
          localStorage.setItem('visited', 'true')
          setShow(true)
        }
        setScreen({width,height});
      }, [])

      const box = useRef(null)
      useIsomorphicLayoutEffect(() => {
      const array = [
        "To",
        "The",
        "Missing",
        "semicolon",
        "Welcome",
        "!"
      ];
    
      let duration = 1;
      gsap.delayedCall(1, () => {
        let textTimeline = gsap.timeline({ repeat: -1 });
        array.forEach((obj, i) => {
          textTimeline.set(box.current, {
            innerHTML: array[i]
          }, i * duration);
        });
      });
    },[])


  if(show) {
  return (
    <div className="fixed h-screen w-full z-20 flex justify-center items-center">
        <Confetti
        width={screen.width}
        height={screen.height}
        gravity={0.6}
        recycle={false}
        />
        <section className="h-4/6 w-11/12 md:w-10/12 lg:w-8/12 drop-shadow-2xl flex flex-col md:flex-row justify-center items-center">
            <div className="bg-[#FAF9F6] w-full h-full flex justify-center items-center px-4 relative dark:bg-[#1d5b6d]">
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold" ref={box}>Welcome</h1>
                <Image
                    src="/logo.png"
                    height={56}
                    width={56}
                    alt="logo"
                    className="absolute bottom-1 animate-pulse"
                />
                <div className="absolute bg-[#52ab98] max-w-[50%] md:max-w-xs left-0 top-0 text-white p-2 md:p-4 text-xs sm:text-sm md:text-base drop-shadow-md">
                    <p>
                        Please be aware that the blog posts in question were written by an artificial intelligence language model and should not be taken as fact. They are for informational and entertainment purposes only.
                    </p>
                    <span className="absolute inline-flex rounded-full h-2 md:h-3 w-2 md:w-3 bg-gray-900 -bottom-1 md:-bottom-1.5 -right-1 md:-right-1.5 dark:bg-white"></span>
                    <span className="animate-ping absolute inline-flex h-2 md:h-3 w-2 md:w-3 rounded-full bg-gray-800 opacity-75 -bottom-1 md:-bottom-1.5 -right-1 md:-right-1.5 dark:bg-white"></span>
                </div>
                <XMarkIcon className="h-16 w-16 absolute right-0 top-0 cursor-pointer text-gray-900 dark:text-white" onClick={()=>setShow(false)}/>
            </div>
        </section>
    </div>
  )
  }
  return (
    null
  )
}

export default NewPopUp