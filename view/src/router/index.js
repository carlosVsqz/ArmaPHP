import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer');

// Views CRM
// Views CRM clients
const Client = () => import('@/views/base/crm/clients/Client');
const Clients = () => import('@/views/base/crm/clients/Clients');
const CreateClient = () => import('@/views/base/crm/clients/CreateClient');
const EditClient = () => import('@/views/base/crm/clients/EditClient');

// Views CRM returns
const Returns = () => import('@/views/base/crm/Returns');

// Views CRM sales
const Sale = () => import('@/views/base/crm/sales/Sale');
const Sales = () => import('@/views/base/crm/sales/Sales');
const CreateSale = () => import('@/views/base/crm/sales/CreateSale');
const EditSale = () => import('@/views/base/crm/sales/EditSale');

// Views FRM
const AccountsPay = () => import('@/views/base/frm/Accounts-for-pay');
const AccountsReceivable = () => import('@/views/base/frm/Accounts-receivable');
const Expenses = () => import('@/views/base/frm/Expenses');

// Views HRM
const Assists = () => import('@/views/base/hrm/Assists');
const Charges = () => import('@/views/base/hrm/Charges');
const Contracts = () => import('@/views/base/hrm/Contracts');
const Employees = () => import('@/views/base/hrm/Employees');
// eslint-disable-next-line no-unused-vars
const Positions = () => import('@/views/base/hrm/Positions');
const Roles_ = () => import('@/views/base/hrm/Roles');
const Wages = () => import('@/views/base/hrm/Wages');

// Views SCM
const Brands_ = () => import('@/views/base/scm/Brands');
const Inventories = () => import('@/views/base/scm/Inventories');
const Products = () => import('@/views/base/scm/Products');
const Purchases = () => import('@/views/base/scm/Purchases');
const Suppliers = () => import('@/views/base/scm/Suppliers');

// Views
const Dashboard = () => import('@/views/Dashboard');
const Colors = () => import('@/views/theme/Colors');
const Typography = () => import('@/views/theme/Typography');
const Charts = () => import('@/views/charts/Charts');
const Widgets = () => import('@/views/widgets/Widgets');

// Views - Components
const Cards = () => import('@/views/base/Cards');
const Forms = () => import('@/views/base/Forms');
const Switches = () => import('@/views/base/Switches');
const Tables = () => import('@/views/base/Tables');
const Tabs = () => import('@/views/base/Tabs');
const Breadcrumbs = () => import('@/views/base/Breadcrumbs');
const Carousels = () => import('@/views/base/Carousels');
const Collapses = () => import('@/views/base/Collapses');
const Jumbotrons = () => import('@/views/base/Jumbotrons');
const ListGroups = () => import('@/views/base/ListGroups');
const Navs = () => import('@/views/base/Navs');
const Navbars = () => import('@/views/base/Navbars');
const Paginations = () => import('@/views/base/Paginations');
const Popovers = () => import('@/views/base/Popovers');
const ProgressBars = () => import('@/views/base/ProgressBars');
const Tooltips = () => import('@/views/base/Tooltips');

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons');
const ButtonGroups = () => import('@/views/buttons/ButtonGroups');
const Dropdowns = () => import('@/views/buttons/Dropdowns');
const BrandButtons = () => import('@/views/buttons/BrandButtons');

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons');
const Brands = () => import('@/views/icons/Brands');
const Flags = () => import('@/views/icons/Flags');

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts');
const Badges = () => import('@/views/notifications/Badges');
const Modals = () => import('@/views/notifications/Modals');

// Views - Pages
const Page404 = () => import('@/views/pages/Page404');
const Page500 = () => import('@/views/pages/Page500');
const Login = () => import('@/views/pages/Login');
const Register = () => import('@/views/pages/Register');

// Users
const Users = () => import('@/views/users/Users');
const User = () => import('@/views/users/User');
const EditUser = () => import('@/views/users/EditUser');

//Notes
const Notes = () => import('@/views/notes/Notes');
const Note = () => import('@/views/notes/Note');
const EditNote = () => import('@/views/notes/EditNote');
const CreateNote = () => import('@/views/notes/CreateNote');

//Roles
const Roles = () => import('@/views/roles/Roles');
const Role = () => import('@/views/roles/Role');
const EditRole = () => import('@/views/roles/EditRole');
const CreateRole = () => import('@/views/roles/CreateRole');

