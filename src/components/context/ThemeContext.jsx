import {createContext,useState} from 'react'
export const themeContext=createContext()
export const ThemeContext = ({children}) =>{
    const [dark,setDarkMode]=useState("white");
    const handleDarkMode=()=>{
        if(dark==="white"){
            document.body.style.backgroundColor="black"
            document.body.style.color="white"
            document.title="Enable dark mode"
            setDarkMode("dark")
        }else{
            document.body.style.backgroundColor="#F5F6FA";
            document.body.style.color="black";
            document.title="Disabled dark mode"
            setDarkMode("white") 
        }
    }
    return <themeContext.Provider value={{handleDarkMode,dark}}>{children}</themeContext.Provider>
}



