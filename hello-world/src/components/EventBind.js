import React, { Component } from "react"

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hi"
        }
    }
    clickHandler(){
        this.setState({
            message:"don't click this too"
        })
    }
    render(){
        return(
         <div>
            <div>{this.state.message}</div>
            <button onClick = {this.clickHandler.bind(this)}>Button2</button>
         </div>
        )
    } 
}

export default EventBind