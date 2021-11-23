import React from 'react';
import "./Location.css";

function Location({id,name,image}) {
    return (
        <div className="location">
             <div className="location_image">
                <img src={image}
                alt="" 
                />
            </div>
            <div className="location__name">
                <h5>
                    {name}
                </h5>
            </div>
           
            
        </div>
    )
}

export default Location
