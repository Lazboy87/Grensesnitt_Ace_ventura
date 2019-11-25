
  
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
    <div id="appContainer">
     <div id="menuContainer">
        <div class="menubutton" id="menuorders" >Dine Timer</div>
        <div class="menubutton" id="customerInteraction" >Kunde Henvendelser</div>
        <div class="menubutton" id="Ahours" >Ledige Timer</div>
     </div>

     <div class="containerchoise" id="yourhoursContainer" v-bind:style="{'display':hideyourhours}">
     <h3 class="headerincont">Dine timer</h3>
     
     
     
     
     </div>


     <div class="containerchoise"  id="customerinterContainer" v-bind:style="{'display':hidecustomerInteraction}">
     <h3 class="headerincont">Dine timer</h3>
     
     
     </div>

    
     <div class="containerchoise"  id="AhoursContainer" v-bind:style="{'display':hideAhours}">
     <h3 class="headerincont">Dine timer</h3>
     
     
     
     </div>

    
    
    
    </div>
    
   

    
    
    
    
  
    
   
    </div>
    `,

   
data(){ 
   return  {
    hideyourhours:"",
    hidecustomerInteraction:"none",
    hideAhours:"none"



            }
    },
    methods: {
        
        
        }
        
    
   
    
};
    export default PageEmploye;