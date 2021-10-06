import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/user/Layout.vue'),
    children: [
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/user/Product.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/user/Cart.vue'),
      },
      {
        path: 'userinfo',
        name: 'userinfo',
        component: () => import('../views/user/UserInfo.vue'),
      },
      {
        path: 'orderconfirmation/:orderId',
        name: 'orderconfirmation',
        component: () => import('../views/user/OrderConfirmation.vue'),
      },
      {
        path: 'ordersearch',
        name: 'ordersearch',
        component: () => import('../views/user/OrderSearch.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/user/Products.vue'),
      },
      {
        path: '/myfavorite',
        name: 'myfavorite',
        component: () => import('../views/user/MyFavorite.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/admin/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
