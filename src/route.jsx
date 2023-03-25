import Home from "./views/Home.jsx";
import Admin from "./views/Admin.jsx";
import ChangePassword from './views/ChangePass.jsx';
var routes = [
    
    {
        path: '/change',
        name:"ChangePassword",
        component: ChangePassword,
        rtlName: "تغییر رمز",
        icon: "",
        layout: "/admin"
    },
]

export default routes;