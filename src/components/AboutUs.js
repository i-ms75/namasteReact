import User from "./User";
import UserClass from "./UserClass";
const AboutUs = () => 
{
    return (
        <div>
            <h1>Heyy there here's about me, A struggling Software Engineer!!</h1>
            <h2>struggling to keep up with inflation</h2>
            <User name={"Manmohan Kushwaha (function)"} location={"Bengaluru"}/>
            <UserClass name={"Manmohan Kushwaha (Class)"} location={"Bengaluru"}/>
        </div>

    )
}

export default AboutUs;