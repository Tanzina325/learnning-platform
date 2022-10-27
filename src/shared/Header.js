import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiBookReader } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import  {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle"
import { useNavigate } from 'react-router-dom';

const Header = ({toggleTheme}) => {
  const {user,logOut} = useContext(AuthContext);
  const navigate =useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      navigate('/')
    })
    .then(error=>console.error(error))
    
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/home"><BiBookReader className='text-danger' style={{width:'50px',height:'40px'}}></BiBookReader>   EDUCAMB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className=' fw-bold' href="/courses">Courses</Nav.Link>
            <Nav.Link  className=' fw-bold' href="/blogs">Blogs</Nav.Link>
            <Nav.Link className=' fw-bold' href="/faq">FAQ</Nav.Link>
        </Nav>
        <DarkModeToggle className='me-auto my-2'
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
    
          <Nav>
            {
              user?.uid ?
              <Button onClick={handleLogOut} variant="danger">LogOut</Button>
              :
              <>
              <Nav.Link className=' fw-bold' href="/login">LogIn</Nav.Link>
              <Nav.Link className=' fw-bold' href="/register">Sign Up</Nav.Link>
              </>
            }
            </Nav>
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
    >{user?.photoURL ?
      <Image className='m-2' style={{height:'30px'}} roundedCircle  src={user.photoURL}></Image>
      :<FaUser></FaUser> 
     }</OverlayTrigger>
            
              
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </div>
    
    );
};

export default Header;