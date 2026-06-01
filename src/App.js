import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import ResturantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";

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
            <Outlet/>
            <Footer/>
        </div>
    );
    
};

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/aboutUs',
                element:<AboutUs/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={AppRouter}/>);


