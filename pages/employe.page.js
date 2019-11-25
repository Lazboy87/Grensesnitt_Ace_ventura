
  
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

     <div id="yourhoursContainer" v-bind:style="{'display':hideyourhours}">
     
     
     
     
     </div>


     <div id="customerinterContainer" v-bind:style="{'display':hidecustomerInteraction}">
     
     
     
     </div>

    
     <div id="AhoursContainer" v-bind:style="{'display':hideAhours}">
     
     
     
     
     </div>

    
    
    
    </div>
    
   

    
    
    
    
  
    
   
    </div>
    `,

   
data(){ 
   return  {
    hideyourhours:"none",
    hidecustomerInteraction:"none",
    hideAhours:"none"



            }
    },
    methods: {
        
        
        }
        
    
   
    
};
    export default PageEmploye;