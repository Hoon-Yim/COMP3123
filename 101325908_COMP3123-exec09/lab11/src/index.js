import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";

import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            const persons = res.data.results;
            this.setState({ persons });
            console.log(this.state.persons)
        });
    }

    generateListItem(person) {
        return(
            <Card key={person.login.uuid} style={{width: "20rem", margin: "5px"}}>
                <Card.Img variant="top" src={person.picture.large}></Card.Img>
                <Card.Title>{person.login.username}</Card.Title>
                <Card.Text>Gender: {person.gender}</Card.Text>
                <Card.Text>Time Zone Description: {person.location.timezone.description}</Card.Text>
                <Card.Text>Address: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country}</Card.Text>
                <Card.Text>Email: {person.email}</Card.Text>
                <Card.Text>Birth Date and Age: {person.dob.date} ({person.dob.age})</Card.Text>
                <Card.Text>Register Date: {person.registered.date}</Card.Text>
                <Card.Text>Phone#: {person.phone}</Card.Text>
            </Card>
        )
    }

    render() {
        return(
            <div style={{display: "flex"}}>
                {this.state.persons.map(person => this.generateListItem(person))}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PersonList />
    </React.StrictMode>
);