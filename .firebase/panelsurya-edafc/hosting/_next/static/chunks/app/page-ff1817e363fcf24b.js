(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6938:function(e,t,a){Promise.resolve().then(a.bind(a,8273))},2356:function(e,t,a){"use strict";a.d(t,{G:function(){return s}});let s=a(4090).createContext()},9040:function(e,t,a){"use strict";a.d(t,{q:function(){return i}});var s=a(3827),l=a(4090);a(6959);var r=a(6142),n=a(1748);let i={apiKey:"AIzaSyCcmyjVxC8E2Lbl1FvMs0_mCkcJ_x5x87k",authDomain:"panelsurya-edafc.firebaseapp.com",databaseURL:"https://panelsurya-edafc-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"panelsurya-edafc",storageBucket:"panelsurya-edafc.appspot.com",messagingSenderId:"764730679010",appId:"764730679010:web:14d2371c364a94630408bb",measurementId:"G-NDFYZRRRZT"},c=(0,r.ZF)(i),d=(0,n.N8)(c);t.Z=function(){let[e,t]=(0,l.useState)(null);if((0,l.useEffect)(()=>{let e=(0,n.iH)(d,"/"),a=(0,n.jM)(e,e=>{e.exists()?t(e.val()):console.log("No data available")});return()=>{(0,n.S1)(e,"value",a)}},[]),!e)return(0,s.jsx)("div",{children:"Loading..."});let a={"X axis angle":"Posisi X","Y axis angle":"Posisi Y"},r={"X axis angle":"Y axis angle",Current:"Energy",Power:"Voltage",Time:""},i={"X axis angle":"deg","Y axis angle":"deg",Current:"A",Energy:"W",Power:"W",Voltage:"V",Time:""},c={"X axis angle":"red","Y axis angle":"red",Current:"green",Energy:"green",Power:"orange",Voltage:"orange",TIme:"blue"};return(0,s.jsx)("div",{className:"flex-row md:flex gap-2 justify-start",children:Object.entries(e).map(e=>{let[t,l]=e;return(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("h2",{className:"text-xl font-bold mb-2",children:t}),Object.entries(l).reduce((e,t,l,n)=>{let[d,o]=t,x=a[d]||d,m="".concat(o," ").concat(i[d]||"");if(r[d]){let t=n.find(e=>{let[t]=e;return t===r[d]});if(t){let a="".concat(t[1]," ").concat(i[t[0]]||"");e.push((0,s.jsxs)("div",{className:"cursor-pointer transition-all duration-500 hover:translate-y-2 h-50 bg-neutral-50 rounded-lg shadow-xl flex flex-col items-start justify-center gap-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 p-5 mb-4 sm:w-custom-large cs:w-custom-large-medium md:w-custom-medium lg:w-[480px]",children:[(0,s.jsx)("div",{className:"icon-shape icon-shape-primary rounded-lg mr-4 sm:mr-0  bg-gray-400 h-16 w-16 flex items-center justify-center",children:(0,s.jsx)("svg",{className:"icon h-8 w-8 fill-current",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",cx:"16",cy:"16",r:"13",fill:c[d],"clip-rule":"evenodd"})})}),(0,s.jsx)("h3",{className:"text-gray-700 text-lg font-semibold mb-1",children:x}),(0,s.jsx)("p",{className:"text-black font-extrabold text-3xl",children:m}),(0,s.jsx)("h3",{className:"text-gray-700 text-lg font-semibold mb-1",children:t[0]}),(0,s.jsx)("p",{className:"text-black font-extrabold text-3xl",children:a})]},d)),n.splice(n.indexOf(t),1)}}else e.find(e=>"rest"===e.key)||e.push((0,s.jsx)("div",{className:"card bg-white rounded-lg shadow-md p-6 mb-4",children:(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-black font-extrabold text-1xl",children:n.map((e,t)=>9===t?e[1]+"   ":e[1]).join("")})})},"rest")),n=[];return e},[])]},t)})})}},8295:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var s=a(3827),l=a(4090),r=a(9040),n=a(6142),i=a(8121);let c=(0,n.ZF)(r.q),d=(0,i.ad)(c),o=()=>{let[e,t]=(0,l.useState)(null),[a,s]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{(async()=>{try{let e=(await (0,i.PL)((0,i.hJ)(d,"Solar"))).docs.map(e=>e.data());t(e),setPageCount(Math.ceil(e.length/pageSize))}catch(e){console.error("Error fetching data:",e)}finally{s(!1)}})()},[]),e};var x=a(8024),m=a(7535),g=a(2356),p=e=>{let{isOpen:t,setIsOpen:a}=e,r=o(),{setDashboardContent:n}=(0,l.useContext)(g.G);return t&&(0,s.jsxs)("nav",{className:"sidebar z-10 transform transition-transform duration-500 ease-in-out ".concat(t?"translate-x-0":"-translate-x-full"," bg-gray-900 text-white h-screen md:w-[250px] lg:left-0 w-full md:absolutetop-0 bottom-0 left-0 overflow-y-auto sm:w-64 fixed"),children:[(0,s.jsx)("div",{className:"text-gray-100 text-xl",children:(0,s.jsxs)("div",{className:"p-2.5 mt-1 flex items-center",children:[(0,s.jsx)("i",{className:"bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"}),(0,s.jsx)("h1",{className:"font-bold text-gray-200 text-[15px] ml-4",children:"Sidebar"}),(0,s.jsx)("i",{className:"bi bi-x ml-20 lg:hidden"})]})}),(0,s.jsxs)("div",{onClick:()=>n("default"),className:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white",children:[(0,s.jsx)(x.G,{icon:m.HLz,className:"mr-2"}),(0,s.jsx)("span",{className:"text-[15] ml-4 text-gray-200",children:"Dashboard"})]}),(0,s.jsxs)("div",{onClick:()=>n("table"),className:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white",children:[(0,s.jsx)(x.G,{icon:m.enB,className:"mr-2"}),(0,s.jsx)("span",{className:"text-[15] ml-4 text-gray-200",children:"Solar Cell"})]}),(0,s.jsxs)("div",{onClick:()=>{let e="Time,X_axis_angle (deg),Y_axis_angle (deg),Power (W),Energy (W),Current (A),Voltage (V)\n";r.forEach(t=>{e+="".concat(t.Time,",").concat(t.X_axis_angle," deg,").concat(t.Y_axis_angle," deg,").concat(t.Power," W,").concat(t.Energy," W,").concat(t.Current," A,").concat(t.Voltage," V\n")});let t=new Blob([e],{type:"text/csv;charset=utf-8;"});saveAs(t,"solar_data.csv")},className:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white",children:[(0,s.jsx)(x.G,{icon:m.q7m,className:"mr-2"}),(0,s.jsx)("span",{className:"text-[15] ml-4 text-gray-200",children:"Download CSV"})]}),(0,s.jsx)("hr",{className:"my-4 text-gray-600"})]})}},8273:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var s=a(3827),l=a(4090),r=a(4232);a(6959),a(703);var n=a(6142);a(1748);var i=a(9040),c=a(8121),d=a(482),o=a.n(d),x=a(2599);let m=(0,n.ZF)(i.q),g=(0,c.ad)(m);var p=function(){let[e,t]=(0,l.useState)([]),[a,r]=(0,l.useState)(!0),[n,i]=(0,l.useState)(10),[d,m]=(0,l.useState)(0),[p,u]=(0,l.useState)(0),[h,b]=(0,l.useState)("asc");if((0,l.useEffect)(()=>{(async()=>{try{let e=(await (0,c.PL)((0,c.hJ)(g,"Solar"))).docs.map(e=>e.data());t(e),m(Math.ceil(e.length/n))}catch(e){console.error("Error fetching data:",e)}finally{r(!1)}})()},[]),a)return(0,s.jsx)("div",{children:"Loading..."});let f=e.sort((e,t)=>{let a=new Date(e.Time),s=new Date(t.Time);return"asc"===h?a-s:s-a}).slice(p,p+n);return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[(0,s.jsxs)("div",{className:"mt-4 flex items-center",children:[(0,s.jsx)("span",{className:"text-gray-700 mr-2",children:"Items per page:"}),(0,s.jsxs)("select",{value:n,onChange:t=>{let a=parseInt(t.target.value,10);i(a),u(0),m(Math.ceil(e.length/a))},className:"ml-2 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",children:[(0,s.jsx)("option",{value:10,children:"10"}),(0,s.jsx)("option",{value:20,children:"20"}),(0,s.jsx)("option",{value:50,children:"50"}),(0,s.jsx)("option",{value:100,children:"100"}),(0,s.jsx)("option",{value:-1,children:"Show all"})]}),(0,s.jsx)("button",{className:"ml-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:()=>{let e="Time,X_axis_angle (deg),Y_axis_angle (deg),Power (W),Energy (W),Current (A),Voltage (V)\n";f.forEach(t=>{e+="".concat(t.Time,",").concat(t.X_axis_angle," deg,").concat(t.Y_axis_angle," deg,").concat(t.Power," W,").concat(t.Energy," W,").concat(t.Current," A,").concat(t.Voltage," V\n")});let t=new Blob([e],{type:"text/csv;charset=utf-8;"});(0,x.saveAs)(t,"solar_data.csv")},children:"Download CSV"})]}),(0,s.jsx)(o(),{breakLabel:"...",nextLabel:">",onPageChange:t=>{u(t.selected*n%e.length)},pageRangeDisplayed:5,pageCount:d,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:"flex justify-center mt-4",pageLinkClassName:"block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray:100 hover:text-gray-700 rounded-md",previousLinkClassName:"block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md",nextLinkClassName:"block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md",activeLinkClassName:"block px-3 py-2 leading-tight text-black bg-indigo-500 border border-indigo-500 rounded-md",breakLinkClassName:"block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 active:bg-blue-100 hover:text-gray-700 rounded-md"}),(0,s.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,s.jsx)("thead",{className:"bg-gray-50",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"#"}),(0,s.jsxs)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:["Time",(0,s.jsx)("button",{className:"ml-2 text-sm font-medium text-gray-500 hover:text-gray-900",onClick:()=>{b(e=>"asc"===e?"desc":"asc")},children:"asc"===h?"▲":"▼"})]}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"X_axis_angle (deg)"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Y_axis_angle (deg)"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Power (W)"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Energy (W)"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Current (A)"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Voltage (V)"})]})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:f.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsx)("div",{className:"text-xl text-gray-900",children:p+t+1})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsx)("div",{className:"text-xl text-gray-900",children:e.Time})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsxs)("div",{className:"text-xl text-gray-900",children:[e.X_axis_angle," deg"]})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsxs)("div",{className:"text-xl text-gray-900",children:[e.Y_axis_angle," deg"]})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsxs)("div",{className:"text-xl text-gray-900",children:[e.Power," W"]})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsxs)("div",{className:"text-xl text-gray-900",children:[e.Energy," W"]})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsxs)("div",{className:"text-xl text-gray-900",children:[e.Current," A"]})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsxs)("div",{className:"text-xl text-gray-900",children:[e.Voltage," V"]})})]},t))})]})]})};a(8295),a(8024);var u=a(2356);let h=(0,r.default)(()=>Promise.resolve().then(a.bind(a,8295)),{loadableGenerated:{webpack:()=>[8295]},ssr:!1});function b(){let[e,t]=(0,l.useState)(!0),[a,r]=(0,l.useState)("default");return console.log("isOpen",e),(0,s.jsx)(u.G.Provider,{value:{dashboardContent:a,setDashboardContent:r},children:(0,s.jsxs)("main",{className:"py-1 flex sm:flex-col  md:flex-col flex-row",children:[(0,s.jsxs)("div",{id:"menuToggle",className:"fixed z-50  inline-block pl-60 sm:pl-48 md:pl-48",children:[(0,s.jsx)("input",{id:"checkbox",type:"checkbox",class:"hidden",checked:e,onChange:e=>{t(e.target.checked);let a=document.getElementById("menuToggle"),s=document.getElementById("mainpage");e.target.checked?(a.classList.add("pl-60"),a.classList.add("sm:pl-48"),a.classList.add("md:pl-48"),a.classList.remove("pl-4"),a.classList.remove("sm:pl-4"),a.classList.remove("md:pl-4"),s.classList.add("pl-2"),s.classList.add("sm:pl-64"),s.classList.add("md:pl-64"),s.classList.remove("pl-16"),s.classList.remove("sm:pl-16"),s.classList.remove("md:pl-16")):(a.classList.remove("pl-60"),a.classList.remove("sm:pl-48"),a.classList.remove("md:pl-48"),a.classList.add("pl-4"),a.classList.add("sm:pl-4"),a.classList.add("md:pl-4"),s.classList.remove("pl-2"),s.classList.remove("sm:pl-64"),s.classList.remove("md:pl-64"),s.classList.add("pl-16"),s.classList.add("sm:pl-16"),s.classList.add("md:pl-16"))}}),(0,s.jsxs)("label",{for:"checkbox",class:"toggle block cursor-pointer w-4 h-4 mx-auto",children:[(0,s.jsx)("div",{className:"bar bar--top absolute left-0 right-0 h-1 rounded bg-blue-600"}),(0,s.jsx)("div",{className:"bar bar--middle absolute top-1/2 left-0 right-0 h-1 opacity-100 transition-opacity transform -translate-y-1/2 rounded bg-blue-600"}),(0,s.jsx)("div",{className:"bar bar--bottom absolute top-full left-0 right-0 h-1 rounded bg-blue-600"})]})]}),(0,s.jsx)(h,{isOpen:e,setIsOpen:t}),(0,s.jsxs)("div",{id:"mainpage",className:"pl-2 sm:pl-64 md:pl-64 lg:pl-62  flex-col",children:[" ",(0,s.jsx)("div",{className:"py-2 ",children:(0,s.jsx)("div",{className:"bg-blue-200 text-blue-700 p-4 rounded-md",role:"alert",children:"Selamat Datang!"})}),(0,s.jsx)("div",{className:"flex flex-row flex-wrap box-border",children:"table"===a?(0,s.jsx)(p,{}):(0,s.jsx)(i.Z,{})})]})]})})}},6959:function(e,t,a){"use strict";var s=a(9079);s.env.WEB_API,s.env.AUTH_DOMAIN,s.env.DATABASE_URL,s.env.PROJECT_ID,s.env.APP_ID,s.env.MESSAGING_SENDER_ID,s.env.STORAGE_BUCKET,s.env.MEASUREMENT_ID}},function(e){e.O(0,[676,358,481,244,971,69,744],function(){return e(e.s=6938)}),_N_E=e.O()}]);