(function(){"use strict";var e={6994:function(e,o,s){var a=s(5130),t=s(6768);const l={id:"app"};function n(e,o,s,a,n,r){const u=(0,t.g2)("router-link"),i=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",l,[(0,t.Lk)("nav",null,[(0,t.bF)(u,{to:"/"},{default:(0,t.k6)((()=>o[0]||(o[0]=[(0,t.eW)("Home")]))),_:1}),(0,t.bF)(u,{to:"/login"},{default:(0,t.k6)((()=>o[1]||(o[1]=[(0,t.eW)("Login")]))),_:1}),(0,t.bF)(u,{to:"/admin-timetable"},{default:(0,t.k6)((()=>o[2]||(o[2]=[(0,t.eW)("Admin Timetable")]))),_:1}),(0,t.bF)(u,{to:"/course-management"},{default:(0,t.k6)((()=>o[3]||(o[3]=[(0,t.eW)("Course Management")]))),_:1}),(0,t.bF)(u,{to:"/classroom-management"},{default:(0,t.k6)((()=>o[4]||(o[4]=[(0,t.eW)("Classroom Management")]))),_:1}),(0,t.bF)(u,{to:"/admin-page"},{default:(0,t.k6)((()=>o[5]||(o[5]=[(0,t.eW)("Admin Page")]))),_:1})]),(0,t.bF)(i)])}var r={name:"App"},u=s(1241);const i=(0,u.A)(r,[["render",n]]);var d=i,m=s(1387),c=s.p+"img/vit-logo.7af90ec8.png";const p={class:"homepage"},k={class:"hero"};function h(e,o,s,a,l,n){const r=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",p,[(0,t.Lk)("header",null,[o[6]||(o[6]=(0,t.Lk)("div",{class:"logo"},[(0,t.Lk)("img",{src:c,alt:"VIT Logo",height:"60"})],-1)),(0,t.Lk)("nav",null,[(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.bF)(r,{to:"/course"},{default:(0,t.k6)((()=>o[2]||(o[2]=[(0,t.eW)("Course")]))),_:1})]),(0,t.Lk)("li",null,[(0,t.bF)(r,{to:"/campus"},{default:(0,t.k6)((()=>o[3]||(o[3]=[(0,t.eW)("Campus")]))),_:1})]),(0,t.Lk)("li",null,[(0,t.bF)(r,{to:"/about"},{default:(0,t.k6)((()=>o[4]||(o[4]=[(0,t.eW)("About")]))),_:1})]),(0,t.Lk)("li",null,[(0,t.bF)(r,{to:"/profile"},{default:(0,t.k6)((()=>o[5]||(o[5]=[(0,t.eW)("My profile")]))),_:1})])])]),(0,t.Lk)("button",{class:"login-button",onClick:o[0]||(o[0]=(...e)=>n.login&&n.login(...e))},"LOGIN")]),(0,t.Lk)("section",k,[o[7]||(o[7]=(0,t.Lk)("h1",null,"Welcome to the Victorian Institute of Technology",-1)),o[8]||(o[8]=(0,t.Lk)("p",null,"Explore our courses, campuses, and who we are.",-1)),(0,t.Lk)("button",{class:"cta-button",onClick:o[1]||(o[1]=(...e)=>n.goToLoginPage&&n.goToLoginPage(...e))},"Get Started")])])}s(4114);var C={methods:{login(){this.$router.push("/login")},goToLoginPage(){this.$router.push({path:"/login"})}}};const g=(0,u.A)(C,[["render",h],["__scopeId","data-v-ca32f5a2"]]);var L=g;const b={class:"admin-page"},y={class:"grid-container"};function T(e,o,s,a,l,n){return(0,t.uX)(),(0,t.CE)("div",b,[(0,t.Lk)("header",null,[o[6]||(o[6]=(0,t.Lk)("img",{src:c,alt:"VIT Logo",height:"60"},null,-1)),(0,t.Lk)("nav",null,[(0,t.Lk)("button",{onClick:o[0]||(o[0]=(...e)=>n.goHome&&n.goHome(...e))},"Homepage"),(0,t.Lk)("button",{onClick:o[1]||(o[1]=(...e)=>n.logout&&n.logout(...e))},"Logout")])]),(0,t.Lk)("section",y,[(0,t.Lk)("div",{class:"grid-item",onClick:o[2]||(o[2]=(...e)=>n.goToCourseManagement&&n.goToCourseManagement(...e))}," Course Management "),(0,t.Lk)("div",{class:"grid-item",onClick:o[3]||(o[3]=(...e)=>n.goToClassroomManagement&&n.goToClassroomManagement(...e))}," Classroom Management "),(0,t.Lk)("div",{class:"grid-item",onClick:o[4]||(o[4]=(...e)=>n.goToScheduleView&&n.goToScheduleView(...e))}," Timetable Auto Generation "),(0,t.Lk)("div",{class:"grid-item",onClick:o[5]||(o[5]=(...e)=>n.goToAdminTimetable&&n.goToAdminTimetable(...e))}," Admin Timetable view ")])])}var v={methods:{goHome(){this.$router.push("/")},logout(){},goToCourseManagement(){this.$router.push("/course-management")},goToClassroomManagement(){this.$router.push("/classroom-management")},goToScheduleView(){this.$router.push("/schedule-management")},goToAdminTimetable(){this.$router.push("/admin-timetable")}}};const f=(0,u.A)(v,[["render",T],["__scopeId","data-v-05b99da0"]]);var I=f,A=s(4232);const w={class:"login-page"},E={class:"login-container"},_={class:"input-group"},R={class:"msg"},P={class:"input-group"},F={class:"msg"};function X(e,o,s,l,n,r){return(0,t.uX)(),(0,t.CE)("div",w,[(0,t.Lk)("div",E,[o[7]||(o[7]=(0,t.Lk)("img",{src:c,alt:"VIT Logo",class:"logo"},null,-1)),o[8]||(o[8]=(0,t.Lk)("h2",null,"Login",-1)),(0,t.Lk)("form",{onSubmit:o[4]||(o[4]=(0,a.D$)(((...e)=>r.login&&r.login(...e)),["prevent"]))},[(0,t.Lk)("div",_,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>n.username=e),type:"text",placeholder:"Username",required:"",class:"input-box",onChange:o[1]||(o[1]=(...e)=>r.verifyName&&r.verifyName(...e))},null,544),[[a.Jo,n.username]]),(0,t.Lk)("span",R,(0,A.v_)(n.nameError),1)]),(0,t.Lk)("div",P,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>n.password=e),type:"password",placeholder:"Password",required:"",class:"input-box",onChange:o[3]||(o[3]=(...e)=>r.verifyPwd&&r.verifyPwd(...e))},null,544),[[a.Jo,n.password]]),(0,t.Lk)("span",F,(0,A.v_)(n.passwordError),1)]),o[6]||(o[6]=(0,t.Lk)("button",{type:"submit",class:"login-button"},"LOGIN",-1))],32),(0,t.Lk)("button",{onClick:o[5]||(o[5]=(...e)=>r.goToHome&&r.goToHome(...e)),class:"home-button"},"Back to Homepage")])])}var D={data(){return{username:"",password:"",nameError:"",passwordError:""}},methods:{verifyName(){const e=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return e.test(this.username)?(this.nameError="",!0):(this.nameError="Invalid email format.",!1)},verifyPwd(){return this.password.length<8?(this.passwordError="Password must be at least 8 characters long.",!1):(this.passwordError="",!0)},login(){this.verifyName()&&this.verifyPwd()&&this.$router.push("/admin-page")},goToHome(){this.$router.push("/")}}};const S=(0,u.A)(D,[["render",X],["__scopeId","data-v-449379f0"]]);var M=S;const q={class:"classroom-management-page"},W={class:"header-right"},V={class:"classroom-container"},U={class:"campus-selection"},$=["onClick"],H={key:1,class:"title"},J={key:2,class:"classroom-table"},N=["onClick"];function O(e,o,s,l,n,r){return(0,t.uX)(),(0,t.CE)("div",q,[(0,t.Lk)("header",null,[o[11]||(o[11]=(0,t.Lk)("div",{class:"header-left"},[(0,t.Lk)("img",{src:c,alt:"VIT Logo",height:"60"})],-1)),(0,t.Lk)("div",W,[(0,t.Lk)("button",{onClick:o[0]||(o[0]=e=>r.goToPage("/admin-page"))},"Back to Admin Page"),(0,t.Lk)("button",{onClick:o[1]||(o[1]=e=>r.goToPage("/"))},"Homepage"),(0,t.Lk)("button",{onClick:o[2]||(o[2]=(...e)=>r.logout&&r.logout(...e))},"Logout")])]),(0,t.Lk)("div",V,[o[16]||(o[16]=(0,t.Lk)("h2",null,"Classroom Management",-1)),(0,t.Lk)("div",U,[o[12]||(o[12]=(0,t.Lk)("h3",null,"Select Campus",-1)),(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.campuses,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e.id,onClick:o=>r.selectCampus(e.id),class:(0,A.C4)({active:n.selectedCampusId===e.id})},(0,A.v_)(e.name),11,$)))),128))])]),null!==n.selectedCampusId?((0,t.uX)(),(0,t.CE)("form",{key:0,onSubmit:o[10]||(o[10]=(0,a.D$)(((...e)=>r.addClassroom&&r.addClassroom(...e)),["prevent"])),class:"classroom-form"},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>n.newClassroom.RoomName=e),type:"text",placeholder:"Classroom/Lab Name",required:""},null,512),[[a.Jo,n.newClassroom.RoomName]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[4]||(o[4]=e=>n.newClassroom.RoomType=e),type:"number",placeholder:"Room Type (0 for Classroom, 1 for Lab)",required:""},null,512),[[a.Jo,n.newClassroom.RoomType]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[5]||(o[5]=e=>n.newClassroom.RoomAddress=e),type:"text",placeholder:"Location (Building/Level)",required:""},null,512),[[a.Jo,n.newClassroom.RoomAddress]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[6]||(o[6]=e=>n.newClassroom.RoomCapacity=e),type:"number",placeholder:"Capacity",required:""},null,512),[[a.Jo,n.newClassroom.RoomCapacity]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[7]||(o[7]=e=>n.newClassroom.RoomAvailableTimeStart=e),type:"number",placeholder:"Available Time Start (Hour)",required:""},null,512),[[a.Jo,n.newClassroom.RoomAvailableTimeStart]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[8]||(o[8]=e=>n.newClassroom.RoomAvailableTimeEnd=e),type:"number",placeholder:"Available Time End (Hour)",required:""},null,512),[[a.Jo,n.newClassroom.RoomAvailableTimeEnd]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[9]||(o[9]=e=>n.newClassroom.RoomAvailableDays=e),type:"number",placeholder:"Available Days",required:""},null,512),[[a.Jo,n.newClassroom.RoomAvailableDays]]),o[13]||(o[13]=(0,t.Lk)("button",{type:"submit",class:"add-button"},"Add Classroom",-1))],32)):(0,t.Q3)("",!0),null!==n.selectedCampusId?((0,t.uX)(),(0,t.CE)("div",H,[o[14]||(o[14]=(0,t.eW)("Total Classrooms: ")),(0,t.Lk)("span",null,(0,A.v_)(r.filteredClassrooms.length),1)])):(0,t.Q3)("",!0),null!==n.selectedCampusId&&r.filteredClassrooms.length>0?((0,t.uX)(),(0,t.CE)("table",J,[o[15]||(o[15]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"Classroom/Lab Name"),(0,t.Lk)("th",null,"Room Type"),(0,t.Lk)("th",null,[(0,t.eW)("Location "),(0,t.Lk)("br"),(0,t.eW)("Building/Level")]),(0,t.Lk)("th",null,"Capacity"),(0,t.Lk)("th",null,"Available Time Start"),(0,t.Lk)("th",null,"Available Time End"),(0,t.Lk)("th",null,"Available Days"),(0,t.Lk)("th",null,"Actions")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.filteredClassrooms,((e,o)=>((0,t.uX)(),(0,t.CE)("tr",{key:o},[(0,t.Lk)("td",null,(0,A.v_)(e.RoomName),1),(0,t.Lk)("td",null,(0,A.v_)(0===e.RoomType?"Classroom":"Lab"),1),(0,t.Lk)("td",null,(0,A.v_)(e.RoomAddress),1),(0,t.Lk)("td",null,(0,A.v_)(e.RoomCapacity),1),(0,t.Lk)("td",null,(0,A.v_)(e.RoomAvailableTimeStart),1),(0,t.Lk)("td",null,(0,A.v_)(e.RoomAvailableTimeEnd),1),(0,t.Lk)("td",null,(0,A.v_)(e.RoomAvailableDays),1),(0,t.Lk)("td",null,[(0,t.Lk)("button",{onClick:e=>r.deleteClassroom(o),class:"delete-button"},"Delete",8,N)])])))),128))])])):(0,t.Q3)("",!0)])])}var x=s(4373),j={data(){return{campuses:[{id:0,name:"Melbourne"},{id:1,name:"Geelong"},{id:2,name:"Sydney"},{id:3,name:"Adelaide"}],selectedCampusId:0,newClassroom:{RoomName:"",RoomType:"",RoomAddress:"",RoomCapacity:"",RoomAvailableTimeStart:"",RoomAvailableTimeEnd:"",RoomAvailableDays:""},classrooms:[]}},computed:{filteredClassrooms(){return console.log("过滤教室，选中校区 ID：",this.selectedCampusId),console.log("当前教室数据：",this.classrooms),Array.isArray(this.classrooms)?this.classrooms.filter((e=>e.CampusID===this.selectedCampusId)):(console.warn("classrooms 不是一个数组，设置为空数组"),[])}},methods:{goToPage(e){console.log("跳转到页面：",e),this.$router.push(e)},logout(){console.log("用户登出")},selectCampus(e){console.log("选中了校区 ID：",e),this.selectedCampusId=e,this.fetchClassrooms()},async addClassroom(){try{console.log("添加教室：",this.newClassroom,"校区 ID：",this.selectedCampusId);const e=await x.A.post("http://127.0.0.1:5002/classroom-management",{...this.newClassroom,CampusID:this.selectedCampusId});console.log("添加教室请求响应：",e),alert(e.data.message),this.fetchClassrooms(),this.resetForm()}catch(e){console.error("添加教室时出错:",e),e.response?console.error("服务器返回的错误响应:",e.response.data):e.request?console.error("请求已发送，但没有收到响应:",e.request):console.error("设置请求时出错:",e.message),alert("Failed to add classroom. Please check the console for more details.")}},async deleteClassroom(e){const o=this.filteredClassrooms[e];console.log("删除教室 ID：",o.RoomID);try{const e=await x.A.delete(`http://127.0.0.1:5002/classroom-management/${o.RoomID}`);console.log("删除教室请求响应：",e),alert("Classroom deleted successfully!"),this.fetchClassrooms()}catch(s){console.error("删除教室时出错:",s),s.response?console.error("服务器返回的错误响应:",s.response.data):s.request?console.error("请求已发送，但没有收到响应:",s.request):console.error("设置请求时出错:",s.message),alert("Failed to delete classroom. Please check the console for more details.")}},async fetchClassrooms(){try{console.log("请求获取教室信息，选中校区 ID：",this.selectedCampusId);const e=await x.A.get("http://127.0.0.1:5002/classroom-management",{params:{campusId:this.selectedCampusId},headers:{Accept:"application/json"}});console.log("获取到的教室数据：",e.data),Array.isArray(e.data)?this.classrooms=e.data:(console.warn("获取的教室数据不是数组，重置 classrooms 为空数组"),this.classrooms=[])}catch(e){console.error("获取教室信息时出错:",e),alert("Failed to load classrooms."),this.classrooms=[]}},resetForm(){console.log("重置表单"),this.newClassroom={RoomName:"",RoomType:"",RoomAddress:"",RoomCapacity:"",RoomAvailableTimeStart:"",RoomAvailableTimeEnd:"",RoomAvailableDays:""}}},created(){console.log("Classroom Management 页面创建完成"),this.fetchClassrooms()}};const K=(0,u.A)(j,[["render",O],["__scopeId","data-v-2a9b93d4"]]);var G=K;const B={class:"course-management-page"},Q={class:"header-right"},z={class:"campus-selection"},Z=["onClick"],Y={key:1},ee=["onClick"];function oe(e,o,s,l,n,r){return(0,t.uX)(),(0,t.CE)("div",B,[(0,t.Lk)("header",null,[o[10]||(o[10]=(0,t.Lk)("div",{class:"header-left"},[(0,t.Lk)("img",{src:c,alt:"VIT Logo",height:"60"})],-1)),(0,t.Lk)("div",Q,[(0,t.Lk)("button",{onClick:o[0]||(o[0]=e=>r.goToPage("/admin-page"))},"Back to Admin Page"),(0,t.Lk)("button",{onClick:o[1]||(o[1]=e=>r.goToPage("/"))},"Homepage"),(0,t.Lk)("button",{onClick:o[2]||(o[2]=(...e)=>r.logout&&r.logout(...e))},"Logout")])]),o[14]||(o[14]=(0,t.Lk)("h1",null,"Course Unit Management",-1)),(0,t.Lk)("div",z,[o[11]||(o[11]=(0,t.Lk)("h3",null,"Select Campus",-1)),(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.campuses,((e,o)=>((0,t.uX)(),(0,t.CE)("li",{key:o,onClick:e=>r.selectCampus(o),class:(0,A.C4)({active:n.selectedCampusId===o})},(0,A.v_)(e),11,Z)))),128))])]),o[15]||(o[15]=(0,t.Lk)("div",{class:"instructions"},[(0,t.Lk)("p",null,"Please fill in the details for each course task:"),(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,"Course Task Type: Specify the type of course task (e.g., Lecture, Training, Lab, Practice). Use numbers (1: Lecture, 2: Training, 3: Lab, 4: Practice)."),(0,t.Lk)("li",null,"Time Per Week: Enter the number of hours per week for the course task."),(0,t.Lk)("li",null,"Coherence Requirement: Specify if the course requires continuous sessions (true or false)."),(0,t.Lk)("li",null,"Teacher ID: Enter the teacher's ID responsible for the course task."),(0,t.Lk)("li",null,"Course ID: Enter the ID of the course this task belongs to."),(0,t.Lk)("li",null,"Room Type: Enter the type of room needed (1: Classroom, 2: Lab, etc.).")])],-1)),null!==n.selectedCampusId?((0,t.uX)(),(0,t.CE)("form",{key:0,onSubmit:o[9]||(o[9]=(0,a.D$)(((...e)=>r.addCourseTask&&r.addCourseTask(...e)),["prevent"]))},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>n.newCourseTask.courseTaskType=e),type:"number",placeholder:"Course Task Type (1: Lecture, 2: Training, etc.)",required:""},null,512),[[a.Jo,n.newCourseTask.courseTaskType]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[4]||(o[4]=e=>n.newCourseTask.timePerWeek=e),type:"number",placeholder:"Time Per Week (hours)",required:""},null,512),[[a.Jo,n.newCourseTask.timePerWeek]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[5]||(o[5]=e=>n.newCourseTask.coherenceRequirement=e),type:"text",placeholder:"Coherence Requirement (true/false)",required:""},null,512),[[a.Jo,n.newCourseTask.coherenceRequirement]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[6]||(o[6]=e=>n.newCourseTask.teacherId=e),type:"number",placeholder:"Teacher ID",required:""},null,512),[[a.Jo,n.newCourseTask.teacherId]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[7]||(o[7]=e=>n.newCourseTask.courseId=e),type:"number",placeholder:"Course ID",required:""},null,512),[[a.Jo,n.newCourseTask.courseId]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":o[8]||(o[8]=e=>n.newCourseTask.roomType=e),type:"number",placeholder:"Room Type (1: Classroom, 2: Lab, etc.)",required:""},null,512),[[a.Jo,n.newCourseTask.roomType]]),o[12]||(o[12]=(0,t.Lk)("button",{type:"submit"},"Add Course Task",-1))],32)):(0,t.Q3)("",!0),null!==n.selectedCampusId?((0,t.uX)(),(0,t.CE)("table",Y,[o[13]||(o[13]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"Course Task Type"),(0,t.Lk)("th",null,"Time Per Week"),(0,t.Lk)("th",null,"Coherence Requirement"),(0,t.Lk)("th",null,"Teacher ID"),(0,t.Lk)("th",null,"Course ID"),(0,t.Lk)("th",null,"Room Type"),(0,t.Lk)("th",null,"Actions")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.filteredCourseTasks,((e,o)=>((0,t.uX)(),(0,t.CE)("tr",{key:o},[(0,t.Lk)("td",null,(0,A.v_)(e.CourseTaskType),1),(0,t.Lk)("td",null,(0,A.v_)(e.TimePerWeek),1),(0,t.Lk)("td",null,(0,A.v_)(e.CoherenceRequirement),1),(0,t.Lk)("td",null,(0,A.v_)(e.TeacherID),1),(0,t.Lk)("td",null,(0,A.v_)(e.CourseID),1),(0,t.Lk)("td",null,(0,A.v_)(e.RoomType),1),(0,t.Lk)("td",null,[(0,t.Lk)("button",{onClick:e=>r.deleteCourseTask(o)},"Delete",8,ee)])])))),128))])])):(0,t.Q3)("",!0)])}var se={data(){return{campuses:{0:"Melbourne",1:"Geelong",2:"Sydney",3:"Adelaide"},selectedCampusId:null,newCourseTask:{courseTaskType:"",timePerWeek:"",coherenceRequirement:"",teacherId:"",courseId:"",roomType:""},courseTasks:[]}},computed:{filteredCourseTasks(){return Array.isArray(this.courseTasks)?this.courseTasks.filter((e=>e.CampusID==this.selectedCampusId)):[]}},methods:{goToPage(e){this.$router.push(e)},selectCampus(e){this.selectedCampusId=e,this.fetchCourseTasks()},addCourseTask(){this.newCourseTask.courseTaskType&&this.newCourseTask.timePerWeek&&this.newCourseTask.coherenceRequirement&&this.newCourseTask.teacherId&&this.newCourseTask.courseId&&this.newCourseTask.roomType?(this.newCourseTask.campusId=this.selectedCampusId,x.A.post("http://127.0.0.1:5002/course-management",this.newCourseTask,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>{console.log(e.data.message),this.fetchCourseTasks(),this.resetForm()})).catch((e=>{console.error("Failed to add course task:",e.response?.data?.message)}))):alert("The input cannot be empty.")},deleteCourseTask(e){if(confirm("Confirm to delete")){const o=this.courseTasks.findIndex(((o,s)=>o.CampusID==this.selectedCampusId&&s===e));-1!==o&&this.courseTasks.splice(o,1),this.saveToLocalStorage()}},fetchCourseTasks(){x.A.get("http://127.0.0.1:5002/course-management",{headers:{Accept:"application/json"},params:{campusId:this.selectedCampusId}}).then((e=>{this.courseTasks=Array.isArray(e.data)?e.data:[]})).catch((e=>{console.error("Failed to fetch course tasks:",e)}))},resetForm(){this.newCourseTask={courseTaskType:"",timePerWeek:"",coherenceRequirement:"",teacherId:"",courseId:"",roomType:"",campusId:null}},logout(){}},mounted(){this.fetchCourseTasks()}};const ae=(0,u.A)(se,[["render",oe],["__scopeId","data-v-788be539"]]);var te=ae;const le={class:"header-right"},ne={class:"timetable-container"},re={class:"campus-list"},ue=["onClick"],ie={class:"week-timetable"};function de(e,o,s,a,l,n){return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("header",null,[o[3]||(o[3]=(0,t.Lk)("div",{class:"header-left"},[(0,t.Lk)("img",{src:c,alt:"VIT Logo",height:"60"})],-1)),(0,t.Lk)("div",le,[(0,t.Lk)("button",{onClick:o[0]||(o[0]=e=>n.goToPage("/admin-page"))},"Back to Admin Page"),(0,t.Lk)("button",{onClick:o[1]||(o[1]=e=>n.goToPage("/"))},"Homepage"),(0,t.Lk)("button",{onClick:o[2]||(o[2]=(...e)=>n.logout&&n.logout(...e))},"Logout")])]),(0,t.Lk)("div",ne,[(0,t.Lk)("div",re,[o[4]||(o[4]=(0,t.Lk)("h2",null,"Campuses",-1)),(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(l.campuses,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e.id,onClick:o=>n.selectCampus(e.id),class:(0,A.C4)({active:l.selectedCampusId===e.id})},(0,A.v_)(e.name),11,ue)))),128))])]),(0,t.Lk)("div",ie,[(0,t.Lk)("h3",null,(0,A.v_)(n.selectedCampusName)+" Timetable",1),(0,t.Lk)("table",null,[o[5]||(o[5]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"Time"),(0,t.Lk)("th",null,"Monday"),(0,t.Lk)("th",null,"Tuesday"),(0,t.Lk)("th",null,"Wednesday"),(0,t.Lk)("th",null,"Thursday"),(0,t.Lk)("th",null,"Friday")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(l.timeSlots,(e=>((0,t.uX)(),(0,t.CE)("tr",{key:e},[(0,t.Lk)("td",null,(0,A.v_)(e),1),(0,t.Lk)("td",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.filteredCourses("Monday",e),(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id},(0,A.v_)(e.name),1)))),128))]),(0,t.Lk)("td",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.filteredCourses("Tuesday",e),(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id},(0,A.v_)(e.name),1)))),128))]),(0,t.Lk)("td",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.filteredCourses("Wednesday",e),(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id},(0,A.v_)(e.name),1)))),128))]),(0,t.Lk)("td",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.filteredCourses("Thursday",e),(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id},(0,A.v_)(e.name),1)))),128))]),(0,t.Lk)("td",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.filteredCourses("Friday",e),(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id},(0,A.v_)(e.name),1)))),128))])])))),128))])])])])])}var me={data(){return{campuses:[{id:1,name:"Sydney"},{id:2,name:"Melbourne"},{id:3,name:"Geelong"},{id:4,name:"Adelaide"}],selectedCampusId:1,courses:{1:[{id:1,name:"Math",day:"Monday",time:"9:00-10:00"},{id:2,name:"Physics",day:"Tuesday",time:"10:00-11:00"}],2:[{id:3,name:"Chemistry",day:"Wednesday",time:"9:00-10:00"},{id:4,name:"Biology",day:"Thursday",time:"11:00-12:00"}],3:[{id:5,name:"English",day:"Monday",time:"13:00-14:00"},{id:6,name:"History",day:"Friday",time:"14:00-15:00"}],4:[{id:7,name:"Art",day:"Tuesday",time:"15:00-16:00"},{id:8,name:"Music",day:"Thursday",time:"16:00-17:00"}]},timeSlots:["7:00-8:00","8:00-9:00","9:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00","19:00-20:00"]}},computed:{selectedCampusName(){const e=this.campuses.find((e=>e.id===this.selectedCampusId));return e?e.name:""}},methods:{goToPage(e){this.$router.push(e)},logout(){},filteredCourses(e,o){return this.courses[this.selectedCampusId].filter((s=>s.day===e&&s.time===o))},selectCampus(e){this.selectedCampusId=e}}};const ce=(0,u.A)(me,[["render",de],["__scopeId","data-v-7a484716"]]);var pe=ce;const ke={class:"select-campus"},he={class:"button-container"};function Ce(e,o,s,a,l,n){return(0,t.uX)(),(0,t.CE)("div",ke,[o[4]||(o[4]=(0,t.Lk)("h1",null,"Select Campus",-1)),(0,t.Lk)("div",he,[(0,t.Lk)("button",{class:"campus-button",onClick:o[0]||(o[0]=e=>n.selectCampus("Melbourne"))},"Melbourne"),(0,t.Lk)("button",{class:"campus-button",onClick:o[1]||(o[1]=e=>n.selectCampus("Geelong"))},"Geelong"),(0,t.Lk)("button",{class:"campus-button",onClick:o[2]||(o[2]=e=>n.selectCampus("Sydney"))},"Sydney"),(0,t.Lk)("button",{class:"campus-button",onClick:o[3]||(o[3]=e=>n.selectCampus("Adelaide"))},"Adelaide")])])}var ge={name:"SelectCampus",methods:{selectCampus(e){alert(`You selected ${e}`)}}};const Le=(0,u.A)(ge,[["render",Ce],["__scopeId","data-v-567bae66"]]);var be=Le;const ye=[{path:"/",name:"HomePage",component:L},{path:"/admin-page",name:"AdminPage",component:I},{path:"/login",name:"LoginPage",component:M},{path:"/classroom-management",name:"ClassroomManagement",component:G},{path:"/course-management",name:"CourseManagement",component:te},{path:"/admin-timetable",name:"AdminTimetable",component:pe},{path:"/schedule-management",name:"GenerateTimetable",component:be}],Te=(0,m.aE)({history:(0,m.LA)(),routes:ye});var ve=Te;const fe=(0,a.Ef)(d);fe.config.globalProperties.$axios=x.A,x.A.defaults.baseURL="http://127.0.0.1:5002/api",x.A.defaults.headers.common["Content-Type"]="application/json",fe.use(ve),fe.mount("#app")}},o={};function s(a){var t=o[a];if(void 0!==t)return t.exports;var l=o[a]={exports:{}};return e[a].call(l.exports,l,l.exports,s),l.exports}s.m=e,function(){var e=[];s.O=function(o,a,t,l){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],t=e[d][1],l=e[d][2];for(var r=!0,u=0;u<a.length;u++)(!1&l||n>=l)&&Object.keys(s.O).every((function(e){return s.O[e](a[u])}))?a.splice(u--,1):(r=!1,l<n&&(n=l));if(r){e.splice(d--,1);var i=t();void 0!==i&&(o=i)}}return o}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,t,l]}}(),function(){s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,{a:o}),o}}(),function(){s.d=function(e,o){for(var a in o)s.o(o,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={524:0};s.O.j=function(o){return 0===e[o]};var o=function(o,a){var t,l,n=a[0],r=a[1],u=a[2],i=0;if(n.some((function(o){return 0!==e[o]}))){for(t in r)s.o(r,t)&&(s.m[t]=r[t]);if(u)var d=u(s)}for(o&&o(a);i<n.length;i++)l=n[i],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(d)},a=self["webpackChunkvit"]=self["webpackChunkvit"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(6994)}));a=s.O(a)})();
//# sourceMappingURL=app.83f81ccf.js.map