//Bread
const Breads = () => import('@/views/bread/Breads');
const Bread = () => import('@/views/bread/Bread');
const EditBread = () => import('@/views/bread/EditBread');
const CreateBread = () => import('@/views/bread/CreateBread');
const DeleteBread = () => import('@/views/bread/DeleteBread');

//Resources
const Resources = () => import('@/views/resources/Resources');
const CreateResource = () => import('@/views/resources/CreateResources');
const Resource = () => import('@/views/resources/Resource');
const EditResource = () => import('@/views/resources/EditResource');
const DeleteResource = () => import('@/views/resources/DeleteResource');

//Email
const Emails = () => import('@/views/email/Emails');
const CreateEmail = () => import('@/views/email/CreateEmail');
const EditEmail = () => import('@/views/email/EditEmail');
const ShowEmail = () => import('@/views/email/ShowEmail');
const SendEmail = () => import('@/views/email/SendEmail');

const Menus = () => import('@/views/menu/MenuIndex');
const CreateMenu = () => import('@/views/menu/CreateMenu');
const EditMenu = () => import('@/views/menu/EditMenu');
const DeleteMenu = () => import('@/views/menu/DeleteMenu');

const MenuElements = () => import('@/views/menuElements/ElementsIndex');
const CreateMenuElement = () => import('@/views/menuElements/CreateMenuElement');
const EditMenuElement = () => import('@/views/menuElements/EditMenuElement');
const ShowMenuElement = () => import('@/views/menuElements/ShowMenuElement');
const DeleteMenuElement = () => import('@/views/menuElements/DeleteMenuElement');

const Media = () => import('@/views/media/Media');


Vue.use(Router);

