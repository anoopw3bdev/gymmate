import MembersIcon from "../../../public/assets/icons/membersIcon";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import CalendarIcon from "../../../public/assets/icons/calendarIcon";
import DocumentsIcon from "../../../public/assets/icons/documentsIcon";

const SideBar = () => {
  return (
    <div className="flex-none fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white shadow-md pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0">
        <div className="px-6">
            <Link
                className="flex items-center gap-x-1 text-xl font-semibold"
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
        </div>
        <nav className="p-6 w-full h-full pt-28">
            <ul className="space-y-1.5 flex flex-col align-middle">
            <li>
                <Link 
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/dashboard/members"
                >
                    <MembersIcon/>
                    Members
                </Link>
            </li>

            <li>
                <Link 
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                    href="#"
                >
                <CalendarIcon/>
                Attendance
            </Link></li>
            <li>
                <Link 
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                    href="#"
                >
                <DocumentsIcon/>
                Document center
                </Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default SideBar