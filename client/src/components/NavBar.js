// FIXME: test
import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import NavLink from 'react-bootstrap/esm/NavLink';
import { CRYPTOCURRENCIES_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={CRYPTOCURRENCIES_ROUTE}>Cryptoforest</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button variant={"outline-light"}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>   
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;