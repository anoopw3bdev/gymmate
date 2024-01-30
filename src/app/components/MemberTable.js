"use client"

import { useState } from 'react'
import { getMembershipColor } from '../utils'
import Drawer from './Drawer'
import { sampleMembers } from '../constants'
import { MemberDetails } from './MemberDetails'

const MemberTable = () => {
  const [showMemberDetails, setShowMemeberDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const handleRowClick = (data) => {
    setSelectedRow(data);
    setShowMemeberDetails(true);
  }

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
                        sampleMembers.map((data, index) => {
                            return(
                                <tr 
                                    className="hover:bg-gray-100 text-sm" 
                                    key={index}
                                    onClick={() => handleRowClick(data)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{data.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{data.age}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{data.gender}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <span className={`border-2 w-24 flex justify-center ${getMembershipColor(data.membershipType)} py-1 px-2 rounded-md`}>
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
        {
            showMemberDetails &&
            <Drawer
                title="Member details"
                onClose={
                   () => setShowMemeberDetails(false)
                }
                children={
                    <MemberDetails
                        details={selectedRow}
                    />
                }
            />
        }
    </div>
  )
}

export default MemberTable