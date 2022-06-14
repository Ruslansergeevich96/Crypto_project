// FIXME: test
import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { CRYPTOCURRENCIES_ROUTE, TRACKING_CRYPTOCURRENCIES_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const LeftNavs = observer(() => {
    const {user} = useContext(Context)
    return (
        <Container>
            {user.isAuth ?
            <Nav defaultActiveKey={CRYPTOCURRENCIES_ROUTE} className="flex-column">
                <Nav.Link href={CRYPTOCURRENCIES_ROUTE}>Список Криптовалют</Nav.Link>
                <Nav.Link href={TRACKING_CRYPTOCURRENCIES_ROUTE}>Отслеживание криптовалют</Nav.Link>
                <Nav.Link eventKey="link-1">Мои портфели (test)</Nav.Link>
                <Nav.Link eventKey="link-2">Наши контакты (test)</Nav.Link>
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

import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const sendSubmit = () => {
    navigate.push("/quiz");
  };
  return (
    <Container className="content">
      <h1 id="quiz-title">Phishing Quiz</h1>
      <h2 class="question-text">
        Do you think you can beat our phishing quiz?
      </h2>
      <p className="description">
        {" "}
        There are many social engineering attacks on internet however not all of
        them are good enough to trick users. However there are some scams that
        are identical to original websites and usually most of the users get
        tricked by them.
      </p>
      <p className="description">
        Do you think you are smart enough to handle these attacks?
      </p>
      <p className="description">
        We are challenging you with our phishing quiz which will show you
        examples of really good social engineering attacks on internet. We hope
        you can pass!
      </p>
      <p>""</p>
      <Button
        className="button"
        variant="contained"
        color="primary"
        size="large"
        onClick={sendSubmit}
      >
        Start Quiz
      </Button>
    </Container>
  );
};

export default Home;