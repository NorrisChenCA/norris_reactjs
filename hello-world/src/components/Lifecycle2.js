import React, { Component} from 'react'

class Lifecycle2 extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: 'Norris'
        }
        console.log('Lifecycle2 constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle2 getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle2 componentDidMount')
    }

    render(){
        console.log('Lifecycle2 render')
        return(
            <div>
                Lifecycle2
            </div>
        )
    }
}

export default Lifecycle2