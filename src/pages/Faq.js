import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <div >
            <h1 className='fw-bold text-center text-success my-2 '>Frequently Asked Questions</h1>
            <Accordion className='w-50 mx-auto my-3 p-5 bg-danger' defaultActiveKey="0">
      <Accordion.Item className='mb-3 fs-5' eventKey="0">
        <Accordion.Header  >Is this academy helpful for personally or internally?</Accordion.Header>
        <Accordion.Body>
        Theis academy will meet in-person  at specific designated off-campus locations.These courses will help every person very cordially.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item  className='mb-3 fs-5'eventKey="1">
        <Accordion.Header>How these courses will be blended?</Accordion.Header>
        <Accordion.Body>
        These courses will have some aspects taught online (live and/or asynchronously) and others in-person that provides opportunities to eacch learner .
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-3 fs-5'eventKey="2">
        <Accordion.Header>Are these courses completely online or not?</Accordion.Header>
        <Accordion.Body>
        These courses are provided by only online classes .These courses are taught exclusively online, typically asynchronously to allow the learner to complete the work within a wider designated time frame.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-3 fs-5' eventKey="3">
        <Accordion.Header>Is it mendatory to attend online live classes on time?</Accordion.Header>
        <Accordion.Body>
        Yes,it is mendatory to attend online live classes on time.These courses are taught online and expect the learner to join at designated time(s) to learn in real time.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Faq;