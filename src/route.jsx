import Home from "./views/Home.jsx";
import Admin from "./views/Admin.jsx";
import ChangePassword from './views/ChangePass.jsx';
import UserPage from "./views/UserPage/UserPage.jsx";
import ProfessorsPage from "./views/ProfessorsPage/ProfessorsPage.jsx";
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
        path: '/prefessors',
        name:"Professors",
        component: ProfessorsPage,
        rtlName: "اساتید",
        icon: "",
        layout: "/admin"
    },

]

export default routes;