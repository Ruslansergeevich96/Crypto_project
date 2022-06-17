import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const createCryptocurrencies = async (type) => {
    const {data} = await $authHost.post('api/cryptocurrencies', type)
    return data
}

export const fetchCryptocurrencies = async () => {
    const {data} = await $host.get('api/cryptocurrencies')
    return data
}
