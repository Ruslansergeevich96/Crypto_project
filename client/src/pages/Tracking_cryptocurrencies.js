import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Context } from '..';


const Tracking_cryptocurrencies = observer(() => {
  const {tracking} = useContext(Context)

  // useEffect(() => {
  //   fetchPortfolios().then(data => tracking.setPortfolios(data))
  // }, [])

  return (
    <Container>
        <Row className='mt-2'>
            <Col md = {3}>
              {/* <Portfolios /> */}
              Портфель_1
              портфель_2
              портфель_3
              Портфель_4
              портфель_5
              портфель_6
            </Col>
            <Col md = {9}>
              крипта_1
              крипта_2
              крипта_3
              крипта_4
              крипта_5
              крипта_6
            </Col>
        </Row>
    </Container>
  );
});

export default Tracking_cryptocurrencies;
