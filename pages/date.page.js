const datePage={
template:`
<div id="container">
<link rel="stylesheet" type="text/css" href="pages/date.css">
   
    <img id="logo" src="pages/Images/Studentklinikk logo.png">
  
    <div @click="mypage" id="iddiv">
    <img id="idimg" src="pages/Images/ID.png">
     <p id="textuser">Bruker:<br>{{user}}</p>

    
    
   </div>
<h2 id="logginntxtH2">Velg Ønsket Dato:</h2>
<div id="datecontainer">
<H4>Velg år:</H4>
<div id="yearselector">
        <img @click="minusyear" id="minusyear" src="pages/Images/arrowleft.png" class="arrowpic">
        <h3 id="yearheader">-{{yearcounter}}-</h3>
       
        <img @click="plussyear" id="plussyear" src="pages/Images/arrowleft.png" class="arrowpic">

    </div>
    <H4>Velg en måned:</H4>
    <div id="monthselector">
    <img @click="minusmonth" id="minusmonth" src="pages/Images/arrowleft.png" class="arrowpic">
        <h3 id="monthheader">-{{month}}-</h3>
       
        <img @click="plussmonth" id="plussmonth" src="pages/Images/arrowleft.png" class="arrowpic">
</div>
<H4>Velg en dag:</H4>
    <div id="daycontainer">
    
<div @click="returnDay()" class="datediv" id="01">01</div>
<div @click="returnDay()" class="datediv" id="02">02</div>
<div @click="returnDay()" class="datediv" id="03">03</div>
<div @click="returnDay()" class="datediv" id="04">04</div>
<div @click="returnDay()" class="datediv" id="05">05</div>
<div @click="returnDay()" class="datediv" id="06">06</div>
<div @click="returnDay()" class="datediv" id="07">07</div>
<div @click="returnDay()" class="datediv" id="08">08</div>
<div @click="returnDay()" class="datediv" id="09">09</div>
<div @click="returnDay()" class="datediv" id="10">10</div>
<div @click="returnDay()" class="datediv" id="11">11</div>
<div @click="returnDay()" class="datediv" id="12">12</div>
<div @click="returnDay()" class="datediv" id="13">13</div>
<div @click="returnDay()" class="datediv" id="14">14</div>
<div @click="returnDay()" class="datediv" id="15">15</div>
<div @click="returnDay()" class="datediv" id="16">16</div>
<div @click="returnDay()" class="datediv" id="17">17</div>
<div @click="returnDay()" class="datediv" id="18">18</div>
<div @click="returnDay()" class="datediv" id="19">19</div>
<div @click="returnDay()" class="datediv" id="20">20</div>
<div @click="returnDay()" class="datediv" id="21">21</div>
<div @click="returnDay()" class="datediv" id="22">22</div>
<div @click="returnDay()" class="datediv" id="23">23</div>
<div @click="returnDay()" class="datediv" id="24">24</div>
<div @click="returnDay()" class="datediv" id="25">25</div>
<div @click="returnDay()" class="datediv" id="26">26</div>
<div @click="returnDay()" class="datediv" id="27">27</div>
<div @click="returnDay()" class="datediv" id="28">28</div>
<div @click="returnDay()" class="datediv" id="29">29</div>
<div @click="returnDay()" class="datediv" id="30">30</div>
<div @click="returnDay()" class="datediv" id="31">31</div>

    </div>
 </div>

 <img @click="back" src="pages/Images/back.png" class ="backimg"><br>
    
    <img id="logo2" src="pages/Images/logo.png">

</div>`,
data(){
    return{
        user:"",
        monthcounter:1,
        yearcounter:2019,
        month:"Januar",
        monthvalue:"01",
        dayvalue:"01",
        yearvalue:"2019",

       
    }
},
methods:{
   mypage:function(){locationmypage:this.$router.replace({ path: "/mypage" })},
    back:function(){locationorder:this.$router.replace({ path: "/treatment" })},
    linkloggout:function(){locationorder:this.$router.replace({ path: "/" })},
    monthchk:function(){switch(this.monthcounter){
        case 1:
        this.month = "Januar";
        this.monthvalue = "01"
        break;
        case 2:
        this.month = "Februar";
        this.monthvalue = "02"
        break; 

        case 3:
        this.month = "Mars";
        this.monthvalue = "03"
        break;

        case 4:
        this.month = "April";
        this.monthvalue = "04"
        break;

        case 5:
        this.month = "Mai";
        this.monthvalue = "05"
        break;
        
        case 6:
        this.month = "Juni";
        this.monthvalue = "06"
        break;

        case 7:
        this.month = "Juli";
        this.monthvalue = "07"
        break;

        case 8:
        this.month = "August";
        this.monthvalue = "08"
        break;

        case 9:
        this.month = "September";
        this.monthvalue = "09"
        break;

        case 10:
        this.month = "Oktober";
        this.monthvalue = "10"
        break;

        case 11:
        this.month = "November";
        this.monthvalue = "11"
        break;

        case 12:
        this.month = "Desember";
        this.monthvalue = "12"
        break;

        }},
    plussmonth:function(){

        this.monthcounter += 1;
        if(this.monthcounter > 12 ){
            this.monthcounter=1;
        }
        this.monthchk();
     },

     minusmonth:function(){

        this.monthcounter -= 1;
        if(this.monthcounter < 1 ){
            this.monthcounter=12;
        }
        this.monthchk();
     },

     plussyear:function(){
         
        this.yearcounter += 1;
        this.yearvalue = this.yearcounter.toString();
        console.log(this.yearvalue);
        if(this.yearcounter >= 2022 ){
            this.yearcounter=2019;
            this.yearvalue = "2019";
            console.log(this.yearvalue);
        }
        
     },

     minusyear:function(){

        this.yearcounter -= 1;
        if(this.yearcounter < 2019 ){
            this.yearcounter=2021;
        }
        
     },

     returnDay:function(){
         this.dayvalue = event.srcElement.id;
         this.$router.replace({ path: "/time" });
         userdata.ordertemp.date=this.dayvalue+"."+this.monthvalue+"."+this.yearvalue;
        alert(userdata.ordertemp.date);
        },

         setuser:function(){
            window.scrollTo(0,0);
            if (userdata.theuser[0] == null){
                this.user="defaultuser";
            }else{this.user= userdata.theuser[0].username}
        }

    

    

},
beforeMount(){
    this.setuser()
 },
};
export default datePage;


