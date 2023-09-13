const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: "/",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/index.vue"), meta: {
          groupParent: "components",
        },
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
        meta: {
          groupParent: "Product"
        }
      },
    ],
  },
];

export default routes;
