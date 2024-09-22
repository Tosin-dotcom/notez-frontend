import "../../assests/styles/note/note.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DeleteNoteModal from "./DeleteNoteModal";

const Note = ({ id, title, note, handleDelete, modal, openModal, closeModal }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/user/note/${id}`);
  };

  const handleEditNote = () => {
    
    navigate(`/user/edit-note/${id}`);
  };

  return (
    <div className="note-section" >
      <div className="note-header">
        <h2 className="note-title">{title}...</h2>
        <div className="note-icons">
          <button onClick={handleEditNote}>
            <FaEdit className="note-icon" />
          </button>
          <button onClick={openModal}>
            <MdDelete className="note-icon" />
          </button>
          <DeleteNoteModal
            isOpen={modal}
            onClose={closeModal}
            onDelete={() => handleDelete(id)}
          />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: note }} />
      <button onClick={handleReadMore}>Read More</button>
    </div>
  );
};

export default Note;
