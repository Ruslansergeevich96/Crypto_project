import { makeAutoObservable } from "mobx";

export default class Portfolios {
    constructor() {
        this._allPortfolios = [
            {id: 1, name: 'Portfolios1', price: 1000, },
            {id: 2, name: 'Portfolios2', price: 2000, },
            {id: 3, name: 'Portfolios3', price: 3000, },
            {id: 4, name: 'Rabotaet', price: 3000, },
        ]
        this._portfoliosCrypto = [
            {id: 1, name: 'eth', price: 1000, img: `https://sun9-30.userapi.com/impf/kfPInz2TBoFg_PwsJn3iOsjnle1KfWHqsTMrSg/ZOf02hi_fAc.jpg?size=640x960&quality=95&sign=c177629f2450dac4cea0c1289e5b8b80&type=album`},
            {id: 2, name: 'btrq', price: 2000, img: `https://sun9-14.userapi.com/impf/8EhRpy8hN87qrA0qJ4pu2GxG0bBj67N4n822aQ/13jDHgpIahs.jpg?size=992x496&quality=95&sign=a3314f7588162fadddf4965e6e8f3fdb&type=album`},
            {id: 3, name: 'ShitCoin', price: 3000, img: `https://sun9-24.userapi.com/impf/7se87bvBdlJmRmiZGZYQYq3wErx4yObTgdE_nQ/kai9uLSfnE0.jpg?size=1200x796&quality=95&sign=5abd6ddbe7c3e32c757760a08096a94e&type=album`},
            {id: 4, name: 'testcrypto', price: 1000, img: `https://sun9-30.userapi.com/impf/kfPInz2TBoFg_PwsJn3iOsjnle1KfWHqsTMrSg/ZOf02hi_fAc.jpg?size=640x960&quality=95&sign=c177629f2450dac4cea0c1289e5b8b80&type=album`},
            {id: 5, name: 'LTS', price: 2000, img: `https://sun9-14.userapi.com/impf/8EhRpy8hN87qrA0qJ4pu2GxG0bBj67N4n822aQ/13jDHgpIahs.jpg?size=992x496&quality=95&sign=a3314f7588162fadddf4965e6e8f3fdb&type=album`},
            {id: 6, name: 'Doge', price: 3000, img: `https://sun9-24.userapi.com/impf/7se87bvBdlJmRmiZGZYQYq3wErx4yObTgdE_nQ/kai9uLSfnE0.jpg?size=1200x796&quality=95&sign=5abd6ddbe7c3e32c757760a08096a94e&type=album`},
        ]

        this._selectedPortfolios = {}

        makeAutoObservable(this)
    }

    setAllPortfolios(allPortfolios) {
        this._allPortfolios = allPortfolios
    }

    setSelectedPortfolios(portfolios) {
        this._selectedPortfolios = portfolios
    }

    get allPortfolios() {
        return this._allPortfolios
    }
    get selectedPortfolios() {
        return this._selectedPortfolios
    }
}