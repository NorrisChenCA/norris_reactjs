import React from 'react';

const Hi = () => {
    /*return(
        <div>
           <h1>Hello Norris</h1> 
        </div>
    )
} */
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hi')
    )
}
export default Hi