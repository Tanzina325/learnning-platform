import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photo =form.photoUrl.value;
        const email =form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)
    }
    return (
        <div className ='w-25 mx-auto my-5 border rounded p-3 bg-dark'>
        <Form onSubmit={handleSubmit}>
        <Form.Text className="text-light fw-bold fs-3">
          Please Register
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name='photoUrl' placeholder="Photo url" />
        </Form.Group>
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
      <Link  to ='/login'><p>New to this page?</p></Link> 
    </Form>
       
        </div>
    );
};

export default Register;