import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import { NavbarProps } from "sanity"

const StudioNavBar = (props: NavbarProps) => {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link className="text-[#F7AB0A] flex items-center" href="/">
                <ArrowUturnLeftIcon className="w-6 h-6 text-[#F7AB0A] mr-2"/>
                Go To Website
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavBar