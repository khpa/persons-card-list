import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
    render () {
        return (
<div className = "Person">
<p className= "p-person" onClick = {this.props.click}>This is a person, my name is {this.props.name} and I am {this.props.age} years old</p>
<p>{this.props.children}</p>
<input type="text" onChange = {this.props.changed} defaultValue={this.props.name}/>
</div>
        );
    }
};

export default Person;