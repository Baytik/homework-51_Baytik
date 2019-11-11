import React from 'react';
const  Person = (props) => {
    return (
    <div className="blocks">
        <div className="block-1">
            <img height="300px" width="150px" src={props.img} alt=""/>
            <h3 className="main-title">{props.title}</h3>
            <p className="text">{props.text}</p>
        </div>
    </div>
    )
};
//fafaff
export default Person;