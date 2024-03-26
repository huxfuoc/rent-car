// routes.js
import Dashboard from 'src/pages/Dashboard';
import Categories from 'src/pages/Categories';
import Customer from 'src/pages/Customer';
import CarManager from 'src/pages/CarManager';
import OrderHistory from 'src/pages/OrderHistory';


export const appRoutes = [
    {
        name: "mainDashboard",
        layout: "/app",
        path: "/",
        icon: "src/assets/1.png",
        component: Dashboard
    },
    {
        name: "customer",
        layout: "/app",
        path: "/customer",
        icon: "src/assets/2.png",
        component: Customer
    },
    {
        name: "categories",
        layout: "/app",
        path: "/categories",
        icon: "src/assets/3.png",
        component: Categories
    },
    {
        name: "carManager",
        layout: "/app",
        path: "/manager",
        icon: "src/assets/4.png",
        component: CarManager
    },
    {
        name: "ordersHistory",
        layout: "/app",
        path: "/history",
        icon: "src/assets/5.png",
        component: OrderHistory
    },
];
