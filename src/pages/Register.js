import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
const Register = () => {
const {createUser,updateUserProfile}= useContext(AuthContext);
const navigate =useNavigate();
const[error,setError]=useState();
    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photoURL =form.photoURl.value;
        const email =form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            
            form.reset();
             setError('');
             handleUpdateUserProfile(name,photoURL)
             navigate('/')
        })
        .catch(error=>{
            console.error(error);
        setError(error.message)});
    }

    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile ={
            displayName:name,
            photoURL:photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
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
        <Form.Control type="text" name='photoURl' placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Text className="text-danger mb-3">
          {error}
        </Form.Text>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link  to ='/login'><p>New to this page?</p></Link> 
    </Form>
       
        </div>
    );
};

export default Register;