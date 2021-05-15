<template>
  <CRow>
    <CCol sm="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong>Clientes</strong>
        </CCardHeader>
        <CCardBody>
          <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
          <CDataTable
              :items="items"
              :fields="fields"
              table-filter
              items-per-page-select
              :items-per-page="5"
              hover
              pagination
          >

            <template #show="{item}">
              <td>
                <CButton color="primary" @click="showClient( item.id )">Show</CButton>
              </td>
            </template>
            <template #edit="{item}">
              <td>
                <CButton color="secondary" @click="editClient( item.id )">Edit</CButton>
              </td>
            </template>
            <template #delete="{item}">
              <td>
                <CButton color="danger" @click="deleteClient( item.id )">Delete</CButton>
              </td>
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
  {key: 'id', _style: 'min-width:30px'},
  {key: 'first_name', _style: 'min-width:90px'},
  'last_name',
  {key: 'surname', _style: 'min-width:90px;'},
  {key: 'last_surname', _style: 'min-width:90px;'},
  {key: 'direction', _style: 'min-width:90px;'},
  {key: 'telephone', _style: 'min-width:90px;'},
  {key: 'email', _style: 'min-width:90px;'},
  {key: 'nit', _style: 'min-width:80px;'},
  'show', 'edit', 'delete'
];
export default {
  name: 'Clients',
  data() {
    return {
      items: [],
      fields,
      you: null,
      details: [],
      message: '',
      showMessage: false,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  computed: {},
  methods: {
    userLink (id) {
      return `clients/${id.toString()}`
    },
    editLink (id) {
      return `clients/${id.toString()}/edit`
    },
    showClient(id) {
      const userLink = this.userLink(id);
      this.$router.push({path: userLink});
    },
    editClient(id) {
      const editLink = this.editLink(id);
      this.$router.push({path: editLink});
    },
    deleteClient(id) {
      let self = this;
      // eslint-disable-next-line no-unused-vars
      axios.delete('/api/clients/' + id + '?token=' + localStorage.getItem("api_token")).then(function (response) {
            self.message = 'Successfully deleted user.';
            self.showAlert();
            self.getClients();
          }).catch(function (error) {
        console.log(error);
        self.message = 'Error' + error;
        self.showAlert();

        // self.$router.push({
        //   path: '/login'
        // });
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    newClient() {
      const createSale = `clients/create`;
      this.$router.push({path: createSale});
    },

    getClients() {
      let self = this;
      axios.get('/api/clients?token=' + localStorage.getItem("api_token"))
          .then(function (response) {
            console.log(response.data)
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
