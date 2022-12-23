import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="px-4 md:px-10">
        <div className="py-5 relative">
            <div className="flex flex-col items-center relative">
                <p className=" pb-2 font-extrabold flex items-center space-x-1">
                    <span>Follow</span>
                    <ArrowDownCircleIcon className='h-5 w-5 animate-bounce'/>
                </p>
                <ul className='flex pb-5'>
                    <li>
                        <SocialIcon url="https://instagram.com/" fgColor="#52ab98" bgColor='transparent' className='h-10 w-10' />
                    </li>
                    <li>
                        <SocialIcon url="https://tumblr.com/" fgColor="#52ab98" bgColor='transparent' className='h-10 w-10' />
                    </li>
                    <li>
                        <SocialIcon url="https://twitter.com/" fgColor="#52ab98" bgColor='transparent' className='h-10 w-10'/>
                    </li>
                    <li>
                        <SocialIcon url="https://facebook.com/" fgColor="#52ab98" bgColor='transparent' className='h-10 w-10'/>
                    </li>
                </ul>
                <Link href="/">
                <span className='text-4xl absolute bottom-7 right-2 text-[#52ab98] font-bold'>;?</span>
                </Link>
            </div>
            <span className='absolute left-0 right-0 bottom-1 mx-auto w-[212px] opacity-50 font-semibold'>© 2022 Missing semicolon .</span>
        </div>
    </footer>
  )
}

export default Footer