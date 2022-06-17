import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Context } from '..';
import { fetchCryptocurrencies } from '../http/cryptoAPI';
import CryptocurrenciesList from '../components/CryptocurrenciesList';


const Cryptocurrencies = observer(() => {
  const {cryptoitem} = useContext(Context)

  useEffect(() => {
    fetchCryptocurrencies().then(data => cryptocurrencies.setCryptocurrencies(data))
  }, [])

  return (
    <Container>
        <Row className='mt-2'>
            <Col md = {3}>
              {/* <Cryptocurrencies /> */}
              Портфель
            </Col>
            <Col md = {9}>
              Kрипта
              <CryptocurrenciesList/>
            </Col>
        </Row>
    </Container>
  );
});

export default Cryptocurrencies;