import React, { Component} from 'react'

class Lifecycle extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: 'Norris'
        }
        console.log('Lifecycle constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle componentDidMount')
    }

    render(){
        console.log('Lifecycle render')
        return(
            <div>
                Lifecycle
            </div>
        )
    }
}

export default Lifecycle