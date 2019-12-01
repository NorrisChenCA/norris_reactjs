import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: 'welcome visitor'
        }
    }

changeMessage(){
    this.setState({
        message: "Thx for your like"
    })
}

render() {
    return (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Like</button>
        </div>
        )
    }
}

export default Message