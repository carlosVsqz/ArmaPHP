<template>
    <CRow>
        <CCol sm="12">
            <CCard>
                <CCardHeader>
                    <CIcon name="cil-justify-center"/>
                    <strong>Ventas</strong>
                    <div class="card-header-actions">
                        <a
                                href="#"
                                class="card-header-action"
                                rel="noreferrer noopener"
                                target="_blank"
                        >
                            <small class="text-muted">docs</small>
                        </a>
                    </div>
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                            :items="items"
                            :fields="fields"
                            column-filter
                            table-filter
                            items-per-page-select
                            :items-per-page="5"
                            hover
                            sorter
                            pagination
                    >
                        <template #status="{item}">
                            <td>
                                <CBadge :color="getBadge(item.status)">
                                    {{item.status}}
                                </CBadge>
                            </td>
                        </template>
                        <template #show_details="{item, index}">
                            <td class="py-2">
                                <CButton
                                        color="primary"
                                        variant="outline"
                                        square
                                        size="sm"
                                        @click="toggleDetails(item, index)"
                                >
                                    {{Boolean(item._toggled) ? 'Hide' : 'Show'}}
                                </CButton>
                            </td>
                        </template>
                        <template #details="{item}">
                            <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
                                <CCardBody>
                                    <CMedia :aside-image-props="{ height: 102 }">
                                        <h4>
                                            {{item.username}}
                                        </h4>
                                        <p class="text-muted">User since: {{item.registered}}</p>
                                        <CButton size="sm" color="info" class="">
                                            User Settings
                                        </CButton>
                                        <CButton size="sm" color="danger" class="ml-1">
                                            Delete
                                        </CButton>
                                    </CMedia>
                                </CCardBody>
                            </CCollapse>
                        </template>
                    </CDataTable>
                    <CRow>
                        <CCol sm xs="12" class="text-center mt-3">
                            <CButton color="success" @click="newSale()">
                                <CIcon name="cil-lightbulb"/>&nbsp;Generar venta
                            </CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>
    const items = [
        {username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
        {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        {username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
        {
            username: 'Avram Tarasios',
            registered: '2012/02/01',
            role: 'Staff',
            status: 'Banned',
            _classes: 'table-success'
        },
        {username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        {username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        {username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        {
            username: 'Carwyn Fachtna',
            registered: '2012/01/01',
            role: 'Member',
            status: 'Active',
            _classes: 'table-info'
        },
        {username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        {username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        {username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        {username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        {username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
        {username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        {username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        {username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        {username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        {username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
        {username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        {
            username: 'Einar Randall',
            registered: '2012/02/01',
            role: 'Admin',
            status: 'Inactive',
            _classes: 'table-danger'
        },
        {username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
        {username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
    ];
    const fields = [
        {key: 'username', _style: 'min-width:200px'},
        'registered',
        {key: 'role', _style: 'min-width:100px;'},
        {key: 'status', _style: 'min-width:100px;'},
        {
            key: 'show_details',
            label: '',
            _style: 'width:1%',
            sorter: false,
            filter: false
        }
    ];

    export default {
        name: "Sales",
        data() {
            return {
                items: items.map((item, id) => {
                    return {...item, id}
                }),
                fields,
                details: [],
                collapseDuration: 0
            }
        },

        methods: {
            newSale(){
                const createSale = `sales/create`;
                this.$router.push({path: createSale});
            },
            getBadge(status) {
                switch (status) {
                    case 'Active':
                        return 'success';
                    case 'Inactive':
                        return 'secondary';
                    case 'Pending':
                        return 'warning';
                    case 'Banned':
                        return 'danger';
                    default:
                        'primary';
                }
            },
            toggleDetails(item) {
                this.$set(this.items[item.id], '_toggled', !item._toggled)
                this.collapseDuration = 300
                this.$nextTick(() => {
                    this.collapseDuration = 0
                })
            }
        }
    }
</script>
