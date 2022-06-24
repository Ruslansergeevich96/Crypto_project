import { makeAutoObservable } from "mobx";

export default class TrackingPortfolios {
    constructor() {
        this._allPortfolios = [
            {id: 1, name: 'Portfolios1', price: 1000, },
            {id: 2, name: 'Portfolios2', price: 2000, },
            {id: 3, name: 'Portfolios3', price: 3000, },
            {id: 4, name: 'Rabotaet', price: 3000, },
        ]
        makeAutoObservable(this)
    }

    SetAllPortfolios(allPortfolios) {
        this._allPortfolios = allPortfolios
    }

    get allPortfolios() {
        return this._allPortfolios
    }
}