import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blogs = () => {
    return (
        <div>
           <h1 className='fw-bold text-center text-danger my-2 '>Here Blogs Are</h1>
            <Accordion className='w-75 mx-auto my-3 p-3 bg-success' defaultActiveKey="0">
      <Accordion.Item className='mb-3 ' eventKey="0">
        <Accordion.Header  >What is CORS?</Accordion.Header>
        <Accordion.Body>
        Cross-origin resource sharing ( CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item  className='mb-3 'eventKey="1">
        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. I might also want to consider leveraging this tool if I eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configurations. Token Authentication,Transaction Authentication,Multi-Factor Authentication (MFA),Out-of-Band Authentication (OOB),Biometrics are other options  to implement authentication.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-3 'eventKey="2">
        <Accordion.Header> How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn't logged in they're redirected to the /login page, if the user is logged in but aren't in an authorised role they're redirected to the home page.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-3 ' eventKey="3">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        Node.js is an open-source server-side run time environment that is built on Chrome's V8 Javascript Engine. Node.js written in c, c++. It was introduced by Ryan Dahl in 2009.Normally, Javascript runs on the client-side only and it was not working with the server-side. Node.js provides the environment to run javascript code on the server-side and communicate with the database.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-3 ' eventKey="4">
        <Accordion.Header> How does Node work?</Accordion.Header>
        <Accordion.Body>
        Node.js uses the “Single Threaded Event Loop” architecture to handle multiple requests at the same time.Node.js maintains a limited thread pool to process a request. When request come node js first send those requests to the queue. After the event queue, the next processable entity is the Single Threaded Event Loop. It is the core component of the architecture.So, When the request comes from the queue to the event loop it will check whether the request is blocking operation or not.If it is a blocking operation then it will send to the thread pool and it will process the request and send back the response to the event loop. These requests are like fetching data from the database.If the request is non-blocking then it will process and send the response back. these requests such as I/O polling.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blogs;