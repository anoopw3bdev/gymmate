import UserIcon from "../../../public/assets/icons/userIcon"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/assets/images/logo.png";

const Nav = () => {
  return (
    <header className="flex justify-between z-50 w-full text-sm shadow-sm">
      {/* <nav className="relative w-full py-2 px-20 md:flex md:items-center md:justify-between" aria-label="Global"> */}
          <Link
            className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-gray-700 md:border-s md:border-gray-300 md:my-6 md:ps-6" 
            href="#"
          >
            <UserIcon/>
            Log out
          </Link>
      {/* </nav> */}
    </header>
  )
}

export default Nav