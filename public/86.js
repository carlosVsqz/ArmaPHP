(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{475:function(e,t,o){"use strict";o.r(t);var n={name:"CreateResourceField",props:{column:Object,relations:Object,options:Array,getData:Boolean},data:function(){return{test:"test",model:null,file:!1}},computed:{flag:function(){for(var e=!1,t=0;t<this.options.length;t++)if(this.options[t].value==this.column.type){e=!0;break}return e}},methods:{handleFileUpload:function(e,t){this.model=e[0],this.file=!0},getDataFunction:function(){var e={data:this.model,file:this.file,name:this.column.column_name};this.$emit("sendData",e)}},watch:{getData:function(){!0===this.getData&&this.getDataFunction()}}},a=o(0),l=Object(a.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mb-1 mt-1"},[e.flag?o("div",["checkbox"==e.column.type?o("div",[o("CInputCheckbox",{attrs:{label:e.column.name,value:"true",checked:!1},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):"radio"==e.column.type?o("div",[o("label",{staticClass:"mt-3"},[e._v(" "+e._s(e.column.name)+" ")]),e._v(" "),o("CInputRadio",{attrs:{label:"yes",type:"radio",value:"true",name:e.column.column_name,checked:!1}}),e._v(" "),o("CInputRadio",{attrs:{label:"no",type:"radio",value:"false",name:e.column.column_name,checked:!1}})],1):o("div",[o("CInput",{attrs:{label:e.column.name,type:e.column.type,placeholder:e.column.name},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)]):"relation_select"==e.column.type?o("div",[o("CSelect",{attrs:{label:e.column.name,options:e.relations["relation_"+e.column.column_name],value:e.model},on:{"update:value":function(t){e.model=t}}})],1):"relation_radio"==e.column.type?o("div",[o("label",{staticClass:"mt-3"},[e._v(e._s(e.column.name))]),e._v(" "),e._l(e.relations["relation_"+e.column.column_name],(function(t){return o("CInputRadio",{key:t.value,attrs:{label:t.label,type:"radio",value:t.value,name:e.column.column_name}})}))],2):"file"==e.column.type||"image"==e.column.type?o("div",[o("CInputFile",{attrs:{label:e.column.name},on:{change:e.handleFileUpload}})],1):"text_area"==e.column.type?o("div",[o("CTextarea",{attrs:{label:e.column.name,placeholder:e.column.name,rows:"9"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):o("div",[o("p",[e._v("Not recognize field type: "+e._s(e.column.type))])])])}),[],!1,null,null,null).exports,s=o(2),i=o.n(s),r={name:"CreateResources",components:{CreateResourceField:l},data:function(){return{message:"",dismissSecs:7,dismissCountDown:0,form:{},columns:[],relations:[],inputOptions:[],receiveFormFields:[],getData:!1}},watch:{activePage:function(){this.getResources()}},computed:{},methods:{goBack:function(){this.$router.go(-1)},storeFirstStep:function(){this.getData=!0},receiveDataFormField:function(e){this.receiveFormFields.push(e),this.receiveFormFields.length==this.columns.length&&this.store()},preparePostDataForStore:function(){for(var e=new FormData,t=0;t<this.receiveFormFields.length;t++)e.append(this.receiveFormFields[t].name,this.receiveFormFields[t].data);return e},store:function(e,t){var o=this,n=o.preparePostDataForStore();i.a.post("/api/resource/"+o.$route.params.bread+"/resource?token="+localStorage.getItem("api_token"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){o.$router.go(-1),o.message="Successfully added to "+o.form.name,o.showAlert()})).catch((function(e){console.log(e),o.$router.push({path:"/login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getFields:function(){var e=this;i.a.get("/api/resource/"+e.$route.params.bread+"/resource/create?token="+localStorage.getItem("api_token")).then((function(t){e.form=t.data.form,e.columns=t.data.columns,e.relations=t.data.relations,e.inputOptions=t.data.inputOptions})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},mounted:function(){this.getFields()}},c=Object(a.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("CRow",[o("CCol",{attrs:{col:"12",xl:"6"}},[o("transition",{attrs:{name:"slide"}},[o("CCard",[o("CCardBody",[o("h3",[e._v("\n            Create "+e._s(e.form.name)+"\n          ")]),e._v(" "),o("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n            ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n          ")]),e._v(" "),e._l(e.columns,(function(t){return o("CreateResourceField",{key:t.id,attrs:{column:t,relations:e.relations,options:e.inputOptions,getData:e.getData},on:{sendData:e.receiveDataFormField}})})),e._v(" "),o("CButton",{staticClass:"mt-2",attrs:{color:"primary"},on:{click:function(t){return e.storeFirstStep()}}},[e._v("Create")]),e._v(" "),o("CButton",{staticClass:"mt-2",attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],2)],1)],1)],1)],1)}),[],!1,null,"56fff75e",null);t.default=c.exports}}]);