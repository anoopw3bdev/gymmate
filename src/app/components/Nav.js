import UserIcon from "../assets/icons/userIcon"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
        <Link
          className="flex items-center justify-between gap-x-3 text-xl font-semibold"
          aria-label="Brand"
          href="/dashboard"
        >
          <Image
            src={logo}
            width="30"
            height="40"
            className="object-contain"
            alt="App logo"
          />
          <span 
            className="bg-gradient-to-r from-orange-500 via-black to-red-500 inline-block text-transparent bg-clip-text">
            Gym Mate
          </span>
        </Link>
          <Link
            className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-gray-700 md:border-s md:border-gray-300 md:my-6 md:ps-6" 
            href="#"
          >
            <UserIcon/>
            Log out
          </Link>
      </nav>
    </header>
  )
}

export default Nav