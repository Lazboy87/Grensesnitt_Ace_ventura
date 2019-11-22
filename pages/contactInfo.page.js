const contactInfo ={
    template:`
    
    <div id="container">
    <link rel="stylesheet" type="text/css" href="pages/contactinfo.css">

    
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
  
    <div @click="mypage" id="iddiv">
    <img id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>

    
    
   </div>
   <div id="textandinfo" v-bind:style="{'display':hidetxtinfo}">  
    <h2> Utfyllende info til klinikken</h2>
    <p> Send oss en melding!</p>
    <textarea id="txtfromuser" v-model="textusr"  placeholder="Skriv her!"></textarea>
   
    <br>
    
    <button @click="order" class="backbutton" id="orderbutton" type="button"> Bestill </button>
   

    <h3> Kontaktinformasjon </h3>
   
    <h4> Tlf: </h4>
    <p> 971 17 690</p>
    <h4> E-post: </h4>
    <p> studentklinikken@kristiania.no </p>
    <h4> Adresse: </h4>
    <p> Prinsens gate 9, 0153 Oslo </p>
    <div id="adressebilde"> 
        <img src="pages/Images/adresse.png" alt="adressebilde">
    </div>
    
    <img @click="back" src="pages/Images/back.png" class ="backimg"><br>
    
    <img id="logo2" src="pages/Images/logo.png">
    </div>
    
    <div id="confirmdiv" v-bind:style="{'display':hideconfirm}">
    <h2>Bekreft Bestilling:</h2>
    <h4>Behandling:<p>{{treatment}}<p></h4>
    <h4>Dato:<p>{{date}}<p></h4>
    <h4>Tidspunkt:<p>{{time}}<p></h4>
    <h4>Melding til klinikk:<br><p id="messagebox">{{message}}<p></h4>
    
    <button @click="abortorder" class="backbutton" id="abortConfirm">Avbryt</button>
    <button @click="confirmorder" class="backbutton" id="confirmOrder">Bekreft</button>
    <img id="logo2" src="pages/Images/logo.png">
    
    
    </div>


</div>
    `,
    
       
       
    data(){
       return{
        hideconfirm:"none",
        hidetxtinfo:"",
        textusr:"",

        treatment:"",
        time:"",
        date:"",
        message:"",
           

       }
   },
   methods:{
    back:function(){this.$router.replace({ path: "/time" })},
    mypage:function(){this.$router.replace({ path: "/mypage" })},
    
    order:function(){
        userdata.ordertemp.message=this.textusr;
        this.hideconfirm="";
        this.hidetxtinfo="none";
        userdata.ordertemp.message=this.textusr;
        this.message= userdata.ordertemp.message;},

        abortorder:function(){
            
            this.hideconfirm="none";
            this.hidetxtinfo="";
            },

            confirmorder:function(){
            
                this.hideconfirm="none";
                this.hidetxtinfo="";

                },
    
    
        setuser:function(){
        if (userdata.theuser[0] == null){
            this.user="defaultuser";
        }else{this.user= userdata.theuser[0].username}
    },

    settime:function(){
        if (userdata.ordertemp.time == null){
            this.time="null";
        }else{this.time= userdata.ordertemp.time}},

        setdate:function(){
            if (userdata.ordertemp.date == null){
                this.date="null";
            }else{this.date= userdata.ordertemp.date}},
            
          

                settreatment:function(){
                    if (userdata.ordertemp.treatment == null){
                        this.treatment="null";
                    }else{this.treatment= userdata.ordertemp.treatment}},


       
   },
   beforeMount(){
    this.setuser(),
    this.settime(),
    this.setdate(),
    this.settreatment()
 },
    };
    export default contactInfo;