(this.webpackJsonporganizationchart=this.webpackJsonporganizationchart||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),l=a.n(s),c=(a(22),a(2)),o=a(3),i=a(4),m=a(5),p=a(16),d=a.n(p);var u=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("section",{className:"logo-section"},r.a.createElement("div",{className:"logo colorwhite"})),r.a.createElement("section",{className:"search-section"},r.a.createElement("input",{type:"search",placeholder:"Search"}),r.a.createElement("input",{type:"submit"})))},E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).formatContent=function(e){return r.a.createElement("div",{className:"emp-details-container"},r.a.createElement("div",{className:"img-section"},r.a.createElement("img",{src:e.image,alt:"employee"})),r.a.createElement("p",{className:"emp-name-section"},e.fName," ",e.lName),r.a.createElement("h4",{className:"emp-designation"},e.designation),r.a.createElement("div",{className:"emp-details-table"},r.a.createElement("div",{className:"emp-details-row"},r.a.createElement("p",{className:"emp-property"},"Name"),r.a.createElement("p",{className:"emp-detail-value"},e.fName)),r.a.createElement("div",{className:"emp-details-row"},r.a.createElement("p",{className:"emp-property"},"Last Name"),r.a.createElement("p",{className:"emp-detail-value"},e.lName)),r.a.createElement("div",{className:"emp-details-row"},r.a.createElement("p",{className:"emp-property"},"Id"),r.a.createElement("p",{className:"emp-detail-value"},e.id)),r.a.createElement("div",{className:"emp-details-row"},r.a.createElement("p",{className:"emp-property"},"Location"),r.a.createElement("p",{className:"emp-detail-value"},e.location)),r.a.createElement("div",{className:"emp-details-row"},r.a.createElement("p",{className:"emp-property"},"Email"),r.a.createElement("p",{className:"emp-detail-value email"},"".concat(e.fName).concat(e.lName,"@borngroup.com").toLowerCase())),r.a.createElement("div",{className:"emp-details-row"},r.a.createElement("p",{className:"emp-property"},"DoB"),r.a.createElement("p",{className:"emp-detail-value"},"".concat(e.dob).split(" ")[0]," ","".concat(e.dob).split(" ")[1].slice(0,3)))))},n.onChangeSelectedEmpId=function(e){n.props.onChangeSelectedEmpId(e)},n.selectedEmpParentDetails=function(e){var t=n.state.jsonArray.filter((function(t){return t.id===e?t:null}));return r.a.createElement("div",{id:t[0].id,onClick:function(){return n.onChangeSelectedEmpId(t[0].id)},className:"parent-employee-section"},r.a.createElement("span",null,t[0].fName," ",t[0].lName))},n.fetchOriginContent=function(){return r.a.createElement("section",{className:"logo-section text-align-center"},r.a.createElement("div",{className:"logo colorwhite"}))},n.state={jsonArray:n.props.jsonArray,selectedEmpDetails:n.props.selectedEmpDetails,selectedEmpParentNode:n.props.selectedEmpParentNode},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.formatContent(this.state.selectedEmpDetails);return r.a.createElement("div",{className:"left-panel-container padding10 colorwhite"},this.state.selectedEmpDetails.upTree?this.selectedEmpParentDetails(this.state.selectedEmpDetails.upTree):this.fetchOriginContent(),r.a.createElement("div",{className:"arrow-down"}),r.a.createElement("div",{className:"arrow-down marginadjusted"}),e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.selectedEmpDetails!==e.selectedEmpDetails?{jsonArray:e.jsonArray,selectedEmpDetails:e.selectedEmpDetails,selectedEmpParentNode:e.selectedEmpParentNode}:null}}]),a}(r.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeSelectedEmpId=function(e){n.props.onChangeSelectedEmpId(e)},n.fetchParentEmployeeOfReportees=function(){var e=n.state.jsonArray.filter((function(e){return n.state.reporteeArray===e.downTree?e:null}));return r.a.createElement("span",null,e[0].fName," ",e[0].lName)},n.state={jsonArray:n.props.jsonArray,reporteeArray:n.props.reporteeArray,tempArray:[]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.fetchParentEmployeeOfReportees(),a=this.state.jsonArray.filter((function(t,a){return e.state.reporteeArray.includes(t.id)?t:null})).map((function(t,a){return r.a.createElement("div",{className:"reportee-item",key:a,onClick:function(){return e.onChangeSelectedEmpId(t.id)}},r.a.createElement("div",{className:"img-section"},r.a.createElement("img",{src:t.image,alt:"employee"})),r.a.createElement("p",null,"".concat(t.fName," ").concat(t.lName)),r.a.createElement("h4",null,t.designation))}));return r.a.createElement("div",{className:"right-panel-container padding10 fullwidth"},r.a.createElement("h3",{className:"reportee-title"},t," has the following reportees:"),r.a.createElement("div",{className:"reportee-container"},a))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.reporteeArray!==e.reporteeArray?{jsonArray:e.jsonArray,reporteeArray:e.reporteeArray}:null}}]),a}(r.a.Component);function f(e){return r.a.createElement("footer",{className:"footer colorwhite"},r.a.createElement("div",{className:"logo-watermark"},r.a.createElement("div",{className:"logo"})),r.a.createElement("p",null,"2020 \xa9 BORNGROUP.COM"))}a(40);var N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setHeightOfMainContainer=function(){window.innerHeight>500&&n.setState({screenHeight:window.innerHeight-100+"px"})},n.filterEmpInfo=function(e,t,a){var n=e.filter((function(e){return e.id===t?e:null}));return"empDetails"===a?n[0]:"empReportees"===a?n[0].downTree:"empParentNode"===a?n[0].upTree:void 0},n.onChangeSelectedEmpId=function(e){n.setState((function(t){return{selectedEmpId:t.selectedEmpId!==e?e:t.empId}}))},n.state={screenHeight:window.innerHeight+"px",selectedEmpId:1,jsonArray:[],selectedEmpDetails:{},reporteeArray:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setHeightOfMainContainer(),window.addEventListener("resize",this.setHeightOfMainContainer.bind(this)),d.a.get("orgchart.json").then((function(t){var a=t.data;e.setState({jsonArray:a})}))}},{key:"render",value:function(){var e=this;return this.state.jsonArray.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{className:"main-body",style:{height:"".concat(this.state.screenHeight)}},r.a.createElement(E,{jsonArray:this.state.jsonArray,selectedEmpDetails:this.filterEmpInfo(this.state.jsonArray,this.state.selectedEmpId,"empDetails"),selectedEmpParentNode:this.filterEmpInfo(this.state.jsonArray,this.state.selectedEmpId,"empParentNode"),onChangeSelectedEmpId:function(t){return e.onChangeSelectedEmpId(t)}}),r.a.createElement(h,{jsonArray:this.state.jsonArray,reporteeArray:this.filterEmpInfo(this.state.jsonArray,this.state.selectedEmpId,"empReportees"),onChangeSelectedEmpId:function(t){return e.onChangeSelectedEmpId(t)}})),r.a.createElement(f,null)):r.a.createElement("div",{className:"loading"},"Loading...")}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f19c9d20.chunk.js.map