import React from 'react';
import {  Col, Container, Row} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../components/Course/CourseCard';
import LeftSideCourse from '../components/LeftSideCourse/LeftSideCourse';
import './courses.css'
const Courses = () => {
    const courses = useLoaderData();
console.log(courses)
    return (
        <div>
          <Container>
            <Row className='m-2'>
                <Col lg={3}>
                {courses.map(leftCourse=><LeftSideCourse key={leftCourse.id}  leftCourse={leftCourse}></LeftSideCourse> )}  </Col>
                <Col lg={9} className='cardCol'>
                    {courses.map(course=><CourseCard key={course.id}  course={course}>
                                 </CourseCard>)}
                </Col>
                
            </Row>
            </Container>  
        </div>
    );
};

export default Courses;