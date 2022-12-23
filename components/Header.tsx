import Link from "next/link";
import ThemeBtn from "./ThemeBtn";

const Header = () => {

  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-4 md:px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <span className="text-4xl text-[#52ab98] font-bold">;?</span>
            </Link>
            <h1 className="dark:text-white">Missing semicolon</h1>
        </div>

        <div>
            <ThemeBtn />
        </div>
    </header>
  )
}

export default Header