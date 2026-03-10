import { createWebHistory, createRouter } from 'vue-router';
import ContactBook from '@/views/ContactBook.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/',
        name: 'contactbook',
        component: ContactBook,
        meta: { requiresAuth: true } 
    },
    {
        path: '/contacts/:id',
        name: 'contact.edit',
        component: () => import('@/views/ContactEdit.vue'),
        props: true, 
        meta: { requiresAuth: true }
    },
    {
        path: '/contacts/add',
        name: 'contact.add',
        component: () => import('@/views/ContactAdd.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (to.meta.requiresAuth && !isLoggedIn) {
        next({ name: "login" }); 
    } else {
        next(); 
    }
});

export default router;