import Admin from "./pages/Admin"
import Tracking from "./pages/Tracking_cryptocurrencies"
import Cryptocurrencies from "./pages/Cryptocurrencies"
import Auth from "./pages/Auth"

import { ADMIN_ROUTE, CRYPTOCURRENCIES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TRACKING_CRYPTOCURRENCIES_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: TRACKING_CRYPTOCURRENCIES_ROUTE,
        Component: Tracking
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CRYPTOCURRENCIES_ROUTE,//+ '/:id'
        Component: Cryptocurrencies
    },
]
