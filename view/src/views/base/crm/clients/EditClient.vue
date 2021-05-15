<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Edit User id:  {{ $route.params.id }}
            </template>
            <CAlert
                :show.sync="dismissCountDown"
                color="primary"
                fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
            <CInput type="text" label="Name" placeholder="Name" v-model="first_name"></CInput>
            <CInput type="text" label="Email" placeholder="Email" v-model="email"></CInput>
            <CButton color="primary" @click="update()">Save</CButton>
            <CButton color="primary" @click="goBack">Back</CButton>
          </CForm>
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
      default: 'User id'
    },
  },
  data: () => {
    return {
      first_name: '',
      email: '',
      showMessage: false,
      message: '',
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    update() {
      let self = this;
      axios.put(  '/api/clients/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
          {
            first_name: self.first_name,
            email: self.email,
          })
          .then(function (response) {
            self.message = 'Successfully updated user.';
            self.showAlert();
          }).catch(function (error) {
        console.log(error);
        self.message = 'Error '+ error;
        self.showAlert();
        // self.$router.push({ path: '/login' });
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
    axios.get(  '/api/clients/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          // console.log(response.data)
          self.first_name = response.data.first_name;
          self.email = response.data.email;
        }).catch(function (error) {
      console.log(error);
      // self.$router.push({ path: '/login' });

    });
  }
}


</script>
