const timePage={
   template:`
  
   <div id="container">
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
         <div @click="returnTime()" tag="div" id="7:30" class="time">7:30</div>
         <div @click="returnTime()" tag="div" id="8:30" class="time">8:30</div>
         <div @click="returnTime()" tag="div" id="9:00" class="time">9:00</div>
         <div @click="returnTime()" tag="div" id="8:00" class="time">8:00</div>
         <div @click="returnTime()" tag="div" id="9:30" class="time">9:30</div>
         <div @click="returnTime()" tag="div" id="10:00" class="time">10:00</div>
         <div @click="returnTime()" tag="div" id="10:30" class="time">10:30</div>
         <div @click="returnTime()" tag="div" id="11:00" class="time">11:00</div>
         <div @click="returnTime()" tag="div" id="11:30" class="time">11:30</div>
         <div @click="returnTime()" tag="div" id="12:00" class="time">12:00</div>
         <div @click="returnTime()" tag="div" id="12:30" class="time">12:30</div>
         <div @click="returnTime()" tag="div" id="13:00" class="time">13:00</div>
         <div @click="returnTime()" tag="div" id="13:30" class="time">13:30</div>
         <div @click="returnTime()" tag="div" id="14:00" class="time">14:00</div>
         <div @click="returnTime()" tag="div" id="14:30" class="time">14:30</div>
         <div @click="returnTime()" tag="div" id="15:00" class="time">15:00</div>
         <div @click="returnTime()" tag="div" id="15:30" class="time">15:30</div>
         <div @click="returnTime()" tag="div" id="16:00" class="time">16:00</div>
         <div @click="returnTime()" tag="div" id="16:30" class="time">16:30</div>
         <div @click="returnTime()" tag="div" id="17:00" class="time">17:00</div>
         <div @click="returnTime()" tag="div" id="17:30" class="time">17:30</div>
         
      </div>

      <img @click="back" src="pages/Images/back.png" class ="backimg"><br>
      <img id="logo2" src="pages/Images/logo.png">
   </div>
   `
      ,
       
       
      data(){
         return{
             
            user:"", 
            timevalue:"",
 
         }
     },
     methods:{
         linkmypage:function(){locationmypage:this.$router.replace({ path: "/mypage" })},
         back:function(){locationorder:this.$router.replace({ path: "/date" })},
         linkloggout:function(){locationorder:this.$router.replace({ path: "/" })},
         
         returnTime:function(){
            this.timevalue = event.srcElement.id;
            
            userdata.ordertemp.time=this.timevalue;
           console.log(userdata.ordertemp.time);
           this.$router.replace({ path: "/contactinfo" });
           },
         
         setuser:function(){
            if (userdata.theuser[0] == null){
                this.user="defaultuser";
            }else{this.user= userdata.theuser[0].username}

            
        },

        





      },
     beforeMount(){
      this.setuser()
      

   },
     };
     export default timePage;