import SideNav from "../layout/SideNav";
import "../../assests/styles/note/notepage.css";
import { useParams } from "react-router-dom";
import useGetNoteById from "../../hooks/note/useGetNoteById";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteNoteModal from "./DeleteNoteModal";
import useDeleteNote from "../../hooks/note/useDeleteNote";


const NoteDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getNoteById, data, loading } = useGetNoteById();
  const { deleteNote } = useDeleteNote();

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return formattedDate;
  };

  const handleEdit = () => {
    navigate(`/user/edit-note/${id}`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    const success = await deleteNote(id);
    if (success) {
      closeModal();
    }
  };

  useEffect(() => {
    getNoteById(id);
  }, [id]);

  if (!data) {
    return (
      <section className="note-page">
      <SideNav />
      <div className="note-page-main">
        <h2>Note not found</h2>
      </div>
    </section>

    )
  }

  if (loading) {
    return (
      <section className="note-page">
        <SideNav />
        <div className="note-page-main">
          <h2>Loading....</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="note-page">
      <SideNav />

      <div className="note-page-main">
        <div className="note-actions">
          <button className="note-button edit-button" onClick={handleEdit}>
            Edit Note
          </button>
          <button className="note-button delete-button" onClick={openModal}>
            Delete Note
          </button>
          <DeleteNoteModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onDelete={handleDelete}
          />
        </div>

        <h1>{data.title}</h1>

        <p>
          <i>Created At: {formatDate(data.createdAt)}</i>
        </p>
        <p>
          <i>Updated At: {formatDate(data.updatedAt)}</i>
        </p>
        <div dangerouslySetInnerHTML={{ __html: data.textContent }} />

        <p></p>
      </div>
    </section>
  );
};

export default NoteDetail;
