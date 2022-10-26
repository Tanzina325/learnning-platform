import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';



const LogIn = () => {
    const {signIn} =useContext(AuthContext);
    const navigate=useNavigate();
    const[error,setError]=useState('');
    const location =useLocation();

    const from =location.state?.from?.pathname || '/';

    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)})
    }
    return (
    
        <div className ='w-25 mx-auto my-5 border rounded p-5 bg-dark'>
        <Form onSubmit={handleSubmit}>
        <Form.Text className="text-light fw-bold fs-3">
          Please LogIn
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'placeholder="Password" required />
      </Form.Group>
      <Form.Text className="text-danger mb-3 ">
        {error}
        </Form.Text>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    <Link to ='/register'><p>Already have an account ?</p></Link>     
        </div>
    );
};

export default LogIn;