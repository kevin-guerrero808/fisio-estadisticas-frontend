import { GeneralLayout } from "../Layout/GeneralLayout/GeneralLayout";
import EmptyLayout from "../Layout/EmptyLayout";

import Login from "../pages/Login";
// import { Contact } from "../pages/Contact";
// import { Home } from "../pages/Home";
// import { NotFound } from "../pages/NotFound/NotFound";
import Indicators from "../pages/Admin/Indicators/Indicators"
import CreateUser from "../pages/Admin/Users/CreateUser/CreateUser"
import ListUsers from "../pages/Admin/Users/ListUsers/ListUsers";
import Form from "../pages/Form/Form";
import CreateMenu from "../pages/Admin/Menu/CreateMenu";

const AdminRoutes = [
    {
        path: '/',
        component: Indicators,
        layout: GeneralLayout
    },
    {
        path: 'admin/users/list',
        component: ListUsers,
        layout: GeneralLayout
    },
    {
        path: 'admin/users/create',
        component: CreateUser,
        layout: GeneralLayout
    },
    {
        path: 'admin/users/edit/:id',
        component: CreateUser,
        layout: GeneralLayout
    },
    {
        path: '/admin/form',
        component: Form,
        layout: GeneralLayout
    },
    {
        path: '/admin/menu/create',
        component: CreateMenu,
        layout: GeneralLayout
    }
]

const GeneralRoutes = [
    {
        path: '/form',
        component: Form,
        layout: GeneralLayout
    },
    {
        path: '/login',
        component: Login,
        layout: EmptyLayout
    }
];

const allRoutesProject = [...GeneralRoutes, ...AdminRoutes];

export default allRoutesProject;