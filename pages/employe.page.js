
  
const startPage ={
   
    template: `
    
    <div id = "container">
    
    <link rel="stylesheet" href="pages/useremploye.page.css">
    
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
    
     
   

    
    
    <h1>Ace Ventura Grensesnitt Studentklinikken Eksamen Oppgave 2019</h1>
    <h4 id="logginntxtH2">!!!Dette er bare en protal for Ansattsider eller brukerapp til bestilling av time:</h4>
   

    <button @click="linkuser" class ="linkbutton">Bruker webapp</button><br>
    <button @click="linkemploye" class ="linkbutton">Ansatt webapp</button>
    
    
    <img id="logo2" src="pages/Images/logo.png">
  
    
   
    </div>
    `,

   
data(){ 
   return  {
     user:"",

            }
    },
    methods: {
        linkemploye:function(){locationmypage:this.$router.replace({ path: "/logginemploye" })},
        linkuser:function(){locationorder:this.$router.replace({ path: "/logginuser" })},
        linkloggout:function(){locationorder:this.$router.replace({ path: "/" })},
        
        }
        
    
   
    
};
    export default startPage;