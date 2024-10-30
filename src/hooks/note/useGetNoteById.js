import { useState } from "react";
import { useGlobalContext } from "../../Context";
import NoteService from "../../services/NoteService";

const useGetNoteById = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setErrorMessage } = useGlobalContext();

  const getNoteById = async (id) => {
    try {
      const response = await NoteService.getById(id);
      const { body } = response;
      setData(body);
    } catch (err) {
      setErrorMessage(err.body);
    } finally {
      setLoading(false);
    }
  };

  return { getNoteById, data, loading };
};

export default useGetNoteById;
