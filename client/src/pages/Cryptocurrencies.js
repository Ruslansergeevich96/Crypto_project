import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Context } from '..';
import axios from 'axios'


const Cryptocurrencies = observer(() => {
  const {cryptoitem} = useContext(Context)
  const [coins, setCoins] = useState ([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='cryptocurrencies'
      <div className='coin-search'>
        <h1 className='coin-text'> Search a currancy</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input'/>
        </form>
      </div>
    </div>

    <Container>
        <Row className='mt-2'>
            <Col md = {3}>
              {/* <Cryptocurrencies /> */}
              Страница крипты 
            </Col>
            <Col md = {9}>
              Тут вся крипта 
              Тут вся крипта
              Тут вся крипта
            </Col>
        </Row>
    </Container>
  );
});

export default Cryptocurrencies;