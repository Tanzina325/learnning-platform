import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
const CourseCard = ({course}) => {
    const{title ,image,id} = course
    return (
        <Card style={{ width: '18rem', height:'330px',margin:'0 auto',position:'relative' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body >
        <ListGroup.Item className='text-secondary fw-bold'>{title}</ListGroup.Item>
        <Link to ={`/course/${id}`}><Button style={{position:'absolute',bottom:"25px",left:'70px'}}  variant="primary">Course Details</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default CourseCard;