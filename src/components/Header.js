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

export default Header;