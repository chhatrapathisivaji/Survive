import React from 'react'
import "./Home.css";
import Product from "./Product";
import Location from "./Location"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://png.pngtree.com/background/20210712/original/pngtree-abstract-modern-neon-frame-background-picture-image_1178251.jpg" 
                alt=""
                className="home__image" 
                />
            
            <div className="home__locations__container">
                <div className="home__locations__title">
                    LOCATIONS AVAILABLE
                </div>
                <div className="home__locations">
                <Location
                    id="L1"
                    name="Hyderabad"
                    image="https://static.thenounproject.com/png/2165510-200.png"
                    />
                    <Location
                    id="L2"
                    name="Visakhapatnam"
                    image="https://static.thenounproject.com/png/2165510-200.png "
                    />
                    <Location
                    id="L3"
                    name="Vijayawada"
                    image="https://static.thenounproject.com/png/2165510-200.png"
                    />
                    <Location
                    id="L4"
                    name="Bangalore"
                    image="https://static.thenounproject.com/png/2165510-200.png"
                    />
                    <Location
                    id="L4"
                    name="  Mumbai"
                    image="https://static.thenounproject.com/png/2165510-200.png"
                    />
                </div>
                   
            </div>
            <div className="home__row">
                <Product 
                id="1000"
                title="Saloon"
                price={250}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmGzakZNWYIdE2qag7CMSk6p9uDNtNVckcA&usqp=CAU"
                rating={5}
                />

                <Product 
                id="1001"
                title="ELECTRICIAN"
                price={699}
                image="https://cdn4.vectorstock.com/i/1000x1000/30/58/electrician-with-electricity-meter-and-work-tools-vector-25853058.jpg"
                rating={5}
                />
                
            </div>
            <div className="home__row">
            <Product 
                id="1002"
                title="House-Cleaning"
                price={299}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63XMP4Y1HBz6Ux1i0W6cMf8-Zs_HlvDgY1w&usqp=CAU"
                rating={5}
                />
            
            <Product 
                id="1003"
                title="Plumbing"
                price={499}
                image="https://5.imimg.com/data5/PX/SR/MY-46461611/plumbing-materials-500x500.png"
                rating={5}
                />
            <Product 
                id="1004"
                title="Mechanic"
                price={799}
                image="https://image.shutterstock.com/image-photo/auto-mechanic-working-on-car-260nw-1458396509.jpg"
                rating={5}
                />
            
            </div>
            <div className="home__row">
            <Product 
                id="1005"
                title="Spa"
                price={849}
                image="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/10/06/Pictures/close-the-spa-massage-man-receiving-facial_1e244926-e811-11e9-939f-ba4a7f73df5c.jpg"
                rating={5}
                />
            </div>

            </div>
        </div>
    )
}

export default Home
