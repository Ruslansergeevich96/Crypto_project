import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CryptoItem from "./CryptocurrenciesItem";

const CryptocurrenciesList = observer(() => {
    const {cryptoitem} = useContext(Context)

    return (
        <Row className="d-flex">
            {cryptoitem.devices.map(cryptoitem =>
                <CryptoItem key={cryptoitem.id} cryptoitem={cryptoitem}/>
            )}
        </Row>
    );
});

export default CryptocurrenciesList;