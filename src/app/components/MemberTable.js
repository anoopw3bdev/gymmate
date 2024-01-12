import React from 'react'
import { getMembershipColor } from '../utils'

const sampleData = [
    {
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Platinum"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Platinum"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Gold"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Platinum"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Gold"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Gold"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Platinum"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Platinum"
    },{
        name: "Virat Kohli",
        age: "32",
        gender: "Male",
        feePaid: true,
        joinedOn: "14/01/2010",
        location: "Kannur",
        membershipType: "Platinum"
    }
]

const MemberTable = () => {
  return (
    <div className="flex flex-col shadow-md p-10 rounded-md">
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        {/* <th></th> */}
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Gender</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Membership type</th>
                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Joined on</th>
                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Location</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {
                        sampleData.map((data, index) => {
                            return(
                                <tr className="hover:bg-gray-100 text-sm" key={index}>
                                    {/* <td className='px-3 py-4'>{getAvatar(data.name)}</td> */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{data.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{data.age}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{data.gender}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <span className={`${getMembershipColor(data.membershipType)} py-1 px-2 rounded-md text-white`}>
                                        {data.membershipType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">{data.joinedOn}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end font-medium">{data.location}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MemberTable