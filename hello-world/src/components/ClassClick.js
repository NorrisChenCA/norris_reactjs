import React, { Component } from "react"

class ClassClick extends Component{
    clickHandler() {
        console.log("don't click this button")
    }
    render(){
        return(
         <div>
             <button onClick = {this.clickHandler}>Button</button>
         </div>
        )
    } 
}

export default ClassClick