import React from "react";

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            name: props.name,
            address1: props.address1,
            address2: props.address2,
            city: props.city,
            province: props.province,
            postal: props.postal,
        }
    }

    render() {
        return(
            <div>
                <div>{this.state.email}</div>
                <div>{this.state.name}</div>
                <div>{this.state.address1}</div>
                <div>{this.state.address2}</div>
                <div>{this.state.city}</div>
                <div>{this.state.province}</div>
                <div>{this.state.postal}</div>
            </div>
        );
    }
}