import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: 'welcome visitor'
        }
    }

render() {
    return <h1>{this.StaticRange.message}</h1>
    }
}

export default Message