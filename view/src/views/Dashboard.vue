<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Estado</h4>
            <div class="small text-muted" v-model="date">{{ date }}</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButtonGroup class="float-right mr-3">
              <CButton
                  color="outline-secondary"
                  v-for="(value, key) in [ 'Mes', 'Año']"
                  :key="key"
                  class="mx-0"
                  :pressed="value === selected"
                  @click="selected = value"
              >
                {{value}}
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
        <MainChart style="height:300px;margin-top:40px;"/>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div v-model="totalUsers">
              <div class="text-muted">Clientes</div>
              <strong>Total de Clientes</strong>
              {{ totalUsers }}
            </div>
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div v-model="usersLastMonth">
              <div class="text-muted">Clientes</div>
              <strong>Ultimos 30 dias</strong>
              {{ usersLastMonth }}
            </div>
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div v-model="usersLastYear">
              <div class="text-muted">Clientes</div>
              <strong>Ultimo anio</strong>
              {{ usersLastYear }}
            </div>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>

    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            Ventas
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small class="text-muted">Ventas</small><br>
                      <strong class="h4" v-model="totalSales">{{totalSales}}</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="danger">
                      <small class="text-muted">Clientes recurrentes</small><br>
                      <strong class="h4">22</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0">
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Lunes
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                        class="progress-xs"
                        color="info"
                        :value="34"
                    />
                    <CProgress
                        class="progress-xs"
                        color="danger"
                        :value="78"
                    />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Martes
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                        class="progress-xs"
                        :value="56"
                        color="info"
                    />
                    <CProgress
                        class="progress-xs"
                        :value="94"
                        color="danger"
                    />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Miercoles
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                        class="progress-xs"
                        :value="12"
                        color="info"
                    />
                    <CProgress
                        class="progress-xs"
                        :value="67"
                        color="danger"
                    />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Jueves
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                        class="progress-xs"
                        :value="43"
                        color="info"
                    />
                    <CProgress
                        class="progress-xs"
                        :value="91"
                        color="danger"
                    />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Viernes
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                        class="progress-xs"
                        :value="22"
                        color="info"
                    />
                    <CProgress
                        class="progress-xs"
                        :value="73"
                        color="danger"
                    />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Sabado
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                        class="progress-xs"
                        :value="53"
                        color="info"
                    />
                    <CProgress
                        class="progress-xs"
                        :value="82"
                        color="danger"
                    />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      Domingo
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                        class="progress-xs"
                        :value="9"
                        color="info"
                    />
                    <CProgress
                        class="progress-xs"
                        :value="69"
                        color="danger"
                    />
                  </div>
                </div>
                <div class="legend text-center">
                  <small>
                    <sup>
                      <CBadge shape="pill" color="info">&nbsp;</CBadge>
                    </sup>
                    Ventas
                    <sup>
                      <CBadge shape="pill" color="danger">&nbsp;</CBadge>
                    </sup>
                    Clientes recurrentes
                  </small>
                </div>
              </CCol>
            </CRow>
            <br/>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            Clientes por Region
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CChartPolarArea
                    :datasets="defaultDatasets"
                    :options="defaultOptions"
                    :labels="polarChartLabels"
                />
              </CCol>
            </CRow>
            <br/>
          </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChart from './charts/MainChart'
import axios from "axios";
import {CChartPolarArea} from "@coreui/vue-chartjs";

export default {
  name: 'Dashboard',
  components: {
    MainChart,
    CChartPolarArea
  },

  data() {
    return {
      selected: 'Mes',
      date: '',
      totalSales: '',
      items: [],
      totalUsers: '',
      usersLastMonth: '',
      usersLastYear: '',
      polarChartLabels:[],
      polarChartData:[]
    }
  },
  computed:{
    defaultDatasets () {
      return [
        {
          label: 'Usuarios por Region',
          backgroundColor: 'rgba(179,181,198,0.2)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: 'rgba(179,181,198,1)',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: this.polarChartData,
        }
      ]
    },
    defaultOptions () {
      return {
        aspectRatio: 1.5
      }
    }
  },
  methods: {
    getAllUsers() {
      let self = this;
      axios.get('/api/clients?sort=all' + '&' + 'token=' + localStorage.getItem("api_token"))
          .then(function (response) {
            self.totalUsers = response.data;
            self.usersLastYear = response.data;
          }).catch(function (error) {
        console.log(error);
      });
      axios.get('/api/clients?sort=month' + '&' + 'token=' + localStorage.getItem("api_token"))
          .then(function (response) {
            self.usersLastMonth = response.data;
          }).catch(function (error) {
        console.log(error);
      });
      axios.get('/api/clients?sort=city' + '&' + 'token=' + localStorage.getItem("api_token"))
          .then(function (response) {
            const obj = response.data;
            Object.keys(obj).forEach(function(k){
              // console.log('key '+ obj[k].total_users + ': ' + 'value'+ obj[k].city);
              self.polarChartLabels.push(obj[k].city);
              self.polarChartData.push(obj[k].total_users);
            });
          }).catch(function (error) {
            this.route.push("/login");
        console.log(error);
      });
      axios.get('/api/sales?sort=total' + '&' + 'token=' + localStorage.getItem("api_token"))
          .then(function (response) {
            self.totalSales = response.data;

          }).catch(function (error) {
            this.route.push("/login");
        console.log(error);
      });
    }
  },
  mounted() {
    let self = this;
    const day = new Date(Date.now());
    self.date = day;
    console.log(day);
    self.getAllUsers()

  }
}
</script>
