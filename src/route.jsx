import Admin from "./views/Admin.jsx";
import ChangePassword from './views/ChangePass.jsx';
import UserPage from "./views/UserPage/UserPage.jsx";
import CoursesPanel from "./views/CoursesPanel/CoursesPanel.jsx"
import AboutUs from "./views/aboutUs/AboutUs.jsx";
import Shopping from "./views/Shopping/Shopping.jsx";
import UserProfile from "./views/UserPorfile/UserProfile.jsx";
var routes = [
    {
        path: '/page',
        name:"UserPage",
        component: UserPage,
        rtlName: "صفحه کاربری",
        icon: 'icon-bank',
        layout: "/home"
    },
    {
        path: '/CoursesPanel',
        name:"CoursesPanel",
        component: CoursesPanel,
        rtlName: "پنل دروس",
        icon: "icon-paper",
        layout: ""
    }
    ,{
        path: '/shopping',
        name:"Shopping",
        component: Shopping,
        rtlName: "سبد خرید",
        icon: "icon-basket-simple",
        layout: ""
    },
    {
        path: '/user',
        name:"profile",
        component: UserProfile,
        rtlName: " پروفایل",
        icon: "icon-single-02",
        layout: ""
    }
    
    ,
    {
        path: '/aboutUs',
        name:"AboutUs",
        component: AboutUs,
        rtlName: "درباره ما",
        icon: "icon-send",
        layout: ""
    }
]

export default routes;