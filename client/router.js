/**
 *Router
 */

import Index from './index';

const routes = [
    {
        path: '/',
        component: Index,
        exact: true,
    },
    // {
    //     path: '/explore',
    //     exact: true,
    //     component: Explore
    // },
    // {
    //     path: '/user',
    //     exact: true,
    //     component: User
    // },
    // {
    //     path: '/mysites',
    //     exact: true,
    //     component: MySites
    // },
    // {
    //     path: '/account/register',
    //     exact: true,
    //     component: Register
    // },
    // {
    //     path: '/account/login',
    //     exact: true,
    //     component: Login
    // },
    // {
    //     path: '/email/verify/:token',
    //     exact: true,
    //     component: VerifyEmail
    // },
    // {
    //     component: NoMatch
    // },
];

export default routes;