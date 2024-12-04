import api from "../utils/api";
import { withAuthHeaders } from "../utils/authUtils";

const FileService = {
  upload: async (fileObject) => {
    const { file, title, type } = fileObject;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post(
        `/file?title=${encodeURIComponent(title)}&type=${encodeURIComponent(
          type
        )}`,
        formData,
        withAuthHeaders({
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      );
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network error");
    }
  },

  getAllFiles: async (page, size) => {
    try {
      const response = await api.get("/file", {
        ...withAuthHeaders(),
        params: { page, size },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network error");
    }
  },
};

export default FileService;
