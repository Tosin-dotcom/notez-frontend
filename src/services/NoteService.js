import api from "../utils/api";
import { withAuthHeaders } from "../utils/authUtils";

const NoteService = {
  getAllCategories: async () => {
    try {
      const response = await api.get("/category", withAuthHeaders());
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network error");
    }
  },

  createNote: async (note) => {
    try {
      const response = await api.post(
        "/note",
        {
          body: note,
        },
        withAuthHeaders()
      );
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network error");
    }
  },

  getAllNotes: async (page, size) => {
    try {
      const response = await api.get("/note", {
        ...withAuthHeaders(),
        params: { page, size },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network error");
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/note/${id}`, {
        ...withAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network error");
    }
  },

  editNote: async (note) => {
    try {
      const response = await api.put(
        "/note",
        {
          body: note,
        },
        withAuthHeaders()
      );
      return response.data;
    } catch (err) {
      throw err.response ? err.response.data : new Error("Network error");
    }
  },

  deleteNote: async (id) => {
    try {
      const response = await api.delete(`/note/${id}`, {
        ...withAuthHeaders(),
      });
      return response;
    } catch (err) {
      throw err.response ? err.response.data : new Error("Network error");
    }
  },
};

export default NoteService;
