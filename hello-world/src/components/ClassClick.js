import React, { Component } from "react"

class ClassClick extends Component{
    
    render(){
        return(
         <div>
             <button onClick = {this.clickHandler}>Button</button>
         </div>
        )
    } 
}

export default ClassClick