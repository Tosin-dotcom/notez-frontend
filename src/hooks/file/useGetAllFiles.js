import { useState } from "react";
import { useGlobalContext } from "../../Context";
import FileService from "../../services/FileService";

const useGetAllFiles = () => {
  const [data, setData] = useState([]);
  const [totalSize, setTotalSize] = useState(0);
  const [loading, setLoading] = useState(true);

  const { setErrorMessage } = useGlobalContext();

  const getAllFiles = async (page, size) => {
    try {
      const response = await FileService.getAllFiles(page, size);
      const { body } = response;
      setData(body.records);
      setTotalSize(body.total);
    } catch (err) {
      setErrorMessage(err.body);
    } finally {
      setLoading(false);
    }
  };

  return { getAllFiles, data, loading, totalSize };
};

export default useGetAllFiles;
