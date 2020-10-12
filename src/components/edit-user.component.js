import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditUser extends Component {
  
  constructor(props) {
    super(props)

    this.onChangeUserfirst_name = this.onChangeUserfirst_name.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserlast_name = this.onChangeUserlast_name.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      first_name: '',
      last_name:'',
      email: '',
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users/')
      .then(res => {
        this.setState({
          first_name: res.data.first_name,
          email: res.data.email,
          last_name: res.data.last_name
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
    console.log(`first_name: ${this.state.name}`);
    console.log(`last_name: ${this.state.rollno}`);
    console.log(`Email: ${this.state.email}`);

    

    const UserObject = {
        first_name: this.state.name,
        last_name: this.state.last_name,
        email: this.state.email,
      };


      axios.put('http://localhost:3000/users/' + this.props.match.params.id, UserObject)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

      this.props.history.push('/user-list')

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
            Update User
          </Button>
        </Form>
        </div>
      );
    }
  
  
  
  
  }

