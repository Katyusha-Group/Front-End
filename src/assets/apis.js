export const domain = "http://37.32.13.62";
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
  getPrice: `${domain}/shop/get-prices/`,
  coursegroups: `${domain}/coursegroups/`,
  accounts: {
    activationConfirm: `${domain}/accounts/activation-confirm/`,
    changepassword: `${domain}/accounts/changepassword/`,
    resetPassword: `${domain}/accounts/reset-password/`,
    login: `${domain}/accounts/login/`,
    signup: `${domain}/accounts/signup/`,
    justProfile: `${domain}/accounts/profile/`,
    profile: {
      updateProfile: `${domain}/accounts/profile/update/`,
    },
    wallet: {
      seeWallet: `${domain}/accounts/wallet/see_wallet`,
    }
  },
  departments: `${domain}/departments/`,
  carts: `${domain}/shop/carts/`,
  timeline: {
    teachers: `${domain}/timeline/teachers/`,
    courses: `${domain}/timeline/courses/`,
  },
  departmentsAll: {
    names: `${domain}/departments/names`,
  },
  allcoursesBasedDepartment: `${domain}/allcourses-based-department/`,
  orders: `${domain}/shop/orders/`,
  notification: `${domain}/notification/`,
  profiles: {
    myprofile: `${domain}/profiles/`,
    myusername: `${domain}/profiles/my-username/`,
    all: `${domain}/profiles/`,
    following: `${domain}/profiles//following/`,
    followers: `${domain}/profiles//followers/`,
    followersyoufollow: `${domain}/profiles//followers-you-follow/`,
    follow: `${domain}/profiles/follow/`,
    unfollow: `${domain}/profiles/unfollow/`,
    me: `${domain}/profiles/me/`,
    all: `${domain}/profiles/?search=`,
  },

  tweets:{
    tweets: `${domain}/twittes/`,
  }
  ,
  reports: {
    tweets: `${domain}/report-twitte/`
  },
  
  tweetChart:{
    tweetChart: `${domain}/twitte-charts/`,
    lastWeekTweets: `${domain}/twitte-charts/last-week-tweets/`,
    lastWeekUsers: `${domain}/twitte-charts/last-week-users/`,
  },
  shop:{
    carts: {
      addToCart: `${domain}/shop/carts/add-to-cart/`,
      removeItem: `${domain}/shop/carts/remove-item/`,
      updateCart: `${domain}/shop/carts/update-cart/`,
    },
  }
};


