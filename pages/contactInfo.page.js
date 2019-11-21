const contactInfo ={
    template:`
    
    <div id="container">
    <link rel="stylesheet" type="text/css" href="pages/contactinfo.css">

    
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
  
    <div id="iddiv">
    <img id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>

    
    
   </div>
    <h2> Utfyllende info til klinikken</h2>
    <p> Send oss en melding!</p>
    <textarea id="txtfromuser" v-model="textusr"  placeholder="Skriv her!"></textarea>
   
    <br>
    
    <button @click="order" class="backbutton" id="orderbutton" type="button"> Bestill </button>
   

    <h3> Kontaktinformasjon </h3>
    <br> 
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
</div>
    `,
    
       
       
    data(){
       return{
        textusr:"",
           

       }
   },
   methods:{
    back:function(){locationorder:this.$router.replace({ path: "/time" })},
    order:function(){console.log(this.textusr)},
       
   }
    };
    export default contactInfo;