import Home from "../components/Home.vue";
import Login from "../Pages/Auth/Login.vue";
export const routes = [
    {
        path: '/',
        component: Home,
        title: "Меню",
        isAuth: false
    },
    {
        path: '/menu/edit',
        component: Home,
        title: "Редактировать меню",
        isAuth: true
    },
    {
        path: '/login',
        component: Login,
        title: "Войти",
        isAuth: false
    },
]

