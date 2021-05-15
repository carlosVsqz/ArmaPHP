<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Create Client
          </h3>

          <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>

          <CInput label="First name" type="text" placeholder="First name" v-model="client.first_name"></CInput>
          <CInput label="Last name" type="text" placeholder="Last name" v-model="client.last_name"></CInput>
          <CInput label="Surname" type="text" placeholder="Surname" v-model="client.surname"></CInput>
          <CInput label="Last surname" type="text" placeholder="Last surname" v-model="client.last_surname"></CInput>
          <CInput label="Direction" type="text" placeholder="Direction" v-model="client.direction"></CInput>
          <CInput label="Telephone" type="text" placeholder="Telephone" v-model="client.telephone"></CInput>
          <CInput label="Email" type="email" placeholder="Email" v-model="client.email"></CInput>
          <CInput label="Nit" type="text" placeholder="Nit" v-model="client.nit"></CInput>

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
  name: 'EditUser',
  props: {
    caption: {
      type: String,
      default: 'Client id'
    },
  },
  data: () => {
    return {
      client: {
        first_name: '',
        last_name: '',
        surname: '',
        last_surname: '',
        direction: '',
        telephone: '',
        email: '',
        nit: ''
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
      axios.post(  '/api/clients?token=' + localStorage.getItem("api_token"),
          self.client
      )
          .then(function (response) {
            self.client = {
              title: '',
              content: '',
              applies_to_date: '',
              status_id: null,
              note_type: '',
            };
            self.message = 'Successfully created note.';
            self.showAlert();
          }).catch(function (error) {
        if(error.response.data.message == 'The given data was invalid.'){
          self.message = '';
          for (let key in error.response.data.errors) {
            if (error.response.data.errors.hasOwnProperty(key)) {
              self.message += error.response.data.errors[key][0] + '  ';
            }
          }
          self.showAlert();
        }else{
          console.log(error);
          // self.$router.push({ path: 'login' });
        }
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
    axios.get(  '/api/clients/create?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          self.statuses = response.data;
        }).catch(function (error) {
      console.log(error);
      // self.$router.push({ path: 'login' });
    });
  }
}

</script>
