import { useState } from "react";
import "../../assests/styles/note/noteForm.css";
import useGetAllCategories from "../../hooks/note/useGetAllCategories";
import useCreateNote from "../../hooks/note/useCreateNote";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGlobalContext } from "../../Context";
import { quillModules } from "../commons/QuillModules";
import useEditNote from "../../hooks/note/useEditNote";

const NoteForm = ({ edit, editData }) => {
  const [note, setNote] = useState(edit && editData ? editData.textContent : "");
  const [title, setTitle] = useState(edit && editData ? editData.title : "");
  const [selectedCategory, setSelectedCategory] = useState(
    edit && editData ? editData.category?.id : ""
  );

  const { setErrorMessage } = useGlobalContext();


  const { categories } = useGetAllCategories();
  const { createNote } = useCreateNote();
  const { editNote } = useEditNote();

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmitNote = async (e) => {
    setErrorMessage(null);
    e.preventDefault();

    const payload = {
      textContent: note,
      title,
      category: {
        id: selectedCategory,
      },
    };
    if (edit) {
      payload.id = editData.id
      const success = await editNote(payload);
      if (success) {
        navigate(`/user/note/${editData.id}`);
      }
    } else {
      const response = await createNote(payload);
      if (response) {
        navigate(`/user/note/${response.id}`);
      }
    }
  };

  return (
    <section className="note-form">
      <form onSubmit={handleSubmitNote}>
        <div className="form-group">
          <label htmlFor="note-title">Title</label>
          <input
            type="text"
            id="note-title"
            placeholder="Enter note title"
            className="note-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="note-category">Category</label>
          <select
            id="note-category"
            className="note-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="note-content">Content</label>
          <ReactQuill
            theme="snow"
            value={note}
            modules={quillModules}
            onChange={setNote}
            placeholder="Enter note content"
            className="note-editor"
          />
          {/* <textarea
            id="note-content"
            placeholder="Enter note content"
            className="note-textarea"
            rows="10"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea> */}
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">
            {edit ? "Edit" : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default NoteForm;
