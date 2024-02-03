import { getFirstLetter } from "../utils"

export const MembershipCard = ({
    details={}
}) => {
    return (
        <div className="bg-gradient-to-r from-red-100 via-red-200 to-red-300 p-6 flex justify-between items-center rounded-md shadow-lg shadow-red-300">
{/*            
            <div className="font-bold">
                <div className="flex items-center justify-center rounded-full w-12 h-12 border-2 border-white bg-white text-xl mb-3">{getFirstLetter(details.name)}</div>
                <span className="mr-2" >{details.name}</span>
                <span>{details.age}</span>
            </div>
            <div>
                <h4>{details.location}</h4>
                <h6>min</h6>
                <h5>Warm-up</h5>
            </div>
            <div>
                <span className="text-md border p-2 rounded-md bg-white">{details.membershipType}</span>
            </div>
            <div>
            </div>
             */}
        </div>
    )
}
