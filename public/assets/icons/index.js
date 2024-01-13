import CalendarIcon from "./calendarIcon";
import MembersIcon from "./membersIcon";
import DocumentsIcon from "./documentsIcon";
import UserIcon from "./userIcon";

const Icons = (props) => {
    switch (props.name) {
        case "calendarIcon":
            return <CalendarIcon {...props} />
        case "membersIcon":
            return <MembersIcon {...props} />
        case "documentsIcon":
            return <DocumentsIcon {...props} />
        case "userIcon":
            return <UserIcon {...props}/>
        default:
            break;
    }
}

export default Icons;