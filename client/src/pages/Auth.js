import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"



const Auth = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 800}} className='p-5'>
        <Form>
          AUTH PAGE
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;