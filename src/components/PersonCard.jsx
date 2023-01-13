import React from 'react'
import { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    const {lastName, firstName, hairColor} = props;
    
    return (
        <div className="card">
            <div className="cardBody">
                <h2>{ lastName }, { firstName }</h2>
                <p className="card-text">Age: { age }</p>
                <p className="card-text">Hair Color: { hairColor }</p>
                <button onClick={() => setAge(age + 1)} className="btn btn-success">Birthday</button>
            </div>
        </div>
    )
}

export default PersonCard