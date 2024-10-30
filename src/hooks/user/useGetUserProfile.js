import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context";
import UserService from '../../services/UserService'


const useGetUserProfile = () => {

    const [data, setData] = useState(null)
    const { setErrorMessage } = useGlobalContext()
    const getUserProfile = async () => {
        try {
            const response = await UserService.userProfile()
            const { body } = response
            setData(body)
        } catch (err) {
            setErrorMessage(err.body)
        } 
    }

    useEffect(() => {
        getUserProfile()
    }, [])

    return { data }
}

export default useGetUserProfile
