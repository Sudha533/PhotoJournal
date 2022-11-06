import React from "react";
import './Master.css';
import PhotoEntry from "./PhotoEntry";
import entries from "./Data/photo-entries.json"

class Album extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(entries);
        return(
            <div className="flex-container">
               {
                entries.itemslist.map((photo)=>{
                    return <PhotoEntry key={photo.src} image={photo.src} alt={photo.album}vname={photo.name}/>
                }
                )
               } 
                {/*<PhotoEntry image="swan.jpg" alt="Swan" name="Swan"/>*/}
                
            </div>
        )
    }
}
export default Album;