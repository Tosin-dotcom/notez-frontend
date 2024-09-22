import { useState } from "react";
import { useGlobalContext } from "../../Context";
import NoteService from "../../services/NoteService";

const useDeleteNote = () => {

    const [loading, setLoading] = useState(true);
    const { setErrorMessage, setSuccessMessage } = useGlobalContext()


    const deleteNote = async(id) => {
        
        try {
            await NoteService.deleteNote(id)
            setSuccessMessage("Note Deleted successfully")
            return true
        } catch (err) {
            setErrorMessage(err.body)
            return false
        } finally {
            setLoading(loading)
        }
    }

    return {deleteNote, loading}

}

export default useDeleteNote