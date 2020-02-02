import React, { Component } from "react"

class Refs extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    render(){
        return(
            <div>
                <input type="txt" />
            </div>
        )
    }
}

export default Refs