import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const{title ,image,id} = course
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <Link to ={`/course/${id}`}><Button variant="primary">Course Details</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default CourseCard;