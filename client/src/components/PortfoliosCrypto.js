import { observer } from "mobx-react-lite";
import React from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";

const PortfoliosCrypto = observer (() => {
    const {portfolio} = useContext(Context)
    return (
        <Row className="d-flex">
            {portfolio}
        </Row>
    );
});

export default PortfoliosCrypto;