import React from 'react'
import "./ServiceItem.css"
function ServiceItem({image1,image2}) {
    return (
        <div className="serviceItem">
            <div className="slider">
                <div className="slides">
                    <input type="radio" 
                    name="radio-btn" 
                    id="radio1"
                    />
                     <input type="radio" 
                    name="radio-btn" 
                    id="radio2"
                    />
                    <div className="slide first">
                        <img 
                        src={image1} 
                        alt="" 
                        />
                    </div>
                    <div className="slide">
                        <img 
                        src={image2} 
                        alt="" 
                        />
                    </div>
                    <div className="navigation__auto">
                        <div className="auto__btn1"></div>
                        <div className="auto__btn2"></div>
                    </div>
                    <div className="navigation__manual">
                        <label For="radio1" className="manual__btn"></label>
                        <label For="radio2" className="manual__btn"></label>

                    </div>
                </div>
            </div>
           
        </div>
        
    )
}

export default ServiceItem
