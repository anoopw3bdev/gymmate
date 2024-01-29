export const MembershipCard = ({
    name="Anoop",
    time="Morning",
    warmUpDuration="12",
    exercise="Leg"
}) => {
    return (
        // <div className="todoCard bg-red-400 border-r-4">
        //     <div className="todoCard__name">
        //         <h4>{name}</h4>
        //         <div>Sport Club</div>
        //         <h5>{time}</h5>
        //     </div>
        //     <div className="todoCard__warmUp">
        //         <h4>{warmUpDuration}</h4>
        //         <h6>min</h6>
        //         <h5>Warm-up</h5>
        //     </div>
        //     <div className="todoCard__exercise">
        //         <h4>20</h4>
        //         <h6>min</h6>
        //         <h5>{exercise}</h5>
        //     </div>
        //     <div>
        //         {/* <RiMore2Fill /> */}
        //     </div>
        // </div>
        <div className="bg-red-400 p-4 flex justify-between items-center rounded-md shadow-lg shadow-red-300">
            <div className="todoCard__name">
                <h4 className="text-white font-bold">{name}</h4>
                <div className="text-white">Sport Club</div>
                <h5 className="text-white">{time}</h5>
            </div>
            <div className=" text-white">
                <h4>{warmUpDuration}</h4>
                <h6>min</h6>
                <h5>Warm-up</h5>
            </div>
            <div className=" text-white">
                <h4>20</h4>
                <h6>min</h6>
                <h5>{exercise}</h5>
            </div>
            <div className="text-white">
                {/* Add your icon or content here */}
            </div>
        </div>
    )
}
