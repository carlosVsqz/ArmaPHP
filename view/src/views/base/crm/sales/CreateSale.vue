<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Create Sale
          </h3>

          <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>

          <CInput label="Cantidad" type="text" placeholder="Cantidad" v-model="sale.amount"></CInput>
          <CInput label="Producto" type="text" placeholder="Id de producto" v-model="sale.productId"></CInput>
          <CInput label="Estado" type="text" placeholder="Estado" v-model="sale.statusId"></CInput>
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
  name: 'CreateSale',
  props: {
    caption: {
      type: String,
      default: 'Sale id'
    },
  },
  data: () => {
    return {
      sale: {
        amount: '',
        productId: '',
        statusId: ''
      },
      statuses: [],
      message: '',
      dismissSecs: 7,
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
      axios.post(  '/api/sales?token=' + localStorage.getItem("api_token"),
          self.sale
      )
          .then(function (response) {
            self.sale = {
              amount: '',
              productId: '',
              statusId: ''
            };
            self.message = 'Venta generadaa con exitp ';
            self.showAlert();
          }).catch(function (error) {
            console.log(error)
      });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  '/api/products/?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          self.statuses = response.data;
        }).catch(function (error) {
      console.log(error);
      // self.$router.push({ path: 'login' });
    });
  }
}

</script>
