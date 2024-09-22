import { useState } from "react";
import { useGlobalContext } from "../../Context";
import NoteService from "../../services/NoteService";

const useGetAllNotes = () => {
  const [data, setData] = useState([]);
  const [totalSize, setTotalSize] = useState(0)
  const [loading, setLoading] = useState(true);

  const { setErrorMessage } = useGlobalContext();

  const getAllNotes = async (page, size) => {
    try {
      const response = await NoteService.getAllNotes(page, size);
      const { body } = response;
      setData(body.records);
      setTotalSize(body.total)
    } catch (err) {
      setErrorMessage(err.body);
    } finally {
      setLoading(false);
    }
  };

  return { getAllNotes, data, loading, totalSize };
};

export default useGetAllNotes;
