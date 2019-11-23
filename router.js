import startPage from "./pages/startPage.page.js";
import timePage from "./pages/time.page.js";
import treatmentPage from "./pages/treatment.page.js";
import datePage from "./pages/date.page.js";
import contactInfo from "./pages/contactInfo.page.js";
import logginnPageuser from "./pages/logginn.page.js";
import mypage from "./pages/myPage.page.js";
import logginnPageEmploye from "./pages/Employelogin.page.js";
import useremploye from "./pages/useremploye.page.js";






 const router = new VueRouter(
     
    {
      
     
     routes:[
                {
                                
                    path: '/',
                    component: useremploye

                },
       
                {
                        
                    path: '/logginemploye',
                    component: logginnPageEmploye

                },
                {
                  
                    path: '/logginuser',
                    component: logginnPageuser

                },
                {
                    
                    path: '/startpage',
                    component: startPage

                },
                {
                  
                    path: '/time',
                    component: timePage

                },

                {
                   
                    path: '/treatment',
                    component: treatmentPage
                },

                {
                  
                    path: '/date',
                    component: datePage

                },

                {
                   
                    path: '/contactinfo',
                    component: contactInfo
                    
                },
                {
                   
                    path: '/myPage',
                    component: mypage
                    
                }



            ]
    
});

export default router;