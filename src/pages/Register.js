import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaGoogle,FaGithub } from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Register = () => {
const {createUser,updateUserProfile,providerLogin}= useContext(AuthContext);

const googleProvider = new GoogleAuthProvider()
const githubProvider =new GithubAuthProvider()
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

    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
        const user=result.user;
        console.log(user);
        navigate('/')})
        .catch(error=>{
            console.error(error);
    })}
    const handleGithubSignIn=()=>{
        providerLogin(githubProvider)
        .then(result=>{
          const user=result.user;
          console.log(user);
          navigate('/')})
          .catch(error=>{
              console.error(error);
      })}
    return (
        <div className =' w-75 mx-auto my-3 border rounded p-3 bg-danger'>
        <Form onSubmit={handleSubmit}>
        <Form.Text className="text-light mx-auto fw-bold fs-3">
          Please Register
        </Form.Text>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className='text-light'>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your full name" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className='text-light'>Photo Url</Form.Label>
        <Form.Control type="text" name='photoURl' placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label className='text-light'>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Text className="text-danger mb-3">
          {error}
        </Form.Text>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link  to ='/login'><p>Already have an account?</p></Link> 
      <Form.Text className="text-light ">
          <p>Try another method to login...</p>
          
          <div className='text-center'><span className='text-danger  p-2'><FaGoogle onClick={handleGoogleSignIn}></FaGoogle></span>
          <span className='text-danger p-2'><FaGithub onClick={handleGithubSignIn}></FaGithub></span></div>
        
        
        </Form.Text>
    </Form>
       
        </div>
    );
};

export default Register;