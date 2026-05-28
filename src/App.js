import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import ResturantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";

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


const AppLayout = () => 
{
    return (
        <div className="app">
            <Header />
            <Body/>
            <Footer/>
        </div>
    );
    
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


