import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from "../views/home"
import MovieList from "../views/MovieList";
import CelebrityList from "../views/CelebrityList";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/logout',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/MovieList',
          name: 'MovieList',
          component: MovieList
        },
        {
          path: '/CelebrityList',
          name: 'CelebrityList',
          component: CelebrityList
        },
      ]
    },
  ]
})
