import Home from "./views/Home.jsx";
import Admin from "./views/Admin.jsx";
import ChangePassword from './views/ChangePass.jsx';
import UserPage from "./views/UserPage/UserPage.jsx";
import CoursesPanel from "./views/CoursesPanel/CoursesPanel.jsx"
import AboutUs from "./views/aboutUs/AboutUs.jsx";
var routes = [
    
    // {
    //     path: '/change',
    //     name:"ChangePassword",
    //     component: ChangePassword,
    //     rtlName: "تغییر رمز",
    //     icon: "icon-key-25",
    //     layout: "/admin"
    // },
    {
        path: '/page',
        name:"UserPage",
        component: UserPage,
        rtlName: "صفحه کاربری",
        icon: 'icon-bank',
        layout: "/admin"
    },
    {
        path: '/Courses',
        name:"CoursesPanel",
        component: CoursesPanel,
        rtlName: "پنل دروس",
        icon: "icon-paper",
        layout: "/admin"
    }
    ,{
        path: '/aboutUs',
        name:"AboutUs",
        component: AboutUs,
        rtlName: "سبد خرید",
        icon: "icon-basket-simple",
        layout: "/admin"
    },
    {
        path: '/aboutUs',
        name:"AboutUs",
        component: AboutUs,
        rtlName: " پروفایل",
        icon: "icon-single-02",
        layout: "/admin"
    }
    ,
    {
        path: '/aboutUs',
        name:"AboutUs",
        component: AboutUs,
        rtlName: " تنظیمات",
        icon: "icon-settings-gear-63",
        layout: "/admin"
    }
    ,
    {
        path: '/aboutUs',
        name:"AboutUs",
        component: AboutUs,
        rtlName: "درباره ما",
        // icon: "icon-alert-circle-exc",
        icon: "icon-send",
        layout: "/admin"
    },{
        path: '/aboutUs',
        name:"AboutUs",
        component: AboutUs,
        rtlName: "خروج",
        icon: "icon-button-power",
        layout: "/admin"
    }
    
   
]

export default routes;