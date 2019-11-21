const treatmentPage={
    template:` 
    <div id="container">
    <link rel="stylesheet" href="pages/treatment.css">
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
    
    <div id="iddiv">
    <img  @click="linkmypage" id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>

     <img @click="linkloggout"  id="logoutimg" src="pages/Images/signout.png">
     </div>
  
        <h1 id="headline" class="hTag">Velg Behandling</h1>
        
        <div class="routerContainer">
        <router-link to="/date" class="elLink">Akupunktur</router-link>
        <img v-on:click="seen = !seen" class="Images" id="img1" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen" v-on:click="seen = !seen" id="Popup1" class="testPopup">
            <p v-if="seen">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
        
        <div class="routerContainer">
        <router-link to="/date" class="elLink">Osteopati</router-link>
        <img v-on:click="seen2 = !seen2" class="Images" id="img2" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen2" v-on:click="seen2 = !seen2" id="Popup2" class="testPopup">
            <p v-if="seen2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
        <div class="routerContainer">
        <router-link to="/date" class="elLink">Fysiologisk Testlab</router-link>
        <img v-on:click="seen3 = !seen3" class="Images" id="img3" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen3" v-on:click="seen3 = !seen3" id="Popup3" class="testPopup">
            <p v-if="seen3">
            Høyskolen Kristanias fysiologiske testlaboratorium er et topp moderne laboratorium som brukes
             til undervisning og forskning.
            
            Også våre studenter, spesielt de på Bachelor i Fysisk aktivitet og ernæring, 
            har mye undervisning i laboratoriet.
            
            
            Testing av egen helse er samtidig både motiverende og 
            gir verdifull informasjon for mange andre. Derfor tilbyr vi tester til deg som ønsker å
             teste din fysiske tilstand og prestasjonsevne.
            
            På testlaboratoriet finner vi ut hva status er nå, måler 
            fremgang og gir deg videre råd og tilpasning av mosjon og trening. .</p>
            </div>
        
        <div class="routerContainer">
        <router-link to="/date" class="elLink">Kostholdsveiledning</router-link>
        <img v-on:click="seen4 = !seen4" class="Images" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen4" v-on:click="seen4 = !seen4" id="Popup4" class="testPopup">
            <p v-if="seen4"><img src="informasjon informasjon"></p>
            </div>
           
            <button @click="back" class ="backbutton">Tilbake</button><br>
            <img id="logo2" src="pages/Images/logo.png">
    </div>
    `,
    data(){
        return{
            
            seen: false, 
            seen2: false,
            seen3: false,
            seen4: false,
            user:userdata.theuser[0].username,
        }
    },
    methods:{
        linkmypage:function(){locationmypage:this.$router.replace({ path: "/mypage" })},
        back:function(){locationorder:this.$router.replace({ path: "/startpage" })},
        linkloggout:function(){locationorder:this.$router.replace({ path: "/" })}

        

    }
    };
    export default treatmentPage;

