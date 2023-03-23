import { AppLayout } from "../Layout/Layout";
import { SignIn } from "../pages/admin/SignIn";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { Indicators } from "../pages/Admin/Indicators/Indicators"
import { CreateUser} from "../pages/Admin/Users/CreateUser/CreateUser"

const AdminRoutes = [
    {
        path: '/admin',
        component: Indicators,
        layout: AppLayout
    },
    {
        path: 'admin/users/create',
        component: CreateUser,
        layout: AppLayout
    },
    {
        path: '/admin/indicators',
        component: Indicators,
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