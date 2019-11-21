const timePage={
   template:`
  
   <div class="container">
         <link rel="stylesheet" href=""pages/time.css">
      
         <img id="logo" src="/logo.png">
     
      <div class="headerText">
         <h1>Velg Ønsket Tidspunkt</h1>
      </div>
      <div class="timetable">
         <router-link to="/contactinfo" tag="div" class="time"><p>7:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>8:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>9:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>8:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>9:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>10:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>10:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>11:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>11:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>12:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>12:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>13:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>13:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>14:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>14:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>15:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>15:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>16:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>16:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>17:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>17:30</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>18:00</p></router-link>
         <router-link to="/contactinfo" tag="div" class="time"><p>18:30</p></router-link>
      </div>
   </div>
   `
      ,
       
       
      data(){
         return{
             
             
 
         }
     },
     methods:{
         linkmypage:function(){locationmypage:this.$router.replace({ path: "/mypage" })},
         linkorder:function(){locationorder:this.$router.replace({ path: "/treatment" })},
         linkloggout:function(){locationorder:this.$router.replace({ path: "/" })}
     }
     };
     export default timePage;