import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";


export default class StudentTableRow extends Component {
    
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost:3000/users/')
            .then((res) => {
                console.log('User successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    
    
    render() {
        return (
            <tr>
                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.last_name}</td>
                <td>
                    <Link className="edit-link" to={"/users/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteUser} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}