import MemberTable from "@/app/components/MemberTable"
import UserIcon from "../../../../public/assets/icons/userIcon"

const Page = () => {
  return (
    <div className="ml-64 p-10">
      <div className="flex justify-between items-center font-semibold text-lg mb-3 pb-2 border-b-2">
        <span>Active members</span>
        <button 
          type="button" 
          className="py-3 px-4 inline-flex items-center text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 gap-x-0">
          <UserIcon/>
          + new membership
        </button>
      </div>
      <MemberTable/>
    </div>
  )
}

export default Page