export default new Router({
    //mode: 'hash',     // for # into url's
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
                            path: 'clients',
                            meta: {label: 'Clients'},
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
                                    meta: {label: 'Agregar nuevo cliente'},
                                    name: 'Agregar nuevo cliente',
                                    component: CreateClient
                                },
                                {
                                    path: ':id',
                                    meta: {label: 'Detalle del cliente'},
                                    name: 'Detalle del clinte',
                                    component: Client,
                                },
                                {
                                    path: ':id/edit',
                                    meta: {label: 'Editar Cliente'},
                                    name: 'Editar cliente',
                                    component: EditClient
                                },
                            ]
                        },
                        {
                            path: 'returns',
                            name: 'Devoluciones',
                            component: Returns
                        },
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
                    ]
                },
                {
                    path: 'frm',
                    redirect: 'frm/expenses',
                    name: 'FRM',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'accounts-for-pay',
                            name: 'Cuentas por pagar',
                            component: AccountsPay
                        },
                        {
                            path: 'accounts-receivable',
                            name: 'Cuentas por cobrar',
                            component: AccountsReceivable
                        },
                        {
                            path: 'expenses',
                            name: 'Gastos',
                            component: Expenses
                        },
                    ]
                },
                {
                    path: 'hrm',
                    redirect: 'hrm/assists',
                    name: 'HRM',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'assists',
                            name: 'Asistencia',
                            component: Assists
                        },
                        {
                            path: 'charges',
                            name: 'Cargos',
                            component: Charges
                        },
                        {
                            path: 'contracts',
                            name: 'Contratos',
                            component: Contracts
                        },
                        {
                            path: 'employees',
                            name: 'Empleados',
                            component: Employees
                        },
                        {
                            path: 'roles',
                            name: 'Roles',
                            component: Roles_
                        },
                        {
                            path: 'wages',
                            name: 'Salarios',
                            component: Wages
                        },
                    ]
                },
                {
                    path: 'scm',
                    redirect: 'scm/products',
                    name: 'SCM',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children:[
                        {
                            path: 'brands',
                            name: 'Marcas',
                            component: Brands_
                        },
                        {
                            path: 'inventories',
                            name: 'Inventario',
                            component: Inventories
                        },
                        {
                            path: 'products',
                            name: 'Productos',
                            component: Products
                        },
                        {
                            path: 'purchases',
                            name: 'Compras',
                            component: Purchases
                        },
                        {
                            path: 'suppliers',
                            name: 'Proveedores',
                            component: Suppliers
                        },
                    ]

                },
                {
                    path: 'media',
                    name: 'Media',
                    component: Media
                },
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'colors',
                    name: 'Colors',
                    component: Colors
                },
                {
                    path: 'typography',
                    name: 'Typography',
                    component: Typography
                },
                {
                    path: 'charts',
                    name: 'Charts',
                    component: Charts
                },
                {
                    path: 'widgets',
                    name: 'Widgets',
                    component: Widgets
                },
                {
                    path: 'menu',
                    meta: {label: 'Menu'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: Menus,
                        },
                        {
                            path: 'create',
                            meta: {label: 'Create Menu'},
                            name: 'CreateMenu',
                            component: CreateMenu
                        },
                        {
                            path: ':id/edit',
                            meta: {label: 'Edit Menu'},
                            name: 'EditMenu',
                            component: EditMenu
                        },
                        {
                            path: ':id/delete',
                            meta: {label: 'Delete Menu'},
                            name: 'DeleteMenu',
                            component: DeleteMenu
                        },
                    ]
                },
                {
                    path: 'menuelement',
                    meta: {label: 'MenuElement'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: ':menu/menuelement',
                            component: MenuElements,
                        },
                        {
                            path: ':menu/menuelement/create',
                            meta: {label: 'Create Menu Element'},
                            name: 'Create Menu Element',
                            component: CreateMenuElement
                        },
                        {
                            path: ':menu/menuelement/:id',
                            meta: {label: 'Menu Element Details'},
                            name: 'Menu Element',
                            component: ShowMenuElement,
                        },
                        {
                            path: ':menu/menuelement/:id/edit',
                            meta: {label: 'Edit Menu Element'},
                            name: 'Edit Menu Element',
                            component: EditMenuElement
                        },
                        {
                            path: ':menu/menuelement/:id/delete',
                            meta: {label: 'Delete Menu Element'},
                            name: 'Delete Menu Element',
                            component: DeleteMenuElement
                        },
                    ]
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
                },
                {
                    path: 'notes',
                    meta: {label: 'Notes'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: Notes,
                        },
                        {
                            path: 'create',
                            meta: {label: 'Create Note'},
                            name: 'Create Note',
                            component: CreateNote
                        },
                        {
                            path: ':id',
                            meta: {label: 'Note Details'},
                            name: 'Note',
                            component: Note,
                        },
                        {
                            path: ':id/edit',
                            meta: {label: 'Edit Note'},
                            name: 'Edit Note',
                            component: EditNote
                        },
                    ]
                },
                {
                    path: 'roles',
                    meta: {label: 'Roles'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: Roles,
                        },
                        {
                            path: 'create',
                            meta: {label: 'Create Role'},
                            name: 'Create Role',
                            component: CreateRole
                        },
                        {
                            path: ':id',
                            meta: {label: 'Role Details'},
                            name: 'Role',
                            component: Role,
                        },
                        {
                            path: ':id/edit',
                            meta: {label: 'Edit Role'},
                            name: 'Edit Role',
                            component: EditRole
                        },
                    ]
                },
                {
                    path: 'bread',
                    meta: {label: 'Bread'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: Breads,
                        },
                        {
                            path: 'create',
                            meta: {label: 'Create Bread'},
                            name: 'CreateBread',
                            component: CreateBread
                        },
                        {
                            path: ':id',
                            meta: {label: 'Bread Details'},
                            name: 'Bread',
                            component: Bread,
                        },
                        {
                            path: ':id/edit',
                            meta: {label: 'Edit Bread'},
                            name: 'Edit Bread',
                            component: EditBread
                        },
                        {
                            path: ':id/delete',
                            meta: {label: 'Delete Bread'},
                            name: 'Delete Bread',
                            component: DeleteBread
                        },
                    ]
                },
                {
                    path: 'email',
                    meta: {label: 'Emails'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: Emails,
                        },
                        {
                            path: 'create',
                            meta: {label: 'Create Email Template'},
                            name: 'Create Email Template',
                            component: CreateEmail
                        },
                        {
                            path: ':id',
                            meta: {label: 'Show Email Template'},
                            name: 'Show Email Tempalte',
                            component: ShowEmail,
                        },
                        {
                            path: ':id/edit',
                            meta: {label: 'Edit Email Tempalate'},
                            name: 'Edit Email Template',
                            component: EditEmail
                        },
                        {
                            path: ':id/sendEmail',
                            meta: {label: 'Send Email'},
                            name: 'Send Email',
                            component: SendEmail
                        },
                    ]
                },
                {
                    path: 'resource',
                    meta: {label: 'Resources'},
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: ':bread/resource',
                            component: Resources,
                        },
                        {
                            path: ':bread/resource/create',
                            meta: {label: 'Create Resource'},
                            name: 'CreateResource',
                            component: CreateResource
                        },
                        {
                            path: ':bread/resource/:id',
                            meta: {label: 'Resource Details'},
                            name: 'Resource',
                            component: Resource,
                        },
                        {
                            path: ':bread/resource/:id/edit',
                            meta: {label: 'Edit Resource'},
                            name: 'Edit Resource',
                            component: EditResource
                        },
                        {
                            path: ':bread/resource/:id/delete',
                            meta: {label: 'Delete Resource'},
                            name: 'Delete Resource',
                            component: DeleteResource
                        },
                    ]
                },
                {
                    path: 'base',
                    redirect: '/base/cards',
                    name: 'Base',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'cards',
                            name: 'Cards',
                            component: Cards
                        },
                        {
                            path: 'forms',
                            name: 'Forms',
                            component: Forms
                        },
                        {
                            path: 'switches',
                            name: 'Switches',
                            component: Switches
                        },
                        {
                            path: 'tables',
                            name: 'Tables',
                            component: Tables
                        },
                        {
                            path: 'tabs',
                            name: 'Tabs',
                            component: Tabs
                        },
                        {
                            path: 'breadcrumb',
                            name: 'Breadcrumb',
                            component: Breadcrumbs
                        },
                        {
                            path: 'carousel',
                            name: 'Carousel',
                            component: Carousels
                        },
                        {
                            path: 'collapse',
                            name: 'Collapse',
                            component: Collapses
                        },
                        {
                            path: 'jumbotron',
                            name: 'Jumbotron',
                            component: Jumbotrons
                        },
                        {
                            path: 'list-group',
                            name: 'List Group',
                            component: ListGroups
                        },
                        {
                            path: 'navs',
                            name: 'Navs',
                            component: Navs
                        },
                        {
                            path: 'navbars',
                            name: 'Navbars',
                            component: Navbars
                        },
                        {
                            path: 'pagination',
                            name: 'Pagination',
                            component: Paginations
                        },
                        {
                            path: 'popovers',
                            name: 'Popovers',
                            component: Popovers
                        },
                        {
                            path: 'progress',
                            name: 'Progress',
                            component: ProgressBars
                        },
                        {
                            path: 'tooltips',
                            name: 'Tooltips',
                            component: Tooltips
                        }
                    ]
                },
                {
                    path: 'buttons',
                    redirect: '/buttons/standard-buttons',
                    name: 'Buttons',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'buttons',
                            name: 'Standard Buttons',
                            component: StandardButtons
                        },
                        {
                            path: 'button-group',
                            name: 'Button Group',
                            component: ButtonGroups
                        },
                        {
                            path: 'dropdowns',
                            name: 'Dropdowns',
                            component: Dropdowns
                        },
                        {
                            path: 'brand-buttons',
                            name: 'Brand Buttons',
                            component: BrandButtons
                        }
                    ]
                },
                {
                    path: 'icon',
                    redirect: '/icons/coreui-icons',
                    name: 'CoreUI Icons',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'coreui-icons',
                            name: 'Icons library',
                            component: CoreUIIcons
                        },
                        {
                            path: 'brands',
                            name: 'Brands',
                            component: Brands
                        },
                        {
                            path: 'flags',
                            name: 'Flags',
                            component: Flags
                        }
                    ]
                },
                {
                    path: 'notifications',
                    redirect: '/notifications/alerts',
                    name: 'Notifications',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'alerts',
                            name: 'Alerts',
                            component: Alerts
                        },
                        {
                            path: 'badge',
                            name: 'Badge',
                            component: Badges
                        },
                        {
                            path: 'modals',
                            name: 'Modals',
                            component: Modals
                        }
                    ]
                }
            ]
        },
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                {
                    path: '404',
                    name: 'Page404',
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
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
