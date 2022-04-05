import { makeAutoObservable } from "mobx";

export default class CryptocurrenciesStore {
    constructor() {
        this._cryptocurrenciestypes = [
            {id: 1, name: 'eth'},
            {id: 2, name: 'btrq'},
            {id: 1, name: 'ShitCoin'},
        ]
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get isAuth () {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}