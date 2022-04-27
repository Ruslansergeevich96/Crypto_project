import { makeAutoObservable } from "mobx";

export default class TrackingPortfolios {
    constructor() {
        this._portfoliosName = [
            {id: 1, name: 'Portfolios1', price: 1000, },
            {id: 2, name: 'Portfolios2', price: 2000, },
            {id: 3, name: 'Portfolios3', price: 3000, },
        ]
        makeAutoObservable(this)
    }

    setPortfoliosName(portfoliosName) {
        this._portfoliosName = portfoliosName
    }

    get portfoliosName () {
        return this._portfoliosName
    }
}