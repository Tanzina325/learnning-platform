import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
        <div className ='w-25 mx-auto my-5 border rounded p-5 bg-dark'>
        <Form onSubmit={handleSubmit}>
        <Form.Text className="text-light fw-bold fs-3">
          Please LogIn
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Link to ='/register'><p>Already have an account ?</p></Link>     
        </div>
    );
};

export default LogIn;