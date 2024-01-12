import Nav from "../components/Nav"
import SideBar from "../components/SideBar"

export default function DashboardLayout({ children }) {
    return(
        <section>
            <Nav/>
            <SideBar/>
            {children}
        </section>
    )
}