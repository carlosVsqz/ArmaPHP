<template>
    <CRow>
        <CCol sm="12">
            <CCard >
                <CCardHeader>
                    <CIcon name="cil-justify-center"/>
                    <strong>Generar nueva venta</strong>
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
                    <CAlert
                            closeButton
                            :show.sync="dismissCountDown"
                            color="warning"
                            fade
                    >
                        ({{dismissCountDown}}) {{ message }}
                    </CAlert>
                    <CRow >
                        <CCol sm="6">
                            <CCard>
                                <CCardBody></CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm="6">
                            <CCard>
                                <CCardBody></CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <template>
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
                        </CCardBody>
                    </template>
                </CCardBody>
                <CCardFooter align="right">
                    <CButton variant="outline" color="success" @click="store()">Generar</CButton>
                    <CButton variant="outline" color="danger" @click="goBack">Cancelar</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>
    import axios from 'axios'
    import usersData from "../../../users/UsersData";

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
        name: 'CreateSale',
        props: {
            caption: {
                type: String,
                default: 'User id'
            },
        },
        data: () => {
            return {
                items: items.map((item, id) => {
                    return {...item, id}
                }),
                fields,
                details: [],
                collapseDuration: 0,
                note: {
                    title: '',
                    content: '',
                    applies_to_date: '',
                    status_id: null,
                    note_type: '',
                },
                statuses: [],
                message: '',
                dismissSecs: 3,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
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
            },
            goBack() {
                this.$router.go(-1)
                // this.$router.replace({path: '/users'})
            },
            store() {
                let self = this;
                axios.post('/api/notes?token=' + localStorage.getItem("api_token"),
                    self.note
                )
                    // eslint-disable-next-line no-unused-vars
                    .then(function (response) {
                        self.note = {
                            title: '',
                            content: '',
                            applies_to_date: '',
                            status_id: null,
                            note_type: '',
                        };
                        self.message = 'Successfully created note.';
                        self.showAlert();
                    }).catch(function (error) {
                    if (error.response.data.message === 'The given data was invalid.') {
                        self.message = '';
                        for (let key in error.response.data.errors) {
                            // eslint-disable-next-line no-prototype-builtins
                            if (error.response.data.errors.hasOwnProperty(key)) {
                                self.message += error.response.data.errors[key][0] + '  ';
                            }
                        }
                        self.showAlert();
                    } else {
                        console.log(error);
                        self.$router.push({path: 'login'});
                    }
                });
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp
                }
                return array
            },

            getShuffledUsersData() {
                return this.shuffleArray(usersData.slice(0))
            }
        },
        mounted: function () {
            let self = this;
            axios.get('/api/notes/create?token=' + localStorage.getItem("api_token"))
                .then(function (response) {
                    self.statuses = response.data;
                }).catch(function (error) {
                console.log(error);
                self.$router.push({path: 'login'});
            });
        }
    }

</script>
