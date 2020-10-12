import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from 'axios';

export default class CreateUser extends Component {
  
  
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUserfirst_name = this.onChangeUserfirst_name.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserlast_name = this.onChangeUserlast_name.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          first_name: '',
          last_name:'',
          email: '',
          
        }
      }
     
      onChangeUserfirst_name(e) {
        this.setState({first_name: e.target.value})
      }
    
      onChangeUserlast_name(e) {
        this.setState({last_name: e.target.value})
      }
  
      onChangeUserEmail(e) {
        this.setState({email: e.target.value})
      }
  
      onSubmit(e) {
        e.preventDefault()
        console.log(`User successfully created!`);
        console.log(`first_name: ${this.state.first_name}`);
        console.log(`last_name: ${this.state.last_name}`);
        console.log(`Email: ${this.state.email}`);

        

        const UserObject = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
          };

        axios.post('http://localhost:3000/users/',UserObject).then(res => console.log(res.data));
        this.setState({first_name: '', last_name: '',email: ''})



}

render() {
    return (<div class="form-wrapper">
        
        <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="first_name">
          <Form.Label>first_name</Form.Label>
          <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeUserfirst_name}/>
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>last_name</Form.Label>
          <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeUserlast_name}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={this.state.email} onChange={this.onChangeUserEmail}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create User
        </Button>
      </Form>
      </div>
    );
  }
}