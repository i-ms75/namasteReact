import React from "react";
import ReactDOM from "react-dom/client";
// import logo from './src/img/logo.jpg';

/*
everything in here is a comment for this application
Building a swiggy clone with react
- Heaader
    - Navbar
    - Logo
    - Search    
- Body
    - Restaurant Container
        - Restaurant Card
            - Image
            - Name
            - Cuisines
            - Rating
- Footer
*/

const Header = () =>
{
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src="https://res.cloudinary.com/cloudinary-marketing/images/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1750375701/basspro-case_study-image2/basspro-case_study-image2.png?_i=AA" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};

const ResturantCard = () =>
{
    return (
        <div className="resturant-card">
            <img className="resturant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/3/4212e047-b31c-4448-bc23-c2330abeeb37_f81c1236-0b5f-4b60-b220-7722c3878f3c.jpg" alt="resturant logo" />
            <h5>Nepali, North Indian, South Indian</h5>
            <h5>4 star</h5>
            <h4>Biriyani zone</h4>
        </div>
    )
}

const Body = () =>
{
    return(
        <div className="body">
            <div className="search"> Search </div> 
            {/* //Restaurant Card */}
            <div className="resturant-container">
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => 
{
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
    
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


