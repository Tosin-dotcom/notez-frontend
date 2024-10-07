import SideNav from "../layout/SideNav"
import "../../assests/styles/user/createNote.css"
import NoteForm from "./NoteForm"
import NavBar from "../layout/NavBar"


const CreateNote = () => {

    return (

        <section className="create-note">
            <NavBar />
            <SideNav />
            <div className="create-note-main-content">
                <h1>Create Note</h1>

                <NoteForm />
            </div>

        </section>
    )

}

export default CreateNote