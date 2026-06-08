import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>
{
    const [loginButton, setLoginButton] = useState("Login")
    
    return (
        <div className="bg-black text-gray-500 flex">
                <img className="w-56 justify-start" 
                    src={LOGO_URL}
                />
            <h2 className="ml-15 py-15 ">device online: {useOnlineStatus()?"userIsOnline ✅":"userIsOffline 🔴"}</h2>
            <ul className="flex ml-100  py-15 justify-end">
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 justify-center">
                    <Link to="/AboutUs">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/Contact">Contact Us</Link>
                </li>
                <li className="px-4">Cart</li>
                <li className="px-4">
                    <Link to="/Grocery">Groceries</Link>
                </li>
                <button className="px-4 justify-items-end" onClick={()=>
                    {
                        loginButton==="Login"?
                        setLoginButton("Logout"):
                        setLoginButton("Login")
                    }}>
                    {loginButton}
                </button>
            </ul>
        </div>
    );
};

export default Header;