import SideNav from "../layout/SideNav"
import "../../assests/styles/user/dashboard.css"


const Dashboard = () => {
    
    return (
        <section className="user-dashboard">

            < SideNav />

            <div className="user-main-content">
                <h1>Dashboard</h1>
            </div>

        </section>
    )
}

export default Dashboard
