import React from 'react';
import useLocation from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row'
import NavLink from 'react-bootstrap/esm/NavLink';
import { REGISTRATION_ROUTE } from '../utils/consts';




const Auth = () => {
  const location = useLocation()
  console.log(location)

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 400}} className='p-5'>
        <h2 className='m-auto'>Авторизация</h2>
        <Form className='d-flex flex-column'>
            <Form.Control 
              className='mt-4'
              placeholder='Введите ваш email...'
            />
            <Form.Control 
              className='mt-4'
              placeholder='Введите ваш пароль...'
            />
            <Row className="d-flex justify-content-between mt-4 pl-3 pr-3">
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div> 
              <Button 
                variant={'outline-success'}
              >
                Войти
              </Button>
            </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;