
  
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
     <h3 class="headerincont">Dine timer: {{treatment}}</h3>
     <div id="userbyorder" @click="returnorderdiv(this.id)"></div>

     <div id="notediv" v-bind:style="{'display':hidenotediv}">
     <h2 >Notater:</h2>
     <img @click="closenoteuser" id="ximgnote"  src="pages/Images/X.png" class="ximg" >
     
     <img @click="openaddnote" src="pages/Images/addnote.png" class="addnote" >
     
     <div id="notecontainer"></div>
     
     <div id="addempnotediv" v-bind:style="{'display':hideaddnotediv}">
     <img @click="closeaddnote" id="ximgempnote" src="pages/Images/X.png" class="ximg" >
     <textarea id="txtfromemp" v-model="textemp"  placeholder="Skriv behandler notat til ordre her!"></textarea>
     <button @click="addempnote" class="backbutton" id="empnotebutton" type="button"> Legg til</button>
     
     </div>
     
     </div>
     
     
     
     
     </div>


     <div class="containerchoise"  id="customerinterContainer" v-bind:style="{'display':hidecustomerInteraction}">
     <h3 class="headerincont">Hendvendelser: {{treatment}}</h3>

    
    <div id="rendernotes"></div>
    
    

     
     
     </div>

    
     <div class="containerchoise"  id="AhoursContainer" v-bind:style="{'display':hideAhours}">
     <h3 class="headerincont">Ledige timer: {{treatment}}</h3>

     <h5>Velg Bruker:<select id="userrendertime" v-model="userchosen"></select></h5>
     <h5>Velg ledig tid og dato:</h5>
     <div class="timetable" @click="returndateTime()">
         <div  tag="div" id="7:30" value="10.01.2020"  class="time">Tid:7:30<br>Dato:10.01.2020</div>
         <div  tag="div" id="8:30" value="12.01.2020"  class="time">Tid:8:30<br>Dato:12.01.2020</div>
         <div  tag="div" id="9:00" value="15.12.2019"  class="time">Tid:9:00<br>Dato:15.12.2019</div>
        
         <div  tag="div" id="12:00" value="16.12.2019"  class="time">Tid:12:00<br>Dato:16.12.2019</div>
         <div  tag="div" id="12:30" value="06.01.2020"  class="time">Tid:12:30<br>Dato:06.01.2020</div>
         <div  tag="div" id="13:00" value="07.01.2020"  class="time">Tid:13:00<br>Dato:07.01.2020</div>
         <div  tag="div" id="13:30" value="08.01.2020"  class="time">Tid:13:30<br>Dato:08.01.2020</div>
         <div  tag="div" id="14:00" value="10.01.2020"  class="time">Tid:14:00<br>Dato:10.01.2020</div>
         <div  tag="div" id="14:30" value="01.02.2020"  class="time">Tid:14:30<br>Dato:01.02.2020</div>
         <div  tag="div" id="15:00" value="14.01.2020"  class="time">Tid:15:00<br>Dato:14.01.2020</div>
         <div  tag="div" id="15:30" value="18.01.2020"  class="time">Tid:15:30<br>Dato:18.01.2020</div>
         <div  tag="div" id="16:00" value="19.01.2020"  class="time">Tid:16:00<br>Dato:19.01.2020</div>

         
         <div id="makeorder" v-bind:style="{'display':hidemakeorder}">
        
         <h5>Bruker:<p>{{userchosen}}</p></h5>
         <h5>Valgt tid:<p>{{selectedTime}}</p></h5>
         <h5>Valgt dato:<p>{{selecteddate}}</p></h5>
         
         <button @click="confirmorder" class="backbutton" id="orderbutton" type="button">Sett opp time</button>
         <button @click="closemakeorder" class="backbutton" id="abortord" type="button">Avslutt</button>
         
         </div>

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
    hideaddnotediv:"none",
    hidemakeorder:"none",
   
    hidenotediv:"none",

    treatment:"",

    user:"defaultuser",
    docid:"",

    userchosen:"",

    orderid:"",

    textemp:"",

    selecteddate:"",
    selectedTime:"",



            }
    },
    methods: {

        deletediv:function(e){{
            e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
        }},

        openmakeorder:function(){this.hidemakeorder=""},
        closemakeorder:function(){this.hidemakeorder="none"},

        returndateTime:function(e){
            e=e || window.event;
            e=e.target || e.srcElement;
            var element=document.getElementById(e.id);

            var timeid=e.id;
            var datevalue = element.getAttribute("value");
            var classvalue= element.getAttribute("class");
            this.selecteddate=datevalue;
            this.selectedTime=timeid;
            console.log(this.userchosen);
            console.log(timeid,datevalue,classvalue);
            if(classvalue =="time"){
                console.log(classvalue);
                this.openmakeorder();
            }
        },
        
        confirmorder:function(){
                
            var id;
           
            
                id=1;
                for (let i = 0; i < userdata.orders.length; i++) {
                    if(userdata.orders[i].id ==id){
                    id+=1;}
                    
                    
                }
            
           const order={  
                    doctor:this.docid, 
                    user:this.userchosen,
                    id:id,
                    treatment:this.treatment,
                    date:this.selecteddate,
                    time:this.selectedTime,
                    message:""}

            const note={
                status:"", 
                user:this.userchosen,
                treatment:this.treatment,
                id:id,
                messageuser:this.message,
                empnote:[]}  
            
            this.hidemakeorder="none";
            userdata.orders.push(order);
            userdata.usernotes.push(note);
            console.log(userdata.usernotes);
            console.log(userdata.orders);
            var cleardiv= document.getElementById("userbyorder");
            cleardiv.innerHTML="";
            var cleardiv2= document.getElementById("rendernotes");
            cleardiv2.innerHTML="";
            this.createorderdiv();
            this.createnotediv2();
          

         },

       


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

           closeaddnote:function(){this.hideaddnotediv="none";},
           openaddnote:function(){this.hideaddnotediv="";},


           addempnote:function(){
               
               var textemp="<br>-"+ this.textemp;
               var idofnote=this.orderid;
               console.log(idofnote);
               for (let i = 0; i < userdata.usernotes.length; i++) {
                   if(userdata.usernotes[i].id == idofnote){
                    userdata.usernotes[i].empnote.push(textemp);
                    console.log(textemp);
                    var cleardiv= document.getElementById("notecontainer");
               cleardiv.innerHTML="";
               this.createnotediv();
               this.hideaddnotediv="none";
               this.textemp="";

                   }
                   
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
            this.createnotediv2();
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
                this.docid=employedata.setEmploye[i].Eid;
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

        createnotediv2:function(){
            
            console.log("function");
            var note;
            for (var i = 0; i < userdata.usernotes.length; i++) {
                

                if(userdata.usernotes[i].treatment == this.treatment ){
                    
                 
                    var id=userdata.usernotes[i].id;
           
                    var user=userdata.usernotes[i].user;
                    var msguser=userdata.usernotes[i].messageuser;
                    var status=userdata.usernotes[i].status;
                    var empnote=userdata.usernotes[i].empnote;

                    for (let i = 0; i < userdata.users.length; i++) {
                        if(userdata.users[i].Cusername == user)
                        user=userdata.users[i].firstname +" "+userdata.users[i].lastname;
                        
                    }


           
                    var duplicate= document.getElementsByClassName("notes2");
                    for (var i = 0, l = duplicate.length; i < l; i++) {
                        var iddiv = duplicate[i].id;
                        if(iddiv == id){return;}
                    }
              

                note = document.createElement('div');
                note.setAttribute("class", "notes2");
                note.setAttribute("id", id);
                note.innerHTML = "<h5 class=timeH>Kunde: "+user+"</h5>"+
               "<h5 class=timeH>Status: "+status+"</h5>"+
               "<h5 class=timeH>Ordre id: "+id+"</h5>"+
               "<h5 class=timeH>Melding Bruker: </h5>"+
                "<p class='notetxtuser'>"+msguser+"</p>"+
                "<h5 class=timeH>Melding Behandler: </h5>"+
                "<p class='notetxtdoc'>"+empnote+"</p>"
                ;
              
              
           
               var appendto5=document.getElementById("rendernotes");
              
               appendto5.appendChild(note);}

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

                    for (let i = 0; i < userdata.users.length; i++) {
                        if(userdata.users[i].Cusername == user)
                        user=userdata.users[i].firstname +" "+userdata.users[i].lastname;
                        
                    }


           
                    var duplicate= document.getElementsByClassName("notes");
                    for (var i = 0, l = duplicate.length; i < l; i++) {
                        var iddiv = duplicate[i].id;
                        if(iddiv == id){return;}
                    }
              

                note = document.createElement('div');
                note.setAttribute("class", "notes");
                note.setAttribute("id", id);
                note.innerHTML = "<h5 class=timeH>Kunde: "+user+"</h5>"+
               "<h5 class=timeH>Status: "+status+"</h5>"+
               "<h5 class=timeH>Ordre id: "+id+"</h5>"+
               "<h5 class=timeH>Melding Bruker: </h5>"+
                "<p class='notetxtuser'>"+msguser+"</p>"+
                "<h5 class=timeH>Melding Behandler: </h5>"+
                "<p class='notetxtdoc'>"+empnote+"</p>"
                ;
              
              
           
               var appendto2=document.getElementById("notecontainer");
              
               appendto2.appendChild(note);}

               }
              

              
        
        },

        renderuser:function(){
           
           
            var userrender;
            
            for (var i = 0; i < userdata.users.length; i++) {
                
                    var id=userdata.users[i].id;
           
                    var user=userdata.users[i].Cusername;

                    var useract=userdata.users[i].Cusername;
                   

                    for (let i = 0; i < userdata.users.length; i++) {
                        if(userdata.users[i].Cusername == user)
                        user=userdata.users[i].firstname +" "+userdata.users[i].lastname;
                        
                    }
                userrender = document.createElement('OPTION');
                    userrender.setAttribute("class", "userrend");
                    userrender.setAttribute("id", id);
                    userrender.setAttribute("value",useract)
                    userrender.innerHTML = user;
             
                ;
              
              
           
               var appendto3=document.getElementById("userrendertime");
               var appendto4=document.getElementById("");
              
               appendto3.appendChild(userrender);}

               
              

              
        
        },

       


        shownotesuser:function(){
            this.hidenotediv="";
            },

            
    },

    beforeMount(){
        this.setuser()
       },
       mounted() {
           this.createorderdiv(),
           this.renderuser()
          
           
          
           
       }
        
    
   
    
};
    export default PageEmploye;