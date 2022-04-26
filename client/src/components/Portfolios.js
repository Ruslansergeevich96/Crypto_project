import { observable } from "mobx";
import React, { useContext } from "react";

const Portfolios = observable(() => {
    const {} = useContext()
    return (
        <div>
            Portfolios
        </div>
    );
});

export default Portfolios;