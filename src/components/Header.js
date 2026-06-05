import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () =>
{
    const [loginButton, setLoginButton] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <Link to="/Grocery">Groceries</Link>
                    </li>
                    <button className="login-btn" onClick={()=>
                        {
                            loginButton==="Login"?
                            setLoginButton("Logout"):
                            setLoginButton("Login")
                        }}>
                        {loginButton}
                    </button>
                </ul>
            </div>

        </div>
    );
};

export default Header;