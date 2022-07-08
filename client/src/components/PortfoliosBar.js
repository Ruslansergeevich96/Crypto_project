import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/esm/ListGroup"
import { observer } from "mobx-react-lite";

const PortfoliosBar = observer(() => {
    const {portfolio} = useContext(Context)
    return (
        <ListGroup>
            {portfolio.allPortfolios.map(type =>
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active = {type.id === portfolio.selectedPortfolios.id}
                    onClick={() => portfolio.setSelectedPortfolios (type)}
                    key = {type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default PortfoliosBar;