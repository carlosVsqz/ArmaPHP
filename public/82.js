(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{531:function(t,e,o){"use strict";o.r(e);var s=o(2),a=o.n(s),n={name:"Login",data:function(){return{email:"",password:"",showMessage:!1,message:""}},methods:{goRegister:function(){this.$router.push({path:"register"})},login:function(){var t=this;a.a.post("/api/login",{email:t.email,password:t.password}).then((function(e){t.email="",t.password="",localStorage.setItem("api_token",e.data.access_token),t.$router.push({path:"notes"})})).catch((function(e){t.message="Incorrect E-mail or password",t.showMessage=!0,console.log(e)}))}}},r=o(0),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("CContainer",{staticClass:"d-flex content-center min-vh-100"},[o("CRow",[o("CCol",[o("CCardGroup",[o("CCard",{staticClass:"p-4"},[o("CCardBody",[o("CForm",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[o("h1",[t._v("Login")]),t._v(" "),o("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),t._v(" "),o("CInput",{attrs:{prependHtml:"<i class='cui-user'></i>",placeholder:"Username",autocomplete:"username email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),o("CInput",{attrs:{prependHtml:"<i class='cui-lock-locked'></i>",placeholder:"Password",type:"password",autocomplete:"curent-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),o("CRow",[o("CCol",{attrs:{col:"6"}},[o("CButton",{staticClass:"px-4",attrs:{type:"submit",color:"primary"}},[t._v("Login")])],1),t._v(" "),o("CCol",{staticClass:"text-right",attrs:{col:"6"}},[o("CButton",{staticClass:"px-0",attrs:{color:"link"}},[t._v("Forgot password?")])],1)],1)],1)],1)],1),t._v(" "),o("CCard",{staticClass:"text-center py-5 d-md-down-none",attrs:{color:"primary","text-color":"white","body-wrapper":""}},[o("h2",[t._v("Sign up")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n                        labore et dolore magna aliqua.")]),t._v(" "),o("CButton",{staticClass:"active mt-3",attrs:{color:"primary"},on:{click:function(e){return t.goRegister()}}},[t._v("\n                        Register Now!\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);