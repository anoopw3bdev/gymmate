import Link from "next/link"
import Icons from "../../../public/assets/icons";

const Nav = () => {
  return (
    <header className="z-50 w-full text-sm shadow-sm flex items-center justify-between">
      <Link
        className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-gray-700 md:border-s md:border-gray-300 md:my-6 md:ps-6 ml-auto pr-10" 
        href="#"
      >
        <Icons name="userIcon"/>
        Log out
      </Link>
    </header>
  )
}

export default Nav