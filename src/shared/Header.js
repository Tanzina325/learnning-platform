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
const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .then(error=>console.error(error))
    
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/home"><BiBookReader></BiBookReader>   EDUCAMB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
        </Nav>
          <Nav>
            {
              user?.uid ?
              <Button onClick={handleLogOut} variant="danger">LogOut</Button>
              :
              <>
              <Nav.Link href="/login">LogIn</Nav.Link>
              <Nav.Link href="/register">Sign Up</Nav.Link>
              </>
            }
            </Nav>
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
    >{user?.photoURL ?
      <Image className='mx-3' style={{height:'30px'}} roundedCircle  src={user.photoURL}></Image>
      :<FaUser></FaUser> 
     }</OverlayTrigger>
            
              
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </div>
    
    );
};

export default Header;