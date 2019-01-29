(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11);a(68),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);var o=a(36),s=a(12),l=a(13),i=a(15),h=a(14),u=a(16),m=(a(72),a(58)),g=a.n(m),p=a(59),d=a.n(p),f=a(60),b=a(24),C=a.n(b),v=a(28),E=a.n(v),y=a(7),w=a.n(y),S=function(e){function t(e,a){var r;return Object(s.a)(this,t),(r=Object(i.a)(this,Object(h.a)(t).call(this,e,a))).handleClose=function(){r.setState({show:!1})},r.handleShow=function(){r.setState({show:!0})},r.handleCategoryChange=function(e){var t,a=e.target.value;t="starships"===a||"vehicles"===a?["crew","length","passengers"]:["height","mass"],r.setState({selectedCategory:a,selectedSubCategory:t[0],subCategories:t})},r.handleChange=function(e){r.setState(Object(f.a)({},e.target.name,e.target.value))},r.handleSubmit=function(e){var t=e.currentTarget;e.preventDefault(),e.stopPropagation(),!1===t.checkValidity()?r.setState({validated:!0}):(r.setState({show:!1}),r.props.loadChart(r.state.selectedCategory,r.state.selectedSubCategory,r.state.selectedPage,r.props.chartNumber,r.state.selectedFilter))},r.categories=["starships","vehicles","people"],r.state={show:r.props.show,validated:!1,subCategories:["crew","passengers","length"],selectedCategory:"starships",selectedSubCategory:"crew",selectedPage:"1",selectedFilter:220},r}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;e=this.props.chart.title&&"loading"===this.props.chart.title.text?n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-sync-alt loading-spinner"})," Loading"):n.a.createElement("span",null,"Add chart");var a=this.state.validated,r=this.categories.map(function(e,t){return n.a.createElement("option",{key:t,index:t,value:e},e)}),c=this.state.subCategories.map(function(e,t){return n.a.createElement("option",{key:t,value:e},e)}),o="https://swapi.co/api/"+this.state.selectedCategory+"/?page="+this.state.selectedPage;return n.a.createElement("div",null,n.a.createElement(E.a,{variant:"secondary",onClick:this.handleShow,className:"add-chart"},e),n.a.createElement(C.a,{show:this.state.show,onHide:this.handleClose},n.a.createElement(C.a.Header,{closeButton:!0},n.a.createElement(C.a.Title,null,"Add chart")),n.a.createElement(C.a.Body,null,n.a.createElement(w.a,{noValidate:!0,validated:a,onSubmit:function(e){return t.handleSubmit(e)}},n.a.createElement(w.a.Row,null,n.a.createElement(w.a.Group,{className:"dialog-select-group"},n.a.createElement(w.a.Label,null,"Category"),n.a.createElement(w.a.Control,{onChange:this.handleCategoryChange,as:"select"},r)),n.a.createElement(w.a.Group,{className:"dialog-select-group"},n.a.createElement(w.a.Label,null,"Property"),n.a.createElement(w.a.Control,{name:"selectedSubCategory",onChange:this.handleChange,as:"select",value:this.state.selectedSubCategory},c)),n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Label,null,"Page"),n.a.createElement(w.a.Control,{name:"selectedPage",onChange:this.handleChange,as:"select"},n.a.createElement("option",{key:"1",value:"1"},"1"),n.a.createElement("option",{key:"2",value:"2"},"2"),n.a.createElement("option",{key:"3",value:"3"},"3")))),n.a.createElement(w.a.Row,null,n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Label,null,"Filter maximum value"),n.a.createElement(w.a.Control,{name:"selectedFilter",type:"number",min:"10",step:"5",value:this.state.selectedFilter,onChange:this.handleChange,required:!0}))),n.a.createElement(w.a.Row,null,n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Label,null,"Request URL ",n.a.createElement("i",{className:"fas fa-link"})),n.a.createElement("br",null),n.a.createElement("a",{className:"form-control",target:"_blank",rel:"noopener noreferrer",href:o},o))),n.a.createElement(C.a.Footer,null,n.a.createElement(E.a,{type:"submit"},"Create"),n.a.createElement(E.a,{variant:"secondary",onClick:this.handleClose},"Cancel"))))))}}]),t}(r.Component),N=a(23),k=a.n(N),j=a(22),O=a.n(j),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleRemovePage=function(){a.props.clearChart(a.props.chartNumber)},a.handleLoadNextPage=function(){a.props.chartInfo[2]<3&&a.props.changeChartPage(a.props.chartNumber,1)},a.handleLoadPreviousPage=function(){a.props.chartInfo[2]>1&&a.props.changeChartPage(a.props.chartNumber,-1)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="3"==this.props.chartInfo[2]?"chart-button-disabled":"chart-button",t="1"==this.props.chartInfo[2]?"chart-button-disabled":"chart-button";return this.props.chart.series?n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{highcharts:g.a,options:this.props.chart}),n.a.createElement("span",{className:"chart-button-container"},n.a.createElement(O.a,{trigger:["hover","focus"],overlay:I},n.a.createElement("button",{className:t,onClick:this.handleLoadPreviousPage},n.a.createElement("i",{className:"fas fa-angle-left"}))),n.a.createElement(O.a,{trigger:["hover","focus"],overlay:P},n.a.createElement("button",{className:e,onClick:this.handleLoadNextPage},n.a.createElement("i",{className:"fas fa-angle-right"}))),n.a.createElement(O.a,{trigger:["hover","focus"],overlay:x},n.a.createElement("button",{className:"chart-button",onClick:this.handleRemovePage},n.a.createElement("i",{className:"fas fa-times"}))))):n.a.createElement(S,{chart:this.props.chart,chartInfo:this.props.chartInfo,loadChart:this.props.loadChart,chartNumber:this.props.chartNumber})}}]),t}(r.Component),x=n.a.createElement(k.a,{id:"popover-trigger-hover-focus"},"Close chart"),P=n.a.createElement(k.a,{id:"popover-trigger-hover-focus"},"Next page"),I=n.a.createElement(k.a,{id:"popover-trigger-hover-focus"},"Previous page"),T=L,A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.charts.map(function(t,a){return n.a.createElement("div",{key:a,className:"col span_"+(a%2+1)+"_of_2"},n.a.createElement(T,{loadChart:e.props.loadChart,clearChart:e.props.clearChart,changeChartPage:e.props.changeChartPage,chart:t,chartInfo:e.props.chartInfo[a],chartNumber:a}))});return n.a.createElement("div",{className:"chart-container"},n.a.createElement(n.a.Fragment,null,t))}}]),t}(r.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("span",{id:"light-switch-container",className:"btn-group-toggle"},n.a.createElement(O.a,{placement:"left",trigger:["hover"],overlay:F},n.a.createElement("label",{className:"btn btn-secondary"},n.a.createElement("i",{className:this.getSwitchIcon()}),n.a.createElement("input",{name:"lightSwitch",type:"checkbox",checked:this.props.lightSwitched,onChange:this.props.onLightSwitch}))))}},{key:"getSwitchIcon",value:function(){var e="fa-lightbulb ";return e+=this.props.lightSwitched?"fas":"far"}}]),t}(n.a.Component),F=n.a.createElement(k.a,{id:"popover-trigger-hover-focus"},"Toggle dark theme"),R=B,G=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"https://ctamas.github.io/swapiCharts/"},n.a.createElement("i",{className:"far fa-chart-bar"}),n.a.createElement("span",{id:"title"},"Star Wars API React Charts"),n.a.createElement(R,{lightSwitched:this.props.lightSwitched,onLightSwitch:this.props.onLightSwitch,id:"lightSwitch"})))}}]),t}(n.a.Component),U=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleLightSwitch=function(){var e=[{},{},{},{}];a.setState({isLightSwitched:!a.state.isLightSwitched},function(){for(var t=0;t<4;t++)a.state.charts[t].title&&Object.assign(e[t],a.createChartBody(t));a.setState({charts:e})})},a.createChartBody=function(e,t,r,n){var c,o=a.getCurrentTheme();return a.chartNames[e]=r?a.getChartTitle(r,n):a.chartNames[e],c=a.state.charts[e].yAxis?a.state.charts[e].yAxis.title.text:a.getUnitofMeasurement(n),{title:{text:a.chartNames[e],style:{color:o.textColor}},chart:{backgroundColor:o.backgroundColor,type:"column"},legend:{enabled:!1},xAxis:{labels:{style:{color:o.textColor}},type:"category"},yAxis:{gridLineColor:o.gridColor,labels:{style:{color:o.textColor}},title:{style:{color:o.textColor},text:c}},series:[{colorByPoint:!0,data:t||a.state.charts[e].series[0].data}]}},a.loadChart=function(e,t,r,n,c){var o=a.state.charts,s=a.state.chartInfo;s[n]=[e,t,r,n,c],o[n]={title:{text:"loading"}},a.setState({charts:o,chartInfo:s}),fetch("https://swapi.co/api/"+e+"/?page="+r).then(function(e){return e.json()}).then(function(r){o[n]=a.createChartBody(n,a.createChartData(r.results,t,c),e,t),a.setState({isLoaded:!0,charts:o})},function(e){a.setState({isLoaded:!0,error:e})})},a.createChartData=function(e,t,a){var r=[],n=!0,c=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var i=s.value;parseInt(i[t])<a&&r.push({name:i.name,y:parseInt(i[t])})}}catch(h){c=!0,o=h}finally{try{n||null==l.return||l.return()}finally{if(c)throw o}}return r},a.getUnitofMeasurement=function(e){var t;return"crew"===e||"passengers"===e?t="People":"length"===e?t="Meters":"mass"===e?t="Kilograms":"height"===e&&(t="Centimeters"),t},a.getChartTitle=function(e,t){return t.charAt(0).toUpperCase()+t.slice(1)+" of "+e},a.clearChart=function(e){var t=a.state.charts;t[e]={},a.setState({charts:t})},a.changeChartPage=function(e,t){var r,n=a.state.chartInfo;n[e][2]=parseInt(n[e][2])+t,(r=a).loadChart.apply(r,Object(o.a)(n[e]))},a.state={error:null,isLoaded:!1,isLightSwitched:!1,charts:[{},{},{},{}],chartInfo:[["starships","crew","1",0,220],[],[],["people","height","2",3,220]]},a.chartNames=[];for(var r=0;r<4;r++){var n;if(a.state.chartInfo[r].length)(n=a).loadChart.apply(n,Object(o.a)(a.state.chartInfo[r]))}return a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getCurrentTheme",value:function(){return this.state.isLightSwitched?_:D}},{key:"getCurrentThemeName",value:function(){return this.state.isLightSwitched?"dark-theme":"light-theme"}},{key:"render",value:function(){return document.getElementsByTagName("html")[0].className=this.getCurrentThemeName(),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:this.getCurrentThemeName()},n.a.createElement(G,{lightSwitched:this.state.isLightSwitched,onLightSwitch:this.handleLightSwitch}),n.a.createElement(A,{id:"chart-container",loadChart:this.loadChart.bind(this),clearChart:this.clearChart.bind(this),changeChartPage:this.changeChartPage.bind(this),charts:this.state.charts,chartInfo:this.state.chartInfo})))}}]),t}(r.Component),_={textColor:"#E0E0E3",gridColor:"#707073",backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:0},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]}},D={textColor:"#333333",gridColor:"#e6e6e6",backgroundColor:"#ffffff"},M=U;Object(c.render)(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a(127)},68:function(e,t,a){},72:function(e,t,a){}},[[63,2,1]]]);
//# sourceMappingURL=main.fea16879.chunk.js.map