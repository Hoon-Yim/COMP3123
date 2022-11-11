import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            address1: "",
            address2: "",
            city: "",
            province: "",
            postal: "",
        };
    }

    handleChange(event) {
        event.preventDefault();
        console.log(event);
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({email: event.target.email.value});
        this.setState({name: event.target.name.value});
        this.setState({address1: event.target.address1.value});
        this.setState({address2: event.target.address2.value});
        this.setState({city: event.target.city.value});
        this.setState({province: event.target.province.value});
        this.setState({postal: event.target.postal.value});
        console.log("state", this.state);
    }

    render() {
        const provinces = ["Ontario", "Quebec", "Nova Scotia", "New Brunswick", "Manitoba", "British Columbia", "Prince Edward Island", "Saskatchewan", "Alberta", "Newfoundland and Labrador"];
        const makeOption = province => <option value={province}>{province}</option>;

        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="enter email"></input>
                    <label for="name">Name</label>
                    <input id="name" type="text" placeholder="Full Name"></input>
                    <label for="address1">Address</label>
                    <input id="address1" type="text" placeholder="1234 main st"></input>
                    <label for="address2">Address2</label>
                    <input id="address2" type="text" placeholder="Apartment, studio, or floor"></input>
                    <label for="city">City</label>
                    <input id="city" type="text"></input>
                    <label for="province">Province</label>
                    <select id="province">{provinces.map(makeOption)}</select>
                    <label for="postal">Postal Code</label>
                    <input id="postal" type="text"></input>

                    <button type="submit">Submit</button>
                </form>
                <div>
                    <div>Email: {this.state.email}</div>
                    <div>Full Name: {this.state.name}</div>
                    <div>Address: {this.state.address1}</div>
                    <div>Address2: {this.state.address2}</div>
                    <div>City: {this.state.city}</div>
                    <div>Province: {this.state.province}</div>
                    <div>Postal Code: {this.state.postal}</div>
                </div>
            </div>
        );
    }
}