"use client"

import { gsap } from "gsap";
import { useRef } from "react";
import {useIsomorphicLayoutEffect} from 'react-use';


const Banner = () => {
  const bannerTitle = ['Missing',';?','semicolon']

    useIsomorphicLayoutEffect(() => {
      if(box.current.length > 0) {
      gsap.set(box.current, {
        y: (i) => i * 130
      });

      gsap.to(box.current, {
        duration: 3.5,
        ease: "none",
        y: "+=390",
        modifiers: {
          y: gsap.utils.unitize(y => parseFloat(y) % 390)
        },
        repeat: -1
      });
    }
    }, []);

  const box = useRef<any[]>([])
//initially place each box position in a col

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 font-bold px-4 md:px-10 py-5 mb-10 justify-between dark:text-white">
        <div>
            <h1 className="text-7xl relative overflow-hidden h-[72px]"><span className="hidden md:inline pr-2">The</span> <span className="relative -top-[137px]">{bannerTitle.map((item,i)=> (
              <span key={i} className={`absolute h-[65px] text-[65px] ${i == 1 ? 'text-[#52ab98]' : ''}`} ref={el => box.current[i] = el}>{item}</span>
            ))}</span></h1>
            <h2 className="mt-5 md:mt-2">
                Welcome to{" "}
                <span className="underline decoration-4 decoration-[#52ab98]">Every Developers</span>{" "}
                favourite blog in the Devosphere
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New product features | The latest in technology | The weekly debugging nightmares & more!
        </p>
    </div>
  )
}

export default Banner