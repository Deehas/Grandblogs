import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "BlogsView",
    component: Blogs,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/login",
    name: "LoginView",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "RegisterView",
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-Password",
    name: "ForgotPasswordView",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
    },
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: Profile,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/admin",
    name: "AdminView",
    component: Admin,
    meta: {
      title: "Admin",
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: "CreatePost",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | GrandBlog`;
  next();
});

export default router;
