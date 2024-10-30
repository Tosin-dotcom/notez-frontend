import { useState } from "react";
import { useGlobalContext } from "../../Context";
import NoteService from "../../services/NoteService";

const useDeleteNote = () => {

    const [loading, setLoading] = useState(true);
    const { setErrorMessage, showSuccessMessage } = useGlobalContext()


    const deleteNote = async(id) => {
        
        try {
            await NoteService.deleteNote(id)
            showSuccessMessage("Note Deleted Successfully")
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