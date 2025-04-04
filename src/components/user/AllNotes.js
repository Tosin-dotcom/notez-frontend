import SideNav from "../layout/SideNav";
import "../../assests/styles/user/allNotes.css";
import Note from "./Note";
import useGetAllNotes from "../../hooks/note/useGetAllNotes";
import { useEffect, useState } from "react";
import Pagination from "../layout/Pagination";
import useDeleteNote from "../../hooks/note/useDeleteNote";
import NavBar from "../layout/NavBar";


const AllNotes = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const size = 3;

  const { getAllNotes, data, loading, totalSize } = useGetAllNotes();
  const { deleteNote } = useDeleteNote();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    const success = await deleteNote(id);
    if (success) {
      closeModal();
      window.location.reload();
    }
  };


  useEffect(() => {
    getAllNotes(page, size, search);
  }, [page, search]);

  if (loading) {
    return (
      <section className="allNotes">
        <NavBar />
        <SideNav />
        <div className="allNotesMain">
          <div className="loading">Loading notes...</div>
        </div>
      </section>
    );
  }

  if (data.length === 0) {
    return (
      <section className="allNotes">
        <NavBar />
        <SideNav />
        <div className="allNotesMain">

        <h1>All Notes</h1>
          <input
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Enter Search item"
          />

          <div className="loading">No notes yet</div>
        </div>
      </section>
    );
  }

  return (
    <section className="allNotes">
      <NavBar />
      <SideNav />
      <div className="allNotesMain">
        <h1>All Notes</h1>

        <input
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Enter Search item"
          />

        <div className="notes">
          {data.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title.slice(0, 25)}
              note={note.textContent.slice(0, 20)}
              handleDelete={handleDelete}
              modal={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          ))}
        </div>

        {totalSize > size ? (
          <Pagination
            totalItems={totalSize}
            itemsPerPage={size}
            setPageChange={setPage}
          />
        ) : null}
      </div>
    </section>
  );
};

export default AllNotes;
