import React from "react";
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            userInfo:{
                name:"constructorName",
                company:"default",
                location:"default "
            }
        }

        // console.log("constructor: "+this.props.name)

    }
    async componentDidMount()
    {
          const data = await fetch("https://api.github.com/users/i-ms75");
          const json = await data.json();
          this.setState(
            {
                userInfo: json,
            });

    }
    render()
    {
        // console.log("render: "+this.props.name)
        const {name,location}=this.state.userInfo;
        const {count}=this.state
        return ( 
        <div className="user-card">
            <h2>Count: {count}</h2>
            <button onClick=
            {
                ()=>
                    {
                        this.setState(
                            {
                                count:this.state.count +1
                            }
                        )
                    }
            }>increaseCount</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: sudodeveloper.com</h4>
        </div>
        )
    }
}

export default UserClass;