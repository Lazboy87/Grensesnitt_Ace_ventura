
 
const logginnPage ={
    template: `
    
    <div id = "container" >
   
    <link rel="stylesheet" href="pages/logginn.css">
   
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
    <br>
   <br>
    <h2 id="logginntxtH1">Ansatt logg inn:</h2>

    
    
  
    <div id="logginndiv" v-bind:style="{'display':hidelogin}" >
        <form  class="loginform"  >
        
        <input class="loginformfield" type="text" v-model="usernameinp" placeholder="Brukernavn" required><br>
        <input class="loginformfield" id="passloginn" type="password" v-model="passwordinp" placeholder="Passord" required><br>
       
        <input @click="loginn(user)" class="loginformfield" id="subloginn" type="submit" value="Logg inn">
       
        
        
        </form>
        
        </div>
       
   
      
    <img id="logo2" src="pages/Images/logo.png">

 </div>
    `,

 

data(){ 
    
    return  {
         
            
           usernameinp:"",
            passwordinp:"",
         

            

            }

            
            
    },
    methods: {
                
            
                
               
              

              
                loginn:function(){
                    var usernamechk =false;
                    var passwordchk =false;
                    const password=this.passwordinp;
                    const username=this.usernameinp;
                    for (var i = 0; i < userdata.users.length; i++) {

                        if(userdata.users[i].Cusername==username && userdata.users[i].Cpassword==password){
                            usernamechk = true;
                            passwordchk = true;
                            const user={firstname:userdata.users[i].firstname,
                                        lastname:userdata.users[i].lastname,
                                        phone:userdata.users[i].phone,
                                        email:userdata.users[i].email,
                                        username:userdata.users[i].Cusername,
                                     
                                        }
                            userdata.theuser.push(user);
                           console.log(userdata.theuser);
                        }
                        
                    }
                    
                    if(usernamechk==true && passwordchk ==true){
                        this.$router.replace({ path: "/employePage" });
                    
                }else{
                    alert("Feil Brukernavn eller Passord")}
                    
                        
                    

                        
                            
                        
                
                }, 

    }

};
    
    export default logginnPage;