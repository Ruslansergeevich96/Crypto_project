import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { CRYPTOCURRENCIES_ROUTE, TRACKING_CRYPTOCURRENCIES_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Toast from 'react-bootstrap/Toast'

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
            <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Привет</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Я думаю тебе стоит авторизоваться на сайте</Toast.Body>
          </Toast>
            }
        </Container> 
    );
})

export default LeftNavs;