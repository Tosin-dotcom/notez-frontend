import { useState } from "react";
import { useGlobalContext } from "../../Context";
import NoteService from "../../services/NoteService";

const useEditNote = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setErrorMessage, showSuccessMessage } = useGlobalContext();

  const editNote = async (note) => {
    try {
      const response = await NoteService.editNote(note);
      const { body } = response;
      setData(body);
      showSuccessMessage("Note edited successfully")
      return true;
    } catch (err) {
      setErrorMessage(err.body);
      return false;
    } finally {
      setLoading(loading);
    }
  };

  return { editNote, data, loading };
};

export default useEditNote;
