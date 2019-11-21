
  
const startPage ={
   
    template: `
    
    <div id = "container">
    
    <link rel="stylesheet" href="pages/startPage.css">
    
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
    <div id="iddiv">
    <img  @click="linkmypage" id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>

     
   
    </div>
    
    
    
    <h2 id="logginntxtH2">Hvor ønsker du å gå:</h2>
   

    <button @click="linkmypage" class ="linkbutton">Min Side</button><br>
    <button @click="linkorder" class ="linkbutton">Bestilling</button>
    
    
    <img id="logo2" src="pages/Images/logo.png">
  
    
   
    </div>
    `,

   
data(){ 
   return  {
     user:userdata.theuser[0].username,

            }
    },
    methods: {
        linkmypage:function(){locationmypage:this.$router.replace({ path: "/myPage" })},
        linkorder:function(){locationorder:this.$router.replace({ path: "/treatment" })},
        linkloggout:function(){locationorder:this.$router.replace({ path: "/" })}
       
        
    }
    
};
    export default startPage;