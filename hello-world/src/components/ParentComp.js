import React, { Component } from "react"

export class ParentComp extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            name: "norris"
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
            name: "norris"
            })
        }, 2000)
    }

    render(){
        return(
            <div>
               Parent Component
            </div>
        )
    }
}

export default ParentComp