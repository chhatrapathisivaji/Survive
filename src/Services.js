import React from 'react'
import "./Services.css"
import ServiceItem from './ServiceItem'
function Services() {
    return (
        <div className="services">
        <div className="serviceContainer">
            <div className="serviceItem">
             <div className="service__info">
                <h3>SALOON & SPA</h3>
                
            </div>
            <button className="service__booking">
                    BOOK NOW
                </button>
            <div className="service__images">
            <ServiceItem
            image1="https://cache.marriott.com/marriottassets/marriott/HYDSI/hydsi-spa-9327-hor-feat.jpg?downsize=1440px:*"
            image2="https://api.peepingpeacock.com:8443/service/peacock/images/outlet-image-Cameo-Men-s-Beauty-Parlour-091117-073904-125.5.jpg"
            />
            </div>
            

             </div>

             <div className="serviceItem">
             <div className="service__info">
                <h3>ELECTRICIAN</h3>
            </div>
            <button className="service__booking">
                    BOOK NOW
                </button>
            <div className="service__images">
            <ServiceItem
            image2="https://image.shutterstock.com/image-vector/lightning-collision-powerful-colored-lightnings-600w-1570181938.jpg"
            image1="https://cdn.vox-cdn.com/thumbor/hDReuqarMY-31om3fwEiWpjzcx8=/0x0:3000x3000/920x613/filters:focal(1260x1260:1740x1740):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50911339/electricity.0.jpg"
            />
            </div>
            

             </div>

             <div className="serviceItem">
             <div className="service__info">
                <h3>MECHANIC</h3>
            </div>
            <button className="service__booking">
                    BOOK NOW
                </button>
            <div className="service__images">
            <ServiceItem
            image2="https://www.tws.edu/wp-content/uploads/xelectrician-working-with-face-mask.jpg.pagespeed.ic.tmWn5_n9Am.webp"
            image1="https://cdn.vox-cdn.com/thumbor/hDReuqarMY-31om3fwEiWpjzcx8=/0x0:3000x3000/920x613/filters:focal(1260x1260:1740x1740):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50911339/electricity.0.jpg"
            />
            </div>
            

             </div>
            
           
            
        </div>
            
        </div>
    )
}

export default Services
