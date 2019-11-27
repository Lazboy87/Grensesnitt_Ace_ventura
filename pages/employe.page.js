
  
const PageEmploye ={
   
    template: `
    
    <div id = "containerEmp">
    <link rel="stylesheet" href="pages/employe.css">
   
    <img id="logoEmp" src="pages/Images/Studentklinikk logo.png">
    <div id="iddiv2">
    <img id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>
    </div>
    <h1 id="empheader">Ansattsider Studentklinikken</h1>
    <h3 id="departmentheader">{{treatment}}</h3>
    <div id="appContainer">
     <div id="menuContainer">
        <div @click="showYourhours" class="menubutton" id="menuorders" ><p class="menutext">Dine Timer</p></div>
        <div @click="showIntera" class="menubutton" id="customerInteraction" ><p class="menutext">Henvendelser</p></div>
        <div @click="showAhours" class="menubutton" id="Ahours" ><p class="menutext">Ledige Timer</p></div>
     </div>

     <div class="containerchoise" id="yourhoursContainer" v-bind:style="{'display':hideyourhours}">
     <h3 class="headerincont">Dine timer:{{treatment}}</h3>
     <div id="userbyorder" @click="returnorderdiv(this.id)"></div>

     <div id="notediv" v-bind:style="{'display':hidenotediv}">
     <h2 >Notater:</h2>
     <img @click="closenoteuser" src="pages/Images/X.png" class="ximg" >
     <img @click="createnotediv" src="pages/Images/addnote.png" class="addnote" >
     <div id="notecontainer"></div>
     
     </div>
     
     
     
     
     </div>


     <div class="containerchoise"  id="customerinterContainer" v-bind:style="{'display':hidecustomerInteraction}">
     <h3 class="headerincont">Hendvendelser:{{treatment}}</h3>
     
     
     </div>

    
     <div class="containerchoise"  id="AhoursContainer" v-bind:style="{'display':hideAhours}">
     <h3 class="headerincont">Ledige timer:{{treatment}}</h3>
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
     
     
     
     </div>

    
    
    
    </div>
    
   

    
    
    
    
  
    
   
    </div>
    `,

   
data(){ 
   return  {
    hideyourhours:"",
    hidecustomerInteraction:"none",
    hideAhours:"none",
   
    hidenotediv:"none",

    treatment:"Fysiologisk Testlab",

    user:"defaultuser",

    orderid:"",



            }
    },
    methods: {

        deletediv:function(e){{
            e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
        }},

       


        returnorderdiv:function(e){
            e=e || window.event;
            e=e.target || e.srcElement;
            console.log("name:"+e.name);
            console.log("ID:"+e.id);

            if(e.name == "note"){
                this.shownotesuser();
                this.orderid=e.id;
                this.createnotediv();
                

                console.log(this.orderid);

                
            }
            
            
           },


           

           closenoteuser:function(){
               this.hidenotediv="none";
               var cleardiv= document.getElementById("notecontainer");
               cleardiv.innerHTML="";
                   
               
               
           },
           
           

        showYourhours:function(){
            this.hideyourhours="";
        this.hidecustomerInteraction="none";
        this.hideAhours="none";},

        showAhours:function(){
            this.hideyourhours="none";
        this.hidecustomerInteraction="none";
        this.hideAhours="";},

        showIntera:function(){
            this.hideyourhours="none";
        this.hidecustomerInteraction="";
        this.hideAhours="none";},
        
        
        
        setuser:function(){
            window.scrollTo(0,0);
            for (let i = 0; i < employedata.setEmploye.length; i++) {
              
                if (employedata.setEmploye ==null ){
                this.user="defaultuser";
            }else{
                this.user= employedata.setEmploye[i].Eusername;
                if(employedata.setEmploye[i].Eid == 1){this.treatment="Fysiologisk Testlab"}
                if(employedata.setEmploye[i].Eid == 2){this.treatment="Osteopati"}
                if(employedata.setEmploye[i].Eid == 3){this.treatment="Akupunktur"}
                if(employedata.setEmploye[i].Eid == 4){this.treatment="Kostholdsveiledning"}
            }
        }
    },



        createorderdiv:function(){
             
            var order;
            for (var i = 0; i < userdata.orders.length; i++) {
                if(userdata.orders[i].treatment == this.treatment){
                var id=userdata.orders[i].id;
                
                var user=userdata.orders[i].user;
                var time=userdata.orders[i].time;
                var date=userdata.orders[i].date;

                for (let i = 0; i < userdata.users.length; i++) {
                    if(userdata.users[i].Cusername == user)
                    user=userdata.users[i].firstname +" "+userdata.users[i].lastname;
                    
                }

                order = document.createElement('div');
                order.setAttribute("class", "orders");
                order.setAttribute("id", id);
                order.innerHTML = "<h5 class=treatH>Kunde: "+user+"</h5>"+
               "<h5 class=timeH>Tid: "+time+"</h5>"+
                "<h5 class=dateH>Dato:  "+date+"</h5>"+
                "<label class='notecont'>"+"<h4 class=notetxt>Notater</h4>"+
                "<img name='note' class='note' src='pages/Images/note.png' id="+id+">"+
                "</label>";
              
              
              
                 console.log( userdata.orders[i].treatment);
               var appendto=document.getElementById("userbyorder");
               console.log(appendto);
               appendto.appendChild(order);}

               }
              

              
        
        },




        createnotediv:function(){
            var idord=this.orderid;
            console.log("function");
            var note;
            for (var i = 0; i < userdata.usernotes.length; i++) {
                

                if(userdata.usernotes[i].id == idord ){
                    
                 
                    var id=userdata.usernotes[i].id;
           
                    var user=userdata.usernotes[i].user;
                    var msguser=userdata.usernotes[i].messageuser;
                    var status=userdata.usernotes[i].status;
                    var empnote=userdata.usernotes[i].empnote;


           
                    var duplicate= document.getElementsByClassName("notes");
                    for (var i = 0, l = duplicate.length; i < l; i++) {
                        var iddiv = duplicate[i].id;
                        if(iddiv == id){return;}
                    }
              

                note = document.createElement('div');
                note.setAttribute("class", "notes");
                note.setAttribute("id", id);
                note.innerHTML = "<h5 class=treatH>Kunde: "+user+"</h5>"+
               "<h5 class=timeH>Status: "+status+"</h5>"+
                "<p class='notetxtuser'>Melding Bruker:"+msguser+"</p>"+
                "<p class='notetxtdoc'>Melding Behandler:"+empnote+"</p>"
                ;
              
              
           
               var appendto2=document.getElementById("notecontainer");
              
               appendto2.appendChild(note);}

               }
              

              
        
        },


        shownotesuser:function(){
            this.hidenotediv="";
            },

            
    },

    beforeMount(){
        this.setuser()
       },
       mounted() {
           this.createorderdiv()
           
          
           
       }
        
    
   
    
};
    export default PageEmploye;