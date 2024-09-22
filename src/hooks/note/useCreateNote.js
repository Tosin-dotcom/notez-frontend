import { useState } from "react"
import { useGlobalContext } from "../../Context";
import NoteService from "../../services/NoteService";


const useCreateNote = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const { setErrorMessage, setSuccessMessage } = useGlobalContext()

    const createNote = async(note) => {

        try {
            const response = await NoteService.createNote(note)
            const { body } = response
            setData(body)
            setSuccessMessage("Note created successfully")
            return body
        } catch (err) {
            setErrorMessage(err.body)
            return false
        } finally {
            setLoading(loading)
        }
    }
    return {createNote, data, loading}
}

export default useCreateNote
