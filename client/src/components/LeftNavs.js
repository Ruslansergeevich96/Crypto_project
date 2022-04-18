// FIXME: test
import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';
import { CRYPTOCURRENCIES_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite';

const LeftNavs = observer(() => {
    const {user} = useContext(Context)
    return (
        <Container>
            {user.isAuth ?
            <Nav defaultActiveKey={CRYPTOCURRENCIES_ROUTE} className="flex-column">
                <Nav.Link href={CRYPTOCURRENCIES_ROUTE}>Список Криптовалют</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
            :
            <Nav defaultActiveKey={CRYPTOCURRENCIES_ROUTE} className="flex-column">
                <Nav.Link href={CRYPTOCURRENCIES_ROUTE}>Список Криптовалют</Nav.Link>
            </Nav>
            }
        </Container>  
        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <NavLink style={{color: 'white'}} to={CRYPTOCURRENCIES_ROUTE}>Cryptoforest</NavLink>
        //         {user.isAuth ?
        //             <Nav className="ml-auto" style={{color: 'white'}}>
        //                 {/* <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#features">Features</Nav.Link>
        //                 <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        //                 <Button variant={"outline-light"}>Админ панель</Button>
        //                 <Button variant={"outline-light"} className="ms-2">Войти</Button>
        //             </Nav>
        //             :
        //             <Nav className="ml-auto" style={{color: 'white'}}>
        //                 <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        //             </Nav>   
        //         }
        //     </Container>
        // </Navbar>
    );
})

export default LeftNavs;