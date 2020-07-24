<template>
    <CRow>
        <CCol sm="12">
            <CCard>
                <CCardHeader>
                    <CIcon name="cil-justify-center"/>
                    <strong>Clientes</strong>
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
                                            {{item.first_name}}
                                        </h4>
                                        <p class="text-muted">Nit del cliente: {{item.nit}}</p>
                                        <CButton size="sm" color="info" class="">
                                            Configuraci&oacute;n del Cliente.
                                        </CButton>
                                        <CButton size="sm" color="danger" class="ml-1">
                                            Eliminar
                                        </CButton>
                                    </CMedia>
                                </CCardBody>
                            </CCollapse>
                        </template>
                    </CDataTable>
                    <CRow>
                        <CCol sm xs="12" class="text-center mt-3">
                            <CButton color="success" @click="newClient()">
                                <CIcon name="cil-lightbulb"/>&nbsp;Agregar nuevo Cliente
                            </CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>

    import axios from 'axios';
    const fields = [
        {key: 'first_name', _style: 'min-width:100px'},
        'last_name',
        {key: 'surname', _style: 'min-width:100px;'},
        {key: 'last_surname', _style: 'min-width:100px;'},
        {key: 'direction', _style: 'min-width:100px;'},
        {key: 'telephone', _style: 'min-width:100px;'},
        {key: 'email', _style: 'min-width:100px;'},
        {key: 'nit', _style: 'min-width:100px;'},
        {
            key: 'show_details',
            label: '',
            _style: 'width:1%',
            sorter: false,
            filter: false
        }
    ];
    const items = [{first_name: 'luis'}];
    export default {
        name: 'Clients',
        data() {
            return {
                //items: items.map((item, id) => {return {...item, id}}),
                items: [],
                fields,
                details: [],
                collapseDuration: 0
            }
        },
        computed:{},
        methods: {
            newClient(){
                const createSale = `clients/create`;
                this.$router.push({path: createSale});
            },
            toggleDetails(item) {
                this.$set( this.items[item.id] , '_toggled', !item._toggled);
                this.collapseDuration = 300;
                this.$nextTick(() => {
                    this.collapseDuration = 0;
                })
            },

            getClients() {
                let self = this;
                axios.get('/api/clients?token=' + localStorage.getItem("api_token"))
                    .then(function (response) {
                        self.items = response.data;
                    }).catch(function (error) {
                    console.log(error);
                    self.$router.push({path: '/login'});
                });
            }
        },
        mounted: function () {
            this.getClients()
        }
    }
</script>
