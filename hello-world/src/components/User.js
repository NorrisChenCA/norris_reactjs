import React, { Component } from "react"

class User extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false
        }
    }

    render(){
        if(this.state.isLoggedIn){
            return(
                <div>
                    welcome Norris
                </div>
            )
        }
        else{
            return(
                <div>
                    welcome guest
                </div>
            )
        } 
    }
}

export default User