import { useContext, useState, createContext, useEffect } from 'react';


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState(null)

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
      );
    
    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);



    return (
        <AppContext.Provider value={{ errorMessage, setErrorMessage, isAuthenticated, setIsAuthenticated }}>
          {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }
