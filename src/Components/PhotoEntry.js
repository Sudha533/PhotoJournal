import React from "react";
import './Master.css';

class PhotoEntry extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const imgSrc = "../images/" + this.props.image;
        return(
            <div className="photo-entry-block">
                <a href={imgSrc} target="_blank">
                    <img className="photo-image" src={imgSrc} alt={this.props.alt} />
                </a>
                <h5>{this.props.name}</h5>
            </div>
        )
    }
}
export default PhotoEntry;