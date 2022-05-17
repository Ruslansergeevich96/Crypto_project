import { $authHost, $host } from "./index";

export const registrtation = async (email, passsword) => {
    const response = await $host.post('api/auth/registration', {email, passsword, role: 'ADMIN'})
    return response
}

export const login = async (email, passsword) => {
    const response = await $host.post('api/auth/login', {email, passsword})
    return response
}

export const check = async () => {
    const response = await $host.post('api/auth/registration', {email, passsword, role: 'ADMIN'})
    return response
}