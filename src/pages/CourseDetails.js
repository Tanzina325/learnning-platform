import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pdf from "react-to-pdf";


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const ref = React.createRef();
    const{title,about ,image,details,duration,cost,time,id} = courseDetails
    return (
      
        <div className='text-left'>
          <div className='text-center my-2'>
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf}  variant="danger">Generate pdf</Button>}
      </Pdf>
          </div>
          <div ref={ref} className="card mx-auto" style={{ width:'400px',height: '400px'}} >
            <p className='p-3 text-secondary '>{about}</p>
            </div>
        <div className="row m-4 g-0">
          <div className="col-md-4">
            <img src={image} style={{height:'500px'}} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className=" mx-4 card-body">
              <h5 className="card-title text-secondary">{title}</h5>
              <p className="card-text text-secondary">{details}</p>
              <div className='d-flex justify-content-evenly'>
                <p className=" text-dark fw-bold">{cost}</p>
                <p className="card-text text-dark fw-bold">{duration}</p>
            <p className="card-text text-dark fw-bold">{time}</p>
              </div>
          <div className='text-center m-4'>
            <Link to={`/checkout/${id}`}> <Button   variant="danger">Get premium access</Button>{' '}</Link>
          </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default CourseDetails;