


import React, {useState, useEffect} from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
// import './style.css'
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL
const MovieList = () =>{
const [movies,setMovies]= useState([])
const [loading,setLoading]= useState(false)
useEffect(()=>{
    (async()=>{
        setLoading(true)
        const movies = await getMovies()
        setMovies(movies.results)
        setLoading(false)
        console.log({movies})
    })();
},[])
if(loading){
    return <h1>LOADING ...</h1>
}
    return(
        <div className="image-container">
            {loading ===false && movies.length > 0 && movies.map (item => (
                <ImageContainer props={item}/>
                )
                )
            }
        </div>
    )
}
export default MovieList