import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer');

// Views CRM
const Clients = () => import('@/views/base/crm/Clients/Clients');
const CreateClients = () => import('@/views/base/crm/Clients/CreateClient');
const EditClient = () => import('@/views/base/crm/Clients/EditClient');
const Client = () => import('@/views/base/crm/Clients/Client');
// Views CRM sales
const Sale = () => import('@/views/base/crm/sales/Sale');
const Sales = () => import('@/views/base/crm/sales/Sales');
const CreateSale = () => import('@/views/base/crm/sales/CreateSale');
const EditSale = () => import('@/views/base/crm/sales/EditSale');

const Dashboard = () => import('@/views/Dashboard');

const Page404 = () => import('@/views/pages/Page404');
const Login = () => import('@/views/pages/Login');
const Register = () => import('@/views/pages/Register');

// Users
const Users = () => import('@/views/users/Users');
const User = () => import('@/views/users/User');
const EditUser = () => import('@/views/users/EditUser');

Vue.use(Router);

export default new Router({
    mode: 'history',    // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({y: 0}),
    routes: configRoutes()
});

function configRoutes() {
    return [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Inicio',
            component: TheContainer,
            children: [
                {
                    path: 'crm',
                    redirect: 'crm/sales',
                    name: 'CRM',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'sales',
                            meta: {label: 'Ventas'},
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '',
                                    component: Sales,
                                },
                                {
                                    path: 'create',
                                    meta: {label: 'Generar venta'},
                                    name: 'Generar venta',
                                    component: CreateSale
                                },
                                {
                                    path: ':id',
                                    meta: {label: 'Detalle de venta'},
                                    name: 'Detalle de venta',
                                    component: Sale,
                                },
                                {
                                    path: ':id/edit',
                                    meta: {label: 'Editar venta'},
                                    name: 'Editar venta',
                                    component: EditSale
                                },
                            ]
                        },
                        {
                            path: 'clients',
                            meta: {label: 'clients'},
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '',
                                    component: Clients,
                                },
                                {
                                    path: 'create',
                                    meta: {label: 'Generar'},
                                    name: 'Generar',
                                    component: CreateClients
                                },
                                {
                                    path: ':id',
                                    meta: {label: 'Cliente'},
                                    name: 'Detalle de cliente',
                                    component: Client,
                                },
                                {
                                    path: ':id/edit',
                                    meta: {label: 'Editar cliente'},
                                    name: 'Editar Cliente',
                                    component: EditClient
                                },
                            ]
                        },
                    ]
                },
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'users',
                    meta: {label: 'Users'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: Users,
                        },
                        {
                            path: ':id',
                            meta: {label: 'User Details'},
                            name: 'User',
                            component: User,
                        },
                        {
                            path: ':id/edit',
                            meta: {label: 'Edit User'},
                            name: 'Edit User',
                            component: EditUser
                        },
                    ]
                }
            ]
        },
        {
            path: '/',
            redirect: '/login',
            name: 'Auth',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register
                },
            ]
        },
        {
            path: '*',
            name: '404',
            component: Page404
        }
    ]
}
