import React, { Component } from "react"
import Child from "./Child"

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            ParentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(){
        alert(`Hello ${this.state.ParentName}`)
    }
    
    render(){
        return(
            <div>
                <Child />
            </div>
        )
    }
}

export default Parent