import React from "react"

function Namelist2(){
    const person = [
        {
        id: 1,
        name: 'john',
        age: 30,
        },
        {
        id: 2,
        name: 'jack',
        age: 36,
        }
    ]
    const personlist = person.map(person => <h2>I am {person.name}. I am {person.age} years old.</h2>)
    return <div>{personlist}</div>
}

export default Namelist2