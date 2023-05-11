import { createContext, useContext, useEffect, useState  } from "react";
import React from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=58a69d44`;
//${process.env.REACT_APP_API_KEY}

//create context(warehouse)
export const AppContext = createContext();

// provider created
const AppProvider =(props)=>{
    //useState Hook
    const [isLoadig,setIsLoading] =useState(true);
    const [movie,setMovie]=useState([]);
    const [isError,setIsError] = useState({show:false,msg:""})
    const [query,setQuery]=useState("titanic");
    
    // getmovie function
    const getMovies = async(url)=>{
        setIsLoading(true);
        try{
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                if(data.Response === 'True'){
                    setIsLoading(false);
                    setIsError({show:false,msg:""});
                    setMovie(data.Search)
                }
                else{
                    setIsError({show:true,msg:data.Error})
                }

            }catch(error){
                console.log(error);
            }
                                
    }
    useEffect(()=>{
       let timeOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        },500)
        return ()=>{
            clearTimeout(timeOut)
        }
    },[query])
    
    return(
        <AppContext.Provider value={{isLoadig,isError,movie,setQuery,query}}>
            {props.children}
        </AppContext.Provider>
    )
}
// Goble useCotext 
export const useGlobalContext = ()=>{
return(
    useContext(AppContext)
)
}
export default AppProvider;