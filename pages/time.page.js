const timePage={
   template:`
  
   <div class="container">
         <link rel="stylesheet" href="pages/time.css">
      
         <img id="logo" src="pages/Images/Studentklinikk logo.png">
  
         <div id="iddiv">
         <img id="idimg" src="pages/Images/ID.png">
          <p id="textuser">Bruker:<br>{{user}}</p>
     
         
         
        </div>
     
      <div class="headerText">
         <h2>Velg Ønsket Tidspunkt:</h2>
      </div>
      <div class="timetable">
         <router-link to="/contactinfo" tag="div" id="7:30" class="time"><p>7:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="8:30" class="time"><p>8:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="9:00" class="time"><p>9:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="8:00" class="time"><p>8:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="9:30" class="time"><p>9:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="10:00" class="time"><p>10:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="10:30" class="time"><p>10:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="11:00" class="time"><p>11:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="11:30" class="time"><p>11:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="12:00" class="time"><p>12:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="12:30" class="time"><p>12:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="13:00" class="time"><p>13:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="13:30" class="time"><p>13:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="14:00" class="time"><p>14:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="14:30" class="time"><p>14:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="15:00" class="time"><p>15:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="15:30" class="time"><p>15:30</p></router-link>
         <router-link to="/contactinfo" tag="div" id="16:00" class="time"><p>16:00</p></router-link>
         <router-link to="/contactinfo" tag="div" id="16:30" class="time"><p>16:30</p></router-link>
         
      </div>

      <img @click="back" src="pages/Images/back.png" class ="backimg"><br>
      <img id="logo2" src="pages/Images/logo.png">
   </div>
   `
      ,
       
       
      data(){
         return{
             
            user:"", 
 
         }
     },
     methods:{
         linkmypage:function(){locationmypage:this.$router.replace({ path: "/mypage" })},
         back:function(){locationorder:this.$router.replace({ path: "/date" })},
         linkloggout:function(){locationorder:this.$router.replace({ path: "/" })},
         setuser:function(){
            if (userdata.theuser[0] == null){
                this.user="defaultuser";
            }else{this.user= userdata.theuser[0].username}
        }
     },
     beforeMount(){
      this.setuser()
   },
     };
     export default timePage;