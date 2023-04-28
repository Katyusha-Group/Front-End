import Home from "./views/Home.jsx";
import Admin from "./views/Admin.jsx";
import ChangePassword from './views/ChangePass.jsx';
import UserPage from "./views/UserPage/UserPage.jsx";
import CoursesPanel from "./views/CoursesPanel/CoursesPanel.jsx"
import aboutUs from "./views/aboutUs/AboutUs.jsx";
var routes = [
    
    {
        path: '/change',
        name:"ChangePassword",
        component: ChangePassword,
        rtlName: "تغییر رمز",
        icon: "",
        layout: "/admin"
    },
    {
        path: '/page',
        name:"UserPage",
        component: UserPage,
        rtlName: "صفحه کاربری",
        icon: "",
        layout: "/admin"
    },
    {
        path: '/Courses',
        name:"CoursesPanel",
        component: CoursesPanel,
        rtlName: "پنل دروس",
        icon: "",
        layout: "/admin"
    },
    {
        path: '/aboutUs',
        name:"AboutUs",
        component: aboutUs,
        rtlName: "درباره ما",
        icon: "",
        layout: "/admin"
    },
]

export default routes;