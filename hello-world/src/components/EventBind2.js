import React, { Component } from "react"

class EventBind2 extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hi"
        }
        this.clickHandler = this.clickHandler.bind(this)
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
            {/*<button onClick = {this.clickHandler.bind(this)}>Button2</button>*/}
            <button onClick = {this.clickHandler}>Button3</button>
         </div>
        )
    } 
}

export default EventBind2