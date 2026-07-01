import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { ShopPage } from "../pages/ShopPage/ShopPage.jsx";
import { CartPage } from "../pages/CartPage/CartPage.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { NotFound } from "../NotFound.jsx";

export const routes = createBrowserRouter([
    {
     path: '/',
     element: <App />,
     errorElement: <NotFound />,
     children: [{
        index: true,
        element: <HomePage />
     },
     {
        path: 'shop',
        element: <ShopPage />
     },
     {
        path: 'cart',
        element: <CartPage />
     }
    ]
    },
])
