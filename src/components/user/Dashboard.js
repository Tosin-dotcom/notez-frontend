import SideNav from "../layout/SideNav";
import "../../assests/styles/user/dashboard.css";
import Note from "./Note";
import AppRoutes from "../../routes/RouterConfig";
import useGetNoteSummary from "../../hooks/note/useGetNoteSummary";
import { useEffect } from "react";
import moment from "moment";
import NavBar from "../layout/NavBar";



const Dashboard = () => {
  const { getNoteSummary, data, loading } = useGetNoteSummary();

  useEffect(() => {
    getNoteSummary();
  }, []);

  if (loading) {
    return (
      <section className="user-dashboard">
        <NavBar />
        <SideNav />

        <div className="user-main-content">
          <h1>Dashboard</h1>

          <p>loading.......</p>
        </div>
      </section>
    );
  }

  const { recentNotes, totalNotes, lastCreatedDate } = data;

  const formattedTimeAgo = moment(lastCreatedDate).fromNow();

  return (
    <section className="user-dashboard">
      <NavBar />
      <SideNav />

      <div className="user-main-content">
        <h1>Dashboard</h1>

        <div className="user-dashboard-main">
          <div>
            <h2>Recent Notes</h2>
            {recentNotes.length > 0 ? (
              recentNotes.map((note) => (
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title.slice(0, 25)}
                  note={note.textContent.slice(0, 20)}
                  // handleDelete={handleDelete}
                  // modal={isModalOpen}
                  // openModal={openModal}
                  // closeModal={closeModal}
                />
              ))
            ) : (
              <p className="empty-note">No notes yet. Create a note to begin</p>
            )}
          </div>

          <div>
            <h2>Quick Actions</h2>

            <div className="dashboard-quick-action-button">
              <a href={AppRoutes.createNote}>
                <button>Create New Note</button>
              </a>
              <a href={AppRoutes.allNotes}>
                <button>View All Notes</button>
              </a>
            </div>

            <h2>Statistics</h2>
            <div className="dashboard-statistic">
              <p>Total Notes: {totalNotes}</p>
              {lastCreatedDate != null ? <p>Last Note Created: {formattedTimeAgo}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
