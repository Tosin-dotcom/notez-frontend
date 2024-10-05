import { useState } from "react"
import { useGlobalContext } from "../../Context"
import NoteService from "../../services/NoteService";


const useGetNoteSummary = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

    const { setErrorMessage } = useGlobalContext();

    const getNoteSummary = async () => {
        try {
            const response = await NoteService.summary()
            const { body } = response;
            setData(body)
        } catch (err) {
            setErrorMessage(err.body)
        } finally {
            setLoading(false)
        }
    }


    

    return {getNoteSummary, data, loading}
}

export default useGetNoteSummary