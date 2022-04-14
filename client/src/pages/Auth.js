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
    <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}

export default Auth;