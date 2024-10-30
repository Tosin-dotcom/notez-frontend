import { useContext, useState, createContext, useEffect } from 'react';


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)


    const showSuccessMessage = (message) => {
        setSuccessMessage(message)
        setTimeout(() => setSuccessMessage(null), 1000); 
    };

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
      );
    
    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);



    return (
        <AppContext.Provider value={{ errorMessage, setErrorMessage, isAuthenticated, setIsAuthenticated, successMessage, showSuccessMessage }}>
          {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }
