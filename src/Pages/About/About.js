import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar1 from '../../Images/avatar1.png';
import avatar2 from '../../Images/avatar2.png';
import avatar3 from '../../Images/avatar3.png';


function About() {
  return (
    <div ClassName='container '>
      <div className="phone d-flex justify-content-evenly">
        <ContactCard col-md-4 
          Img={avatar1} Title='Dr. Kavita Bathe' Text='Hello my self........' />

        <ContactCard col-md-4
          Img={avatar1} Title='Dhruv Chheda' Text='Hello my self........' />

        <ContactCard col-md-4
          Img={avatar2} Title='Siddhanth Shah' Text='Hello my self........' />

        <ContactCard col-md-4
          Img={avatar3} Title='Yashkumar Dubey' Text='Hello my self........' />
      </div>
    </div>
  )
}

export default About;


function ContactCard(props) {
  return (
    <div ClassName='contact-card'>
      <Card style={{ width: '15rem', height: '24rem', display: 'inline-block', flexDirection: 'column' }}>
        <Card.Img ClassName='image' variant="top" height={200} src={props.Img} />
        <Card.Body>
          <hr></hr>
          <Card.Title ClassName='title'>{props.Title}</Card.Title>
          <Card.Text ClassName='text'>{props.Text}</Card.Text>
          <div className='d-div'>
            <Button className='button' variant="primary"></Button>
            <Button className='button' variant="primary"></Button>
            <Button className='button' variant="primary"></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

