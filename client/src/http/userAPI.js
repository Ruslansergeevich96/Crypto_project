import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (email, passsword) => {
    const {data} = await $host.post('api/user/registration', {email, passsword, role: 'ADMIN'})
    return jwt_decode(data.token)
}

export const login = async (email, passsword) => {
    const {data} = await $host.post('api/user/login', {email, passsword})
    return jwt_decode(data.token)
}

export const check = async () => {
    const response = await $host.post('api/auth/registration',)
    return response
}