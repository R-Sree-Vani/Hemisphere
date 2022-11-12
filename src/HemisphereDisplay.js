import React from "react";
import NorthernHemisphere from './image/Nhemisphere.png';
import SouthernHemisphere from './image/Shemisphere.jfif';
import './Hemisphere.css';

const hemisphereConfig={
    Northern:{
        text: 'It is Northern Hemisphere',
        picture: NorthernHemisphere
    },
    Southern:{
        text: 'It is Southern Hemisphere',
        picture: SouthernHemisphere
    }
}

const HemisphereDisplay = ({latitude}) =>{
    console.log({latitude})
    const hemisphere=latitude>0?'Northern' : 'Southern';
    const { text,picture}=hemisphereConfig[hemisphere]
    return(
        <div className={hemisphere}>
            <div className="ui raised tetx container segment">
                <div className="image"><img src={picture} alt="hemisphere picture"/></div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            
            {/* {hemisphere} */}
            </div>
        </div>
    )
}

export default HemisphereDisplay;