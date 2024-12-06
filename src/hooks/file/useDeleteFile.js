import { useState } from "react"
import FileService from "../../services/FileService"
import { useGlobalContext } from "../../Context"

const useDeleteFile = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const { setErrorMessage } = useGlobalContext()

    const deleteFileById = async (id) => {
        try {
            setLoading(true)
            const response = await FileService.deleteFile(id)
            const { body } = response
            setData(body)
        } catch (err) {
            setErrorMessage(err.body)
        } finally {
            setLoading(false)
        }
    }   

    return { deleteFileById, data, loading }

}

export default useDeleteFile