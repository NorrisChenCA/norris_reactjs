import React, { Component } from "react"
import Child from "./Child"
import ParentComp from "./ParentComp"
import Memo from "./Memo"

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            ParentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "norris"
            })
        }, 2000)
    }
    
    render(){
        console.log('ParentComp')
        return(
            <div>
                Parent
                <Memo name={this.state.name}/>
            </div>
        )
    }
}

export default Parent