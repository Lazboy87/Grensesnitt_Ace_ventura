
 
const logginnPageEmploye ={
    template: `
    
    <div id = "container" >
   
    <link rel="stylesheet" href="pages/logginn.css">
   
    <img id="logo" src="pages/Images/Studentklinikk logo.png" alt="Høyskolen Kristiania header logo">
    <br>
   <br>
    <h2 id="logginntxtH1">Ansatt logg inn:</h2>

    
    
  
    <div id="logginndiv" >
        <form  class="loginform"  >
        
        <input class="loginformfield" type="text" v-model="usernameinp" placeholder="Brukernavn" required><br>
        <input class="loginformfield" id="passloginn" type="password" v-model="passwordinp" placeholder="Passord" required><br>
       
        <input @click="loginn(user)" class="loginformfield" id="subloginn" type="submit" value="Logg inn">
       
        
        
        </form>
        
        </div>
       
   
      
    <img id="logo2" src="pages/Images/logo.png" alt="Høyskolen Kristiania footer logo">

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
                    for (var i = 0; i < employedata.employe.length; i++) {

                        if(employedata.employe[i].Eusername==username && employedata.employe[i].Epassword==password){
                            usernamechk = true;
                            passwordchk = true;
                            const employe={
                                        Eid:employedata.employe[i].Eid,
                                        Efirstname:employedata.employe[i].Efirstname,
                                        Elastname:employedata.employe[i].Elastname,
                                        Ephone:employedata.employe[i].Ephone,
                                        Eemail:employedata.employe[i].Eemail,
                                        Eusername:employedata.employe[i].Eusername,
                                     
                                        }
                            employedata.setEmploye.push(employe);
                           console.log(employedata.setEmploye);
                        }
                        
                    }
                    
                    if(usernamechk==true && passwordchk ==true){
                        this.$router.replace({ path: "/employe" });
                    
                }else{
                    alert("Feil Brukernavn eller Passord")}
                    
                        
                    

                        
                            
                        
                
                }, 

    }

};
    
    export default logginnPageEmploye;