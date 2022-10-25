import React from 'react';
import { useLoaderData } from 'react-router-dom';



const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const{title ,image,details,duration,cost,time} = courseDetails
    return (
    
        <div className="card m-5" style={{height:'500px'}} >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} style={{height:'500px'}} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{details}</p>
              <div className='d-flex justify-content-evenly'>
                <p>{cost}</p>
                <p>{duration}</p>
            <p>{time}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;