

const startPage ={
    template: `
    
    <div id="container">
    <link rel="stylesheet" type="text/css" href="pages/myPage.css">
   
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
  
    <div id="iddiv">
    <img id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>

    
    
   </div>
   
    <div id ="myinfo">
    <h3> Min Info: </h3>
    <h5> Navn: </h5>
    <p> {{fullname}} </p>
    <h5> Tlf: </h5>
    <p> {{phone}} </p>
    <h5> E-Post: </h5>
    <p> {{email}}</p>
    <br>
    </div>
    <h3> Mine timer: </h3>
    <div id="ordercontainer">f</div>

   
    <img @click="back" src="pages/Images/back.png" class ="backimg"><br>
    <img @click="linkloggout"  id="logoutimg" src="pages/Images/signout.png">
    <img id="logo2" src="pages/Images/logo.png">

</div>
    `,


data(){ 
    return  {
        user:userdata.theuser[0].username,
        fullname:userdata.theuser[0].firstname+""+userdata.theuser[0].lastname,
        phone:userdata.theuser[0].phone,
        email:userdata.theuser[0].email,
            }
    },
    methods: {
       
        back:function(){locationorder:this.$router.replace({ path: "/startpage" })},
        linkloggout:function(){locationorder:this.$router.replace({ path: "/" })}
       
      
       
       

    }
    
};
    export default startPage;