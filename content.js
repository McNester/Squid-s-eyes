chrome.runtime.onMessage.addListener(function (request) { 
   if(request == "off"){
      document.querySelector('html').style.filter = 'unset'
   }


   if(request == 0){
      
      document.querySelector('html').style.filter = 'hue-rotate(100deg)'
   }


   if(request == 1){
      document.querySelector('html').style.filter = 'hue-rotate(167deg)'
   }


   if(request == 2){
      document.querySelector('html').style.filter = 'hue-rotate(309deg)'
   }


   //done
   if(request == 3){
      document.querySelector('html').style.filter = 'grayscale(100%)'
   }

 })




   
   
   


