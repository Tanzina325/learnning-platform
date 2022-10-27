import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ReactToPrint from 'react-to-print';


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const componentRef = useRef();
    const{title ,image,details,duration,cost,time,id} = courseDetails
    return (
    
        <div>
          <div className='text-center my-2'>
          <ReactToPrint 
        trigger={() => <Button   variant="danger">Print This Out</Button>}
        content={() => componentRef.current}
      />
          </div>
          <div ref={componentRef} className="card m-5" style={{height:'500px'}} >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} style={{height:'500px'}} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-secondary">{title}</h5>
              <p className="card-text text-secondary">{details}</p>
              <div className='d-flex justify-content-evenly'>
                <p className=" text-dark fw-bold">{cost}</p>
                <p className="card-text text-dark fw-bold">{duration}</p>
            <p className="card-text text-dark fw-bold">{time}</p>
              </div>
          <div className='text-center m-4'>
            <Link to={`/checkout/${id}`}> <Button   variant="danger">Get premium course</Button>{' '}</Link>
          </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default CourseDetails;