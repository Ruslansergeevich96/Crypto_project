import { observable } from "mobx";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/esm/ListGroup"

const Portfolios = observable(() => {
    const {} = useContext(Context)
    return (
        <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    );
    <div>
            Portfolios
    </div>
});

export default Portfolios;