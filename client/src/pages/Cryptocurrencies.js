import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
// import Form from 'react-bootstrap/esm/Form';
// import Button from 'react-bootstrap/esm/Button';
import { Context } from '..';
import axios from 'axios'
import { combineTableNames } from 'sequelize/types/utils';


const Cryptocurrencies = observer(() => {
  const {cryptoitem} = useContext(Context)
  const [coins, setCoins] = useState ([]);
  const [search, setSearch] = useState('');

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

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className='cryptocurrencies'>
      <div className='coin-search'>
        <h1 className='coin-text'> Search a currancy</h1>
        <form>
          <input type='text' placeholder='Search' 
          className='coin-input' onChange={handleChange}/>
        </form>
      </div>
      
    </div>

    //<Form className="d-flex">
    //  <Form.Control
    //   type="search"
    //   placeholder="Search"
    //   className="me-2"
    //   aria-label="Search"
    //  />
    //    <Button variant="outline-success">Search</Button>
    //</Form>
  );
});

export default Cryptocurrencies;