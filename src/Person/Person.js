import React from 'react';


const Person = () => {
    return <p> I am from Person who is {Math.floor(Math.random()*30)+1}</p>
}


export const Person_Props = (any_name) => {
    return (<div>
        <p> I am from {any_name.name} who is {any_name.age}</p>
        <p>{any_name.children}</p>
    </div>)
}

export default  Person;

