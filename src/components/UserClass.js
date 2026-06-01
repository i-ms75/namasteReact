import React from "react";
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }

        console.log("constructor: "+this.props.name)

    }
    componentDidMount()
    {
        console.log("component did mount: "+this.props.name)
    }
    render()
    {
        console.log("render: "+this.props.name)
        const {name,location}=this.props;
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