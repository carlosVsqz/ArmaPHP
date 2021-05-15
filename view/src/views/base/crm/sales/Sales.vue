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
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CDataTable
              :items="items"
              :fields="fields"
              table-filter
              hover
              pagination
          >
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

import axios from "axios";

const fields = [
  {key: 'id', _style: 'min-width:50px'},
  {key: 'product', _style: 'min-width:100px'},
  {key: 'description', _style: 'min-width:100px;'},
  {key: 'price', _style: 'min-width:100px;'},
  {key: 'amount', _style: 'min-width:100px;'},
  {key: 'total', _style: 'min-width:100px;'}
];
export default {
  name: "Sales",
  data() {
    return {
      items: [],
      fields,
      details: [],
      collapseDuration: 0
    }
  },

  methods: {
    newSale() {
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
    },
    getData() {
      let self = this;
      axios.get('/api/sales?token=' + localStorage.getItem("api_token"))
          .then(function (response) {
            console.log(response.data)
            self.items = response.data;
          }).catch(function (error) {
        console.log(error);
        self.$router.push({path: '/login'});
      });
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
