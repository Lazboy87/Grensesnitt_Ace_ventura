

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
    <h3 @click="createorderdiv"> Mine timer: </h3>
    <button @click="deleteorder" id="cancelorder" class ="backbutton">Avbestill Time(r)</button>
    <div  id="ordercontainer"></div>

   
    <img @click="back" src="pages/Images/back.png" class ="backimg"><br>
    <img @click="linkloggout"  id="logoutimg" src="pages/Images/signout.png">
    <img id="logo2" src="pages/Images/logo.png">

</div>
    `,


data(){ 
    return  {
        user:"",
        fullname:"",
        phone:"",
        email:"",
        id:"",
            }
    },
    methods: {
       
        back:function(){locationorder:this.$router.replace({ path: "/startpage" })},
        linkloggout:function(){locationorder:this.$router.replace({ path: "/" })},
        setuser:function(){
            if (userdata.theuser[0] == null){
                this.user="defaultuser";
                this.fullname="";
                this.phone="";
                this.email="";
                

            }else{this.user= userdata.theuser[0].username;
                this.fullname=userdata.theuser[0].firstname+" "+userdata.theuser[0].lastname;
                this.phone=userdata.theuser[0].phone;
                this.email=userdata.theuser[0].email;
                }},

               

               

                

               
            createorderdiv:function(){
              
                var order;
                for (var i = 0; i < userdata.orders.length; i++) {
                    var id=userdata.orders[i].id;
                    
                    var treatment=userdata.orders[i].treatment;
                    var time=userdata.orders[i].time;
                    var date=userdata.orders[i].date;

                    order = document.createElement('div');
                    order.setAttribute("class", "orders");
                    order.setAttribute("id", id);
                   order.innerHTML = "<h5 class=treatH>Behandling: "+treatment+"</h5>"+
                   "<h5 class=timeH>Tid: "+time+"</h5>"+
                    "<h5 class=dateH>Dato: "+date+"</h5>"+
                    "<div class=delete>"+
                    "<input class=checkbox value="+id+" checked='' type=checkbox id=inp"+id+" name=cancel"+id+">"+
                    "<label for=cancel"+id+">Avbestill</label>"+
                  "</div>";
                  
                  
                  
                     console.log( userdata.orders[i].treatment);
                   var appendto=document.getElementById("ordercontainer");
                   console.log(appendto);
                   appendto.appendChild(order);

                   }
                   var unchecked = document.getElementsByClassName("checkbox");
                  for (var i = 0; i < unchecked.length; i++) {
                      unchecked[i].checked = false;

                  }

             





            },
            deleteorder:function(){
                var checkbox = document.getElementsByClassName("checkbox");
               
                for (var i = 0; i < checkbox.length; i++) {
                    if(checkbox[i].checked == true){
                       var deletethis= checkbox[i]
                       for (var i = 0; i < userdata.orders.length; i++) {
                           if(deletethis.value == userdata.orders[i].id){
                      console.log(deletethis.value);
                            userdata.orders.splice(i,1);
                       
                           
                           }
                          
                       }
                   }
                    
                }
            },

           

    },
    beforeMount(){
        this.setuser()
       },
       mounted() {
           this.createorderdiv()
           
       }
    
    };
    export default startPage;