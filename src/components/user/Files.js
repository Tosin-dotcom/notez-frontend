import NavBar from "../layout/NavBar";
import SideNav from "../layout/SideNav";
import "../../assests/styles/files.css";
import FileUpload from "../layout/FileUpload";
import { useState, useEffect } from "react";
import useGetAllFiles from "../../hooks/file/useGetAllFiles";

const Files = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1)


  const size = 3;

  const { getAllFiles, data, loading, totalSize } = useGetAllFiles()
  
  useEffect(() => {
    getAllFiles(page, size)
  }, [page])

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

        <div className="file-list">
          <p>Files...</p>
        </div>

        <div>
          {isModalOpen ? (
            <FileUpload onClose={() => setIsModalOpen(false)} />
          ) : undefined}
        </div>
      </div>
    </section>
  );
};

export default Files;
