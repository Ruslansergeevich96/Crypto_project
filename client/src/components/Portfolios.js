import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/esm/ListGroup"
import { observer } from "mobx-react-lite";

const Portfolios = observer(() => {
    const {portfolios} = useContext(Context)
    return (
        <ListGroup>
            <ListGroup.Item>портфель_1</ListGroup.Item>
            <ListGroup.Item>портфель_2</ListGroup.Item>
            <ListGroup.Item>портфель_3</ListGroup.Item>
            <ListGroup.Item>портфель_4</ListGroup.Item>
            <ListGroup.Item>портфель_5</ListGroup.Item>
            <ListGroup.Item>портфель_6</ListGroup.Item>
            <ListGroup.Item>портфель_7</ListGroup.Item>
            <ListGroup.Item>портфель_8</ListGroup.Item>
            <ListGroup.Item>портфель_9</ListGroup.Item>
            <ListGroup.Item>портфель_10</ListGroup.Item>
        </ListGroup>
    );
});

export default Portfolios;