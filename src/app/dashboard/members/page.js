import AddNewButton from "@/app/components/AddNewButton"
import MemberTable from "@/app/components/MemberTable"

const Page = () => {
  return (
    <div className="ml-64 p-10">
      <div className="flex justify-between items-center font-semibold text-lg mb-3 pb-2 border-b-2">
        <span>Active members</span>
        <AddNewButton/>
      </div>
      <MemberTable/>
    </div>
  )
}

export default Page