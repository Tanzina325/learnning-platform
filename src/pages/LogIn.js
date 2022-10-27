import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaGoogle,FaGithub } from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const LogIn = () => {
    const {signIn,providerLogin} =useContext(AuthContext);
    const navigate=useNavigate();
    const[error,setError]=useState('');
    const location =useLocation();
    const googleProvider = new GoogleAuthProvider()
    const githubProvider =new GithubAuthProvider()
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
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
          const user=result.user;
          console.log(user);
          navigate(from,{replace:true})})
          .catch(error=>{
              console.error(error);
      })}
      const handleGithubSignIn=()=>{
          providerLogin(githubProvider)
          .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true})})
            .catch(error=>{
                console.error(error);
        })}
    return (
    
        <div className ='w-75 mx-auto my-5 border rounded p-5 bg-dark'>
        <Form onSubmit={handleSubmit}>
        <Form.Text className="text-light fw-bold fs-3">
          Please LogIn
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email address</Form.Label>
        <Form.Control  type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-light'>Password</Form.Label>
        <Form.Control type="password" name='password'placeholder="Password" required />
      </Form.Group>
      <Form.Text className="text-danger mb-3 ">
        {error}
        </Form.Text>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    <Link to ='/register'><p>New to this website ?</p></Link>
    <Form.Text className="text-light ">
          <p>Try another method to login...</p>
          
          <div className='text-center'><span className='text-danger  p-2'><FaGoogle onClick={handleGoogleSignIn}></FaGoogle></span>
          <span className='text-danger p-2'><FaGithub onClick={handleGithubSignIn}></FaGithub></span></div>
        
        
        </Form.Text>     
        </div>
    );
};

export default LogIn;