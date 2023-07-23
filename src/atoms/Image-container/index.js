import React from "react";
const Image_BASE_URL= process.env.REACT_APP_IMAGE_BASE_URL


const ImageContainer= ({props})=>{
    return(
        <div key={props.id}className="images">
            <img
            src= {`${Image_BASE_URL}${props.poster_path}`} alt={props.title}/>
        </div>
    )
}
export default ImageContainer