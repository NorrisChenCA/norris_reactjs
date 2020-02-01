import React from "react"
import Message from "./Message"

function Memo({name}){
    console.log("Rendering")
    return(
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memo)