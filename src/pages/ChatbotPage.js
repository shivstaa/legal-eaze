import './ChatbotPage.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../chatbot/config.js';
import MessageParser from '../chatbot/MessageParser.js';
import ActionProvider from '../chatbot/ActionProvider.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import Text from 'react-bootstrap/Text';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ChatbotPage = () => {
  const [show, setShow] = useState(false);
  const [showThankyou, setShowThankyou] = useState(false);
  const handleCloseAndDonate = () => {donate(); setShowThankyou(true);}
  const handleClose = () => {setShowThankyou(false); setShow(false);}
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const onInputEmail = (email) => {setEmail(email.target.value)};
  const onInputAmount = (amount) => {setAmount(amount.target.value)};

  const donate = () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'd6aa2703655f4ba2af2a56202961ca86:dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        amount: parseFloat(amount),
        description: 'Donation to Legal-Eaze Chatbot',
        name: 'Legal-Eaze',
        recipient: email
      })
    };
    console.log(options);
    
    fetch('https://demo.checkbook.io/v3/invoice', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Donate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!showThankyou && <Form>
            <Form.Group controlId="formDonate">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={onInputEmail}/>
              <Form.Label>Amount</Form.Label>
              <Form.Control type="amount" placeholder="0.00" value={amount} onChange={onInputAmount}/>
            </Form.Group>
          </Form>}
          {showThankyou && 
          <p>Thank you for donating! Please check your email for an invoice.</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!showThankyou && <Button variant="primary" onClick={handleCloseAndDonate}>
            Save Changes
          </Button>
          }
        </Modal.Footer>
      </Modal>

      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <button className='donate-button' onClick={handleShow}>
        Donate
      </button>
    </div>
  );
};

export default ChatbotPage;
