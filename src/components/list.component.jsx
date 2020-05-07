import React, { useState } from 'react'

import ListItem from './listitem.component'

import { FaArrowRight } from 'react-icons/fa';

const faker = require('faker');

const personLibary = [
    {name: 'Lord Samuel', email: faker.internet.email(), avatar: faker.internet.avatar()}, 
    {name: 'Frank-Papaya', email: faker.internet.email(), avatar: faker.internet.avatar()}, 
    {name: 'El Ninjo la samuari', email: faker.internet.email(), avatar: faker.internet.avatar()}, 
    {name: 'Dass Mort', email: faker.internet.email(), avatar: faker.internet.avatar()}, 
    {name: 'Frank Dassedass', email: faker.internet.email(), avatar: faker.internet.avatar()}, 
    {name: 'Cod-Bjarne', email: faker.internet.email(), avatar: faker.internet.avatar()}, 
    {name: 'Espen Lesben', email: faker.internet.email(), avatar: faker.internet.avatar()}
]

function List() {
    const [persons, setPersons] = useState(personLibary)
    console.log(persons)

    function sortByName() {
        setPersons(persons.sort((a, b) => a.name > b.name ? 1 : -1 ))
        console.log(persons)
    }

    return (
    <div className="list">
        <h3>You will never forget this list</h3>
        <div className="actionButtons">
        <h3 onClick={sortByName}>Funny names <FaArrowRight/></h3>
        <h3>Stupid email</h3>
        <h3>Cool avatar</h3>
        </div>
        {
            persons.map((person) => {
                return <ListItem {...person}></ListItem>
            })
        }
    </div>
    )
}

export default List