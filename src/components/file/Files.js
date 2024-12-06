import NavBar from "../layout/NavBar";
import SideNav from "../layout/SideNav";
import "../../assests/styles/files.css";
import FileUpload from "../layout/FileUpload";
import { useState, useEffect } from "react";
import useGetAllFiles from "../../hooks/file/useGetAllFiles";
import FilePreview from "./FilePreview";
import Pagination from "../layout/Pagination";
import useDeleteFile from "../../hooks/file/useDeleteFile";
import { useGlobalContext } from "../../Context";


const Files = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1)

  const { deleteFileById } = useDeleteFile()
  const { showSuccessMessage } = useGlobalContext()


  const size = 3;

  const { getAllFiles, data, loading, totalSize } = useGetAllFiles()

  const handleDeleteFile = async (id, title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the file "${title}"?`
    );
    if (confirmDelete) {
      await deleteFileById(id)
    showSuccessMessage("File Deleted")
    getAllFiles(1, size)
    }
    
  }
  
  useEffect(() => {
    getAllFiles(page, size)
  }, [page, isModalOpen])




  return (
    <section className="files">
      <NavBar />
      <SideNav />

      <div className="allFileMain">
        <div className="file-section">
          <h2>My Files</h2>
          <button className="upload-btn" onClick={() => setIsModalOpen(true)}>
            <span>+</span> Upload File
          </button>
        </div>

        <div className="files-list">
          {
            data.map((file, index) => (
              <FilePreview file={file} onDelete={handleDeleteFile} key={file.id}/>
            ))

          }
        </div>

        <div>
          {isModalOpen ? (
            <FileUpload onClose={() => setIsModalOpen(false)} />
          ) : undefined}
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

export default Files;
