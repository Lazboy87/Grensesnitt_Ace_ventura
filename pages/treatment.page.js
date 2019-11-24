const treatmentPage={
    template:` 
    <div id="container">
    <link rel="stylesheet" href="pages/treatment.css">
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
    
    <div id="iddiv">
    <img  @click="linkmypage" id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>

     
     </div>
  
        <h1 id="headline" class="hTag">Velg Behandling</h1>
        
        <div @click="orderAku" class="routerContainer">
        <router-link to="/date" class="elLink">Akupunktur</router-link>
        <img v-on:click="seen = !seen" class="Images" id="img1" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen" v-on:click="seen = !seen" id="Popup1" class="testPopup">
            <p v-if="seen">
            Akupunktur
Akupunktur er en persontilpasset behandling der diagnostikk, behandling og oppfølging er skreddersydd for hver pasient med sine unike særtrekk og behov under hvert trinn av behandlingen. 

• Kronisk smerte
• Migrene og hodepine 
• Lettere angst og depresjon 
• Stress 
• Allergi
• Kvinners Helse
• Fordøyelses Problematikk 
• Søvnproblemer 

Enkelt fortalt virker akupunktur ved å stimulere perifere nerver og bindevev som frigjør signalstoffer som har en effekt på det sentrale nervesystemet. Disse signalstoffene regulerer områder i hjernen som blant annet påvirker det autonome nervesystemet.
 
Akupunktøren vil i førstegangskonsultasjonen ha fokus på å få oversikt over symptomer og årsaksforhold. I behandlingen settes tynne nåler i spesifikke punkter på kroppen. I tillegg kan det gis annen behandling, for eksempel kopping-massasje eller varmende behandling. Det gis veiledning om kosthold og fysisk aktivitet når dette er aktuelt. 

Førstegangskonsultasjon 90 min / Oppfølgende konsultasjon 45min 

            </p>
            </div>
        
        <div @click="orderOst" class="routerContainer">
        <router-link to="/date" class="elLink">Osteopati</router-link>
        <img v-on:click="seen2 = !seen2" class="Images" id="img2" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen2" v-on:click="seen2 = !seen2" id="Popup2" class="testPopup">
            <p v-if="seen2">
            Osteopati

En osteopat undersøker og behandler muskel- og skjelettsmerter med manuelle behandlingsteknikker på benk. Terapeuten fokuserer på å avdekke funksjons- og bevegelsesforstyrrelser som kan være med på å skape smerte. Behandlingen egner seg for pasienter i alle aldre. 

• Nakkesmerter 
• Hodepine
• Bekkensmerte 
• Seneplage 
• Leddplager
• Idrettsplager
 • Belastningsskader 

Osteopati som helseprofesjon 
Osteopati baseres på vitenskapelige og kliniske fag. En osteopat undersøker og behandler ved hjelp av den biopsykososiale modellen og tar utgangspunkt i at god helse ikke bare er fravær av sykdom, men også et velfungerende muskel- og skjelettsystem. Gjennom osteopatibehandling ønsker en å fremme kroppens evne til å hjelpe seg selv. Behandlingen er trygg og individualisert. 

Osteopaten vil sammen med deg lage en plan for dine behandlinger, og fortelle hva du kan forvente og hva du selv må ta ansvar for. 

Førstegangskonsultasjon 90 min / Oppfølgende konsultasjon 45min 

            </p>
            </div>
        
        <div @click="orderFyso" class="routerContainer">
        <router-link to="/date" class="elLink">Fysiologisk Testlab</router-link>
        <img v-on:click="seen3 = !seen3" class="Images" id="img3" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen3" v-on:click="seen3 = !seen3" id="Popup3" class="testPopup">
            <p v-if="seen3">
            Fysiologisk testlab
Høyskolen Kristanias fysiologiske testlaboratorium er et topp moderne laboratorium som brukes til undervisning og forskning.

Også våre studenter, spesielt de på Bachelor i Fysisk aktivitet og ernæring, har mye undervisning i laboratoriet.

Testing av egen helse er samtidig både motiverende og gir verdifull informasjon for mange andre. Derfor tilbyr vi tester til deg som ønsker å teste din fysiske tilstand og prestasjonsevne.

På testlaboratoriet finner vi ut hva status er nå, måler fremgang og gir deg videre råd og tilpasning av mosjon og trening.

Mer info på: https://kristiania.no/for-publikum/fysiologisk-testlab/
 .</p>
            </div>
        
        <div @click="orderKost" class="routerContainer">
        <router-link to="/date" class="elLink">Kostholdsveiledning</router-link>
        <img v-on:click="seen4 = !seen4" class="Images" src="pages/Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen4" v-on:click="seen4 = !seen4" id="Popup4" class="testPopup">
            <p v-if="seen4">Kostholdsveiledning

            Veiledning passer ypperlig for deg som ønsker å forebygge sykdom, gå ned eller opp i vekt, spise optimalt med tanke på trening og prestasjon, har allergier eller intoleranser som krever tilpasning av kosten eller ønsker å ha et generelt sunt kosthold.
            
            Kostveiledningen gjøres av avgangsstudenter som tar en bachelorgrad i ernæring under veiledning av autoriserte kliniske ernæringsfysiologer. 
            
            Førstegangs konsultasjon 60 min / Oppfølgende konsultasjon 45min 
            </p>
            </div>
           
            <img @click="back" src="pages/Images/back.png" class ="backimg"><br>
            <img id="logo2" src="pages/Images/logo.png">
    </div>
    `,
    data(){
        return{
            
            seen: false, 
            seen2: false,
            seen3: false,
            seen4: false,
           user:"defaultuser",
        }
    },
    methods:{
        linkmypage:function(){locationmypage:this.$router.replace({ path: "/mypage" })},
        back:function(){locationorder:this.$router.replace({ path: "/startpage" })},
        linkloggout:function(){locationorder:this.$router.replace({ path: "/" })},
        orderAku:function(){userdata.ordertemp.treatment ="Akupunktur";console.log(userdata.ordertemp.treatment)},
        orderOst:function(){userdata.ordertemp.treatment ="Osteopati";console.log(userdata.ordertemp.treatment)},
        orderFyso:function(){userdata.ordertemp.treatment ="Fysiologisk Testlab";console.log(userdata.ordertemp.treatment)},
        orderKost:function(){userdata.ordertemp.treatment ="Kostholdsveiledning";console.log(userdata.ordertemp.treatment)},
        setuser:function(){
            window.scrollTo(0,0);
            for (let i = 0; i < userdata.theuser.length; i++) {

                if (userdata.theuser ==null ){
                this.user="defaultuser";
            }else{this.user= userdata.theuser[i].username}
        }
        },

    },

    beforeMount(){
        this.setuser()
     },
    };
    export default treatmentPage;

