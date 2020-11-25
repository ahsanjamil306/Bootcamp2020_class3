import React from 'react';

function Child (props){
    return (
        <div>

        <h1>Hello my name is :    {props.name}</h1>
        <hr/>
        <h1>I am a :   {props.designation}</h1>

        
       
        </div>

    )
}

export default Child;