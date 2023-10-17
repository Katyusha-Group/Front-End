export const domain = "https://www.katyushaiust.ir";
export const apis = {
  login: `${domain}/user/login/`,
  user: {
    list: `${domain}/user/list/`,
    delete: `${domain}/user/delete/`,
    create: `${domain}/user/create/`,
  },
  courses: {
    id: `${domain}/courses/`,
    my_courses: `${domain}/courses/my_courses/`,
  },
  courseCartOrderInfo: `${domain}/course-cart-order-info/`,
  getPrice: `${domain}/get-price/`,
  coursegroups: `${domain}/coursegroups/`,
  accounts:{
    activationConfirm: `${domain}/accounts/activation-confirm/`,
    changepassword: `${domain}/accounts/changepassword/`,
    resetPassword: `${domain}/accounts/reset-password/`,
    login: `${domain}/accounts/login/`,
  },
  departments: `${domain}/departments/`,
  carts: `${domain}/carts/`,
  timeline:{
    teachers:`${domain}/timeline/teachers/`,
    courses:`${domain}/timeline/courses/`,
  },
  departmentsAll: {
    name: `${domain}/departments/name/`,
  },
  allcoursesBasedDepartment: `${domain}/allcourses-based-department/`,
};
