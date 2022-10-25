import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const LeftSideCourse = ({leftCourse}) => {
    const{title ,id} = leftCourse
    return (
        <ListGroup className='mb-4 border border-primary' defaultActiveKey="#link1">
      <ListGroup.Item  className='fw-bold'action href={`/course/${id}`}>
        {title}
      </ListGroup.Item>
      </ListGroup>
    );
};

export default LeftSideCourse;