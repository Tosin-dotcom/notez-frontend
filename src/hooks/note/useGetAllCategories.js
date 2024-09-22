import { useEffect, useState } from "react"
import { useGlobalContext } from "../../Context"
import NoteService from "../../services/NoteService"



const useGetAllCategories = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    const { setErrorMessage } = useGlobalContext()

    const getAllCategories = async () => {
        try {
            const response = await NoteService.getAllCategories()
            const { body } = response
            setCategories(body)
        } catch (err) {
            setErrorMessage(err.body)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllCategories()
    },[])

    


    return { categories, loading }
}

export default useGetAllCategories
