import { useState } from "react"
import { useGlobalContext } from "../../Context";
import FileService from "../../services/FileService"

const useCreateFile = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const { setErrorMessage, showSuccessMessage } = useGlobalContext()

    const uploadFile = async(file) => {

        try {
            setLoading(true)
            const response = await FileService.upload(file)
            const { body } = response
            setData(body)
            showSuccessMessage("File successfully uploaded")
            return true
        } catch (err) {
            setErrorMessage(err.body)
            return false
        }finally {
            setLoading(false)
        }

    }
    return {uploadFile, data, loading}
}

export default useCreateFile