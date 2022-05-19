import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, CRYPTOCURRENCIES_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';




const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click =  async () => {
    try {
        let data;
        if (isLogin) {
            data = await login(email, password);
        } else {
            data = await registration(email, password);
        }
        user.setUser(user)
        user.setAuth(true)
        history.push(CRYPTOCURRENCIES_ROUTE)
    } catch (e) {
        alert(e.response.data.message)
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 400}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
            <Form.Control 
              className='mt-4'
              placeholder='Введите ваш email...'
              value={email}
              onChange = {e => setEmail(e.target.value)}
            />
            <Form.Control 
              className='mt-4'
              placeholder='Введите ваш пароль...'
              value={password}
              onChange = {e => setPassword(e.target.value)}
              type = "password"
            />
            <Row className="d-flex justify-content-between mt-4 pl-3 pr-3">
              {isLogin ?
                <div>
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div> 
                :
                <div>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div> 
              }
              <Button 
                variant={'outline-success'}
                onClick={click}
              >
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;