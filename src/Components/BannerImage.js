import React from "react";

const BannerImage = (props) => {
    const bannerImageSrc = "../images/" + props.bannerImage
    return(
        <div>
            <img src={bannerImageSrc} className="banner" alt={props.alt} style={{width:"80%"}}/>
        </div>
    )
}
export default BannerImage;


