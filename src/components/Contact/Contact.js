import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import { Container, Form, Modal, Button } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Message sent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                Your message has been sent successfully. Thank you for submitting your message,
                I'll return to you ASAP.
            </p>

            <p>
                My sincere appreciation.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Contact () {
    const form = useRef();
    const [modalShow, setModalShow] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_idggl9c', 'template_0lqx8w8', form.current, 'dt428mMQ2n6xqUhNp')
    e.target.reset()
  };


  return (
    <Container fluid className='contact-section'>
        {/* <Particle/> */}
        <h5>Get in touch</h5>
        <h2>Contact me</h2>
        <Container className="container contact__container">
            
                <div className="contact__options">
                <article className="contact__option">
                    <HiOutlineMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h6 style={{color: "white"}}>mouradlabrahmi96@mail.com</h6>
                    <a href='mailto:mouradlabrahmi96@gmail.com' target='_blank' rel="noopener noreferrer">Send an email</a>
                </article>
                
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>Whatsapp</h4>
                    <h5>+212708109368</h5>
                    <a href='https://api.whatsapp.com/send?phone=+212708109368' target='_blank' rel="noopener noreferrer">Send a message</a>
                </article>
                </div>
                <Form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your full name' required/>
                    <input type='email' name='email' placeholder='Your email address' required/>
                    <input type='text' name='subject' placeholder='Subject (optional)'/>
                    <textarea name='message' rows='7' placeholder='Your Message' required/>
                    <button type='submit' className='btn btn-primary' onClick={() => setModalShow(true)}>Send Message</button>
                    
                </Form>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            {/* </div> */}
        </Container>
    </Container>
  );
}

export default Contact