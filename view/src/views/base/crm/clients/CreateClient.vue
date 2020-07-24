<template>
    <CRow>
        <CCol col="12" lg="6">
            <CCard no-header>
                <CCardBody>
                    <h3>
                        nuevo Cliente
                    </h3>

                    <CAlert
                            :show.sync="dismissCountDown"
                            color="warning"
                            fade
                    >
                        ({{dismissCountDown}}) {{ message }}
                    </CAlert>
                    <CRow >
                        <CInput label="nombre"              type="text" placeholder="" v-model="client.first_name"></CInput>
                        <CInput label="segundo nombre"      type="text" placeholder="" v-model="client.last_name"></CInput>
                        <CInput label="aprellido"           type="text" placeholder="" v-model="client.surname"></CInput>
                        <CInput label="segundo apellido"    type="text" placeholder="" v-model="client.last_surname"></CInput>
                    </CRow>
                    <CInput label="direccion"           type="text" placeholder="" v-model="client.direction"></CInput>
                    <CInput label="email"               type="email" placeholder="" v-model="client.email"></CInput>
                    <CRow>
                        <CInput label="telefono"            type="text" placeholder="" v-model="client.telephone"></CInput>
                        <CInput label="nit"                 type="text" placeholder="" v-model="client.nit"></CInput>
                    </CRow>

                    <CButton color="primary" @click="store()">Create</CButton>
                    <CButton color="primary" @click="goBack">Back</CButton>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'EditClient',
        props: {
            caption: {
                type: String,
            },
        },
        data: () => {
            return {
                //first people create first_name, last_name, surname, last_surname, direction, telephone, email
                client: {
                    first_name: '',
                    last_name: '',
                    surname: '',
                    last_surname: '',
                    direction: '',
                    telephone: '',
                    email: '',
                    nit: '',
                },
                message: '',
                dismissSecs: 5,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            store() {
                let self = this;
                axios.post('/api/clients?token=' + localStorage.getItem("api_token"), self.client)
                    // eslint-disable-next-line no-unused-vars
                    .then(function (response) {
                        self.client = {
                            first_name: '',
                            last_name: '',
                            surname: '',
                            last_surname: '',
                            direction: '',
                            telephone: '',
                            email: '',
                            nit: '',
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
        },
        mounted: function () {
            let self = this;
            axios.get('/api/clients/create?token=' + localStorage.getItem("api_token"))
                // eslint-disable-next-line no-unused-vars
                .then(function (response) {
                    //self.statuses = response.data;
                }).catch(function (error) {
                console.log(error);
                self.$router.push({path: 'login'});
            });
        }
    }
</script>

<style scoped>

</style>
