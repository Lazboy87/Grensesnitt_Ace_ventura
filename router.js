import startPage from "./pages/startPage.page.js";
import timePage from "./pages/time.page.js";
import treatmentPage from "./pages/treatment.page.js";
import datePage from "./pages/date.page.js";
import contactInfo from "./pages/contactinfo.page.js";
import logginnPage from "./pages/logginn.page.js";
import mypage from "./pages/myPage.page.js";






 const router = new VueRouter(
     
    {
      
     
     routes:[

       
        
                {
                  
                    path: '/',
                    component: logginnPage

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