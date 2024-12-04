import { useState } from "react";
import "../../assests/styles/fileupload.css";
import useCreateFile from "../../hooks/file/useCreateFile";

const FileUpload = ({ onClose }) => {
  const [title, setTitle] = useState(undefined);
  const [fileType, setFileType] = useState(null);
  const [file, setFile] = useState(null);

  const { uploadFile, loading } = useCreateFile();

  const fileTypes = {
    "application/pdf": "PDF",
    "image/jpeg": "IMAGE",
    "image/png": "IMAGE",
    "image/jpg": "IMAGE",
    "video/mp4": "VIDEO",
    "audio/mpeg": "AUDIO",
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const type = fileTypes[selectedFile.type];
      setFileType(type);
    }
  };

  const handleUploadFile = async () => {
    const payload = {
      file: file,
      title: title,
      type: fileType,
    };
    const success = await uploadFile(payload);
    if (success) {
      onClose();
    }
  };

  return (
    <section className="file-modal-overlay">
      <div className="file-modal-content">
        <button className="file-close-btn" onClick={onClose}>
          <span style={{ fontSize: "32px" }}>&times;</span>
        </button>

        <h2 className="file-upload-text">Upload File</h2>

        <div className="file-input-group">
          <label htmlFor="file-title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter file title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="file-drop-zone">
          <div className="upload-icon">⬆️</div>

          <p>Drag and drop your files here</p>
          <p>or</p>
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <button
            className="file-browse-btn"
            onClick={() => document.getElementById("file-input").click()}
          >
            Browse Files
          </button>

          <p className="file-types">
            Supported files: Images, Videos, Audio, PDF
          </p>
        </div>

        {file ? (
          <div className="file-preview">
            <p>
              <strong>Selected File Name:</strong> {file?.name}
            </p>
            <p>
              <strong>File Type: </strong> {file?.type}
            </p>
          </div>
        ) : undefined}

        <div className="file-action-buttons">
          <button className="file-cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="file-upload-btn" onClick={handleUploadFile}>
            {loading ? <div className="spinner"></div> : "Upload"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FileUpload;
