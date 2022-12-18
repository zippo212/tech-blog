import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 xl:px-0 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <Image
                    className="rounded-full"
                    src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </Link>
            <h1>The Blog</h1>
        </div>

        <div>
            <Link
                href="/mail"
                className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
            >
                Sign up to our NewsLetter
            </Link>
        </div>
    </header>
  )
}

export default Header