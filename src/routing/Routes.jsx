import Dashboard from 'src/pages/Dashboard'
import Categories from 'src/pages/Categories'
import Customer from 'src/pages/Customer'
import CarManager from 'src/pages/CarManager'
import OrderHistory from 'src/pages/OrderHistory'

export const appRoutes = [
    {
        name: "Main Dashboard",
        layout: "/app",
        path: "/",
        icon: "src/assets/1.png",
        component: Dashboard
    },
    {
        name: "Customer",
        layout: "/app",
        path: "/customer",
        icon: "src/assets/2.png",
        component: Customer
    },
    {
        name: "Categories",
        layout: "/app",
        path: "/categories",
        icon: "src/assets/3.png",
        component: Categories
    },
    {
        name: "Car Manager",
        layout: "/app",
        path: "/manager",
        icon: "src/assets/4.png",
        component: CarManager
    },
    {
        name: "Orders history",
        layout: "/app",
        path: "/history",
        icon: "src/assets/5.png",
        component: OrderHistory
    },
]

