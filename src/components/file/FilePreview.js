import "../../assests/styles/files.css";
import {
  FaFilePdf,
  FaFileAudio,
  FaFileAlt,
} from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";




import { CiImageOn } from "react-icons/ci";

const FilePreview = ({ file, onDelete }) => {
  const { id, title, type, url } = file;


  const renderPreview = () => {
    if (type === "IMAGE") {
      return <img src={url} alt={title} className="file-preview-image" />;
    }
    if (type === "VIDEO") {
      return <video controls src={url} className="file-preview-video" />;
    }

    if (type === "AUDIO") {
      return <audio controls src={url} className="file-preview-audio" />;
    }
    if (type === "PDF") {
      return (
        <embed src={url} className="file-preview-pdf" type="application/pdf" />
      );
    }
  };

  const getFileIcon = () => {
    switch (true) {
      case type === "IMAGE":
        return <CiImageOn size={24}/>
      case type === "PDF":
        return <FaFilePdf size={24}/>;
      case type === "AUDIO":
        return <FaFileAudio size={24}/>;
      case type === "VIDEO":
        return <CiVideoOn size={24}/>;
      default:
        return <FaFileAlt size={40}/>;
    }
  };



  return (
    <section className="file-preview-card">
      <div className="file-preview-body"> {renderPreview()}</div>
      <div className="file-preview-footer">
        <div className="file-preview-header">
                {getFileIcon()} {title}
        </div>
        <button className="file-delete-btn" onClick={() => onDelete(id, title)}>🗑️</button>
      </div>
    </section>
  );
};

export default FilePreview;
