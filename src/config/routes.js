import { AppLayout } from "../Layout/Layout";
import { Admin } from "../pages/admin/Admin";
import { SignIn } from "../pages/admin/SignIn";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound/NotFound";

const AdminRoutes = [
    {
        path: '/admin',
        component: Indicator,
        layout: AppLayout
    },
    {
        path: 'admin/users/create',
        component: CreateUser,
        layout: AppLayout
    },
    {
        path: '/admin/indicators',
        component: Indicator,
        layout: AppLayout
    }
]

const GeneralRoutes = [
    {
        path: '/',
        component: DashBoard,
        layout: AppLayout
    }
];

const allRoutesProject = [...GeneralRoutes, ...AdminRoutes];

export default allRoutesProject;