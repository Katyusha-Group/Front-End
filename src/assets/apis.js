export const domain = "http://84.32.10.112";
export const chatDomain = "ws://84.32.10.112";
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
    },
    checkIsAdmin: `${domain}/accounts/check-is-admin/`
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
  notification: {
    notifications: `${domain}/notifications/`,
    count: `${domain}/notifications/unread-count`,
  },
  profiles: {
    myprofile: `${domain}/profiles/my-profile/`,
    myusername: `${domain}/profiles/my-username/`,
    all: `${domain}/profiles/`,
    following: `${domain}/profiles//following/`,
    followers: `${domain}/profiles//followers/`,
    followersyoufollow: `${domain}/profiles//followers-you-follow/`,
    follow: `${domain}/profiles/follow/`,
    unfollow: `${domain}/profiles/unfollow/`,
    me: `${domain}/profiles/me/`,
    all: `${domain}/profiles/?search=`,
    updateProfile: `${domain}/profiles/update-profile/`,
    view_profile: `${domain}/profiles/`
  },

  tweets: {
    tweets: `${domain}/twittes/`,
    twittedBy: `${domain}/twittes/?twitted_by=`,
    likedBy: `${domain}/twittes/?liked_by=`,
    repliedBy: `${domain}/twittes/?replied_by=`,
    manageTweets: `${domain}/manage-twittes/`,
  },
  reports: {
    tweets: `${domain}/report-twitte/`,
    manage: `${domain}/manage-reported-twittes/`,
  },

  tweetChart: {
    tweetChart: `${domain}/twitte-charts/`,
    lastWeekTweets: `${domain}/accounts/user-charts/last-week-users/`,
    lastWeekUsers: `${domain}/twitte-charts/last-week-tweets/`,
  },
  shop: {
    carts: {
      addToCart: `${domain}/shop/carts/add-to-cart/`,
      removeItem: `${domain}/shop/carts/remove-item/`,
      updateCart: `${domain}/shop/carts/update-cart/`,
    },
  },
  reportTwitte: {
    reportTwitte: `${domain}/report-twitte/`,
  },
  forYouTwittes: {
    forYouTwittes: `${domain}/for-you-twittes/`,
  },
  chat: {
    chat: `${chatDomain}/ws/chat/`,
    chatWith: `${domain}/chat/chat-with/`,
  }
};
