import { useState, useEffect } from "react";
const User = (props) =>
{
    const [count]=useState(0);
    useEffect(()=>
    {
        console.log("use effect")
       const timer = setInterval(()=>
        {
            console.log("interval");
        },1000)

        return () =>
        {
            clearInterval(timer);
        }

    },[])
    return ( <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: sudodeveloper.com</h4>
        </div>
        )
}

export default User;