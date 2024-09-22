import "../../assests/styles/note/editnote.css";
import SideNav from "../layout/SideNav";
import NoteForm from "./NoteForm";
import useGetNoteById from "../../hooks/note/useGetNoteById";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditNote = () => {
  const { id } = useParams();
  const { getNoteById, data, loading } = useGetNoteById();

  useEffect(() => {
    getNoteById(id);
  }, [id]);

  if (loading) {
    return (
      <section className="edit-note">
        <SideNav />

        <div className="edit-note-main">
            <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="edit-note">
      <SideNav />

      <div className="edit-note-main">
        <h1>Edit Note</h1>

        <NoteForm edit editData={data} />
      </div>
    </section>
  );
};

export default EditNote;
