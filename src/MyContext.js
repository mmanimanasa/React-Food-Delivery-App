import { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({children}) => {
    const [additems,setadditems] = useState([]);
    return (
        <MyContext.Provider 
        value={{
            additems,
            setadditems
        }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;