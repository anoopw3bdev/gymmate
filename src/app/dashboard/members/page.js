import MemberTable from "@/app/components/MemberTable"

const Page = () => {
  return (
    <div className="ml-64 p-10">
      <div className="font-semibold text-lg mb-3 pb-2 border-b-2">Active members</div>
      <MemberTable/>
    </div>
  )
}

export default Page