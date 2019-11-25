
  
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
     <div id="userbyorder" @click="returnorderdiv()"></div>
     
     
     
     
     </div>


     <div class="containerchoise"  id="customerinterContainer" v-bind:style="{'display':hidecustomerInteraction}">
     <h3 class="headerincont">Hendvendelser:{{treatment}}</h3>
     
     
     </div>

    
     <div class="containerchoise"  id="AhoursContainer" v-bind:style="{'display':hideAhours}">
     <h3 class="headerincont">Ledige timer:{{treatment}}</h3>
     
     
     
     </div>

    
    
    
    </div>
    
   

    
    
    
    
  
    
   
    </div>
    `,

   
data(){ 
   return  {
    hideyourhours:"",
    hidecustomerInteraction:"none",
    hideAhours:"none",
    orderdiv:"",

    treatment:"",

    user:"defaultuser"



            }
    },
    methods: {


        returnorderdiv:function(e){
            this.orderdiv = event.srcElement.id;
            
            console.log(this.orderdiv);
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
                "<label class=delete>"+"<h4 class=deletetxt>Avbestill</h4>"+
                "<input class=checkbox value="+id+" checked='' type=checkbox id=inp"+id+" name=cancel"+id+">"+
                "<span class=labelchk for=cancel"+id+"></span>"+
              "</label>";
              
              
              
                 console.log( userdata.orders[i].treatment);
               var appendto=document.getElementById("userbyorder");
               console.log(appendto);
               appendto.appendChild(order);}

               }
               var unchecked = document.getElementsByClassName("checkbox");
              for (var i = 0; i < unchecked.length; i++) {
                  unchecked[i].checked = false;

              }
        
        }
    },

    beforeMount(){
        this.setuser()
       },
       mounted() {
           this.createorderdiv()
           
       }
        
    
   
    
};
    export default PageEmploye;