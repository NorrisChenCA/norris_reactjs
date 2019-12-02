import React from 'react'

const Greet = props => {
    const {name, otherName} = props
    return(
        <div>
            <h1>Hello {name} a.k.a {otherName}</h1> 
        </div>
    )
}




export default Greet3