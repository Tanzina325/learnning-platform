import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <div>
         <Carousel>
      <Carousel.Item style={{position:'relative'}}>
        <img
          className="d-block w-100 "
          style={{height:'400px',opacity:'0.8'}} 
          src="https://miro.medium.com/max/15174/1*xX6Cpskem0SbqQuPZ8R-4g.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className=' w-75 mx-auto'  style={{position:'absolute',top:'40px',bottom:'0',left:'0',right:'0'}}>
          <h3 className='text-center text-warning'>Discover your perfect online courses today</h3>
          <h1 className='display-3 fw-bold text-center text-danger'>Educamb is the Top tutoring Online Platforms </h1>
          <h3 className='text-left text-white'>Educamb is a full-featured, but easy to use online platforms for selling data-science courses .</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position:'relative'}}>
        <img
          className="d-block w-100"
          style={{height:'400px',opacity:"0.8"}} 
          src="http://procurementpeoplecloud.co.uk/wp-content/uploads/2018/04/PCD-02-04-18.jpg"
          alt="Second slide"
        />

<Carousel.Caption className=' w-75 mx-auto'  style={{position:'absolute',top:'40px',bottom:'0',left:'0',right:'0'}}>
          <h3 className='text-center text-warning'>Discover your perfect online courses today</h3>
          <h1 className='display-3 fw-bold text-center text-danger'>Educamb is the Top tutoring Online Platforms </h1>
          <h3 className='text-left text-white'>Educamb is a full-featured, but easy to use online platforms for selling data-science courses .</h3>
        
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item style={{position:'relative'}}>
        <img
          className="d-block w-100"
          style={{height:'400px',opacity:'0.8'}} 
          src="https://wallpapercave.com/wp/wp4748499.jpg"
          alt="Third slide"
        />

<Carousel.Caption className=' w-75 mx-auto'  style={{position:'absolute',top:'40px',bottom:'0',left:'0',right:'0'}}>
          <h3 className='text-center text-warning'>Discover your perfect online courses today</h3>
          <h1 className='display-3 fw-bold text-center text-danger'>Educamb is the Top tutoring Online Platforms </h1>
          <h3 className='text-left text-light'>Educamb is a full-featured, but easy to use online platforms for selling data-science courses .</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>   
        </div>
    );
};

export default Home;