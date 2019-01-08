(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11);a(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);var s=a(12),o=a(13),c=a(15),i=a(14),h=a(16),u=(a(71),a(56)),d=a.n(u),m=a(57),g=a.n(m),p=a(20),C=a(23),b=a.n(C),f=a(27),v=a.n(f),y=a(10),w=a.n(y),E=function(e){function t(e,a){var r;return Object(s.a)(this,t),(r=Object(c.a)(this,Object(i.a)(t).call(this,e,a))).handleCategoryChange=function(e){var t,a=e.target.value;t="starships"===a||"vehicles"===a?["crew","length","passengers"]:["height","mass"],r.setState({selectedCategory:a,selectedSubCategory:t[0],subCategories:t})},r.handleSubCategoryChange=function(e){r.setState({selectedSubCategory:e.target.value})},r.handlePageChange=function(e){r.setState({selectedPage:e.target.value})},r.handleFilterChange=function(e){r.setState({selectedFilter:e.target.value})},r.handleShow=r.handleShow.bind(Object(p.a)(Object(p.a)(r))),r.handleClose=r.handleClose.bind(Object(p.a)(Object(p.a)(r))),r.categories=["starships","vehicles","people"],r.state={show:r.props.show,validated:!1,subCategories:["crew","passengers","length"],selectedCategory:"starships",selectedSubCategory:"crew",selectedPage:"1",selectedFilter:220},r}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleSubmit",value:function(e){!1===e.currentTarget.checkValidity()?(e.preventDefault(),e.stopPropagation(),this.setState({validated:!0})):(e.preventDefault(),e.stopPropagation(),this.setState({show:!1}),this.props.loadChartData(this.state.selectedCategory,this.state.selectedSubCategory,this.state.selectedPage,this.props.chartNumber,this.state.selectedFilter))}},{key:"render",value:function(){var e=this,t=this.state.validated,a=this.categories.map(function(e,t){return n.a.createElement("option",{key:t,index:t,value:e},e)}),r=this.state.subCategories.map(function(e,t){return n.a.createElement("option",{key:t,value:e},e)});return n.a.createElement("div",null,n.a.createElement(v.a,{variant:"secondary",onClick:this.handleShow,className:"add-chart"},"Add chart"),n.a.createElement(b.a,{show:this.state.show,onHide:this.handleClose},n.a.createElement(b.a.Header,{closeButton:!0},n.a.createElement(b.a.Title,null,"Add chart")),n.a.createElement(b.a.Body,null,n.a.createElement(w.a,{noValidate:!0,validated:t,onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement(w.a.Row,null,n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Label,null,"Category"),n.a.createElement(w.a.Control,{onChange:this.handleCategoryChange,as:"select"},a)),n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Label,null,"Property"),n.a.createElement(w.a.Control,{onChange:this.handleSubCategoryChange,as:"select"},r)),n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Label,null,"Page"),n.a.createElement(w.a.Control,{onChange:this.handlePageChange,as:"select"},n.a.createElement("option",{key:"1",value:"1"},"1"),n.a.createElement("option",{key:"2",value:"2"},"2"),n.a.createElement("option",{key:"3",value:"3"},"3")))),n.a.createElement(w.a.Row,null,n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Label,null,"Filter maximum value"),n.a.createElement(w.a.Control,{type:"number",min:"10",step:"5",value:this.state.selectedFilter,onChange:this.handleFilterChange,required:!0}))),n.a.createElement(b.a.Footer,null,n.a.createElement(v.a,{type:"submit"},"Create"),n.a.createElement(v.a,{variant:"secondary",onClick:this.handleClose},"Cancel"))))))}}]),t}(r.Component),S=a(61),j=a.n(S),k=a(58),O=a.n(k),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleRemoveChart=function(){a.props.clearChart(a.props.chartNumber)},a.state={modalShow:!1,verticallyCenter:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.chart.series?n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{highcharts:d.a,options:this.props.chart}),n.a.createElement(O.a,{trigger:["hover","focus"],overlay:L},n.a.createElement("button",{className:"remove-chart",onClick:this.handleRemoveChart},"X"))):n.a.createElement(E,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},loadChartData:this.props.loadChartData,chartNumber:this.props.chartNumber})}}]),t}(r.Component),L=n.a.createElement(j.a,{id:"popover-trigger-hover-focus"},"Close chart"),N=x,D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={charts:a.props.charts,loadChartData:a.props.loadChartData,clearChart:a.props.clearChart},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.charts.map(function(t,a){return n.a.createElement("div",{key:a,className:"col span_"+(a%2+1)+"_of_2"},n.a.createElement(N,{loadChartData:e.props.loadChartData,clearChart:e.props.clearChart,chart:t,chartNumber:a}))});return n.a.createElement("div",{className:"chart-container"},n.a.createElement(n.a.Fragment,null,t))}}]),t}(r.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("span",{id:"light-switch-container",className:"btn-group-toggle"},n.a.createElement("label",{className:"btn btn-secondary"},n.a.createElement("i",{className:this.getSwitchIcon()}),n.a.createElement("input",{name:"lightSwitch",type:"checkbox",checked:this.props.lightSwitched,onChange:this.props.onLightSwitch})))}},{key:"getSwitchIcon",value:function(){var e="fa-lightbulb ";return e+=this.props.lightSwitched?"fas":"far"}}]),t}(n.a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("i",{className:"far fa-chart-bar"}),n.a.createElement("span",{id:"title"},"Star Wars API React Charts"),n.a.createElement(P,{lightSwitched:this.props.lightSwitched,onLightSwitch:this.props.onLightSwitch,id:"lightSwitch"})))}}]),t}(n.a.Component),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleLightSwitch=function(){console.log("handled switch",a.state.charts);var e=[{},{},{},{}];a.setState({isLightSwitched:!a.state.isLightSwitched},function(){for(var t=0;t<4;t++)a.state.charts[t].title&&(e[t]=a.createGraphBody(t));a.setState({charts:e})})},a.createGraphBody=function(e,t,r,n){var l,s=a.getCurrentTheme(),o=r?a.getChartTitle(r,n):a.state.charts[e].title.text;return l=a.state.charts[e].yAxis?a.state.charts[e].yAxis.title.text:a.getUnitofMeasurement(n),{title:{text:o,style:{color:s.textColor}},chart:{backgroundColor:s.backgroundColor,type:"column"},legend:{enabled:!1},xAxis:{labels:{style:{color:s.textColor}},type:"category"},yAxis:{gridLineColor:s.gridColor,labels:{style:{color:s.textColor}},title:{style:{color:s.textColor},text:l}},series:[{colorByPoint:!0,data:t||a.state.charts[e].series[0].data}]}},a.clearChart=function(e){var t=a.state.charts;t[e]={},a.setState({charts:t})},a.loadChartData=function(e,t,r,n,l){var s=a.state.charts;fetch("https://swapi.co/api/"+e+"/?page="+r).then(function(e){return e.json()}).then(function(r){s[n]=a.createGraphBody(n,a.createChartData(r.results,t,l),a.getChartTitle(e,t),t),a.setState({isLoaded:!0,charts:s})},function(e){a.setState({isLoaded:!0,error:e})})},a.createChartData=function(e,t,a){var r=[],n=!0,l=!1,s=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var i=o.value;parseInt(i[t])<a&&r.push({name:i.name,y:parseInt(i[t])})}}catch(h){l=!0,s=h}finally{try{n||null==c.return||c.return()}finally{if(l)throw s}}return r},a.getUnitofMeasurement=function(e){var t;return"crew"===e||"passengers"===e?t="People":"length"===e?t="Meters":"mass"===e?t="Kilograms":"height"===e&&(t="Centimeters"),t},a.getChartTitle=function(e,t){var r;return r=t.charAt(0).toUpperCase()+t.slice(1)+" of "+e,a.state.charts[0].title&&console.log("Old title",a.state.charts[0].title.text),r},a.state={error:null,isLoaded:!1,isLightSwitched:!1,charts:[{},{},{},{}]},a.loadChartData("starships","crew","1",0,220),a.loadChartData("people","height","2",3,220),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getCurrentTheme",value:function(){return this.state.isLightSwitched?B:A}},{key:"getCurrentTheme",value:function(){return this.state.isLightSwitched?B:A}},{key:"getCurrentThemeName",value:function(){return this.state.isLightSwitched?"dark-theme":"light-theme"}},{key:"render",value:function(){return document.getElementsByTagName("html")[0].className=this.getCurrentThemeName(),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:this.getCurrentThemeName()},n.a.createElement(T,{lightSwitched:this.state.isLightSwitched,onLightSwitch:this.handleLightSwitch}),n.a.createElement(D,{id:"chart-container",loadChartData:this.loadChartData.bind(this),clearChart:this.clearChart.bind(this),charts:this.state.charts})))}}]),t}(r.Component),B={textColor:"#E0E0E3",gridColor:"#707073",backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:0},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]}},A={textColor:"#333333",gridColor:"#e6e6e6",backgroundColor:"#ffffff"},G=F;Object(l.render)(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(126)},67:function(e,t,a){},71:function(e,t,a){}},[[62,2,1]]]);
//# sourceMappingURL=main.f474bb02.chunk.js.map