import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    let classes = [];
    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
      };

    if (props.persons.length <=2) {classes=['red','bold']}

    else {classes=['blue','italic']}
    return (
        <div classname={classes.Cockpit}>
            <h1>Hi, I am a react app</h1>
            <p className={classes.join(' ')}>this is working!</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </div>

    )
}

export default cockpit;