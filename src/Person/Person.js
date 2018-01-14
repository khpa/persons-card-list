import React from 'react';
import './Person.css';

const person = (props) => {
    return (
<div className = "Person">
<p className= "p-person" onClick = {props.click}>This is a person, my name is {props.name} and I am {props.age} years old</p>
<p>{props.children}</p>
<input type="text" onChange = {props.change} defaultValue={props.name}/>
</div>
    );
}

export default person;