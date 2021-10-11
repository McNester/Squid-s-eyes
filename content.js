chrome.runtime.onMessage.addListener(function (request) { 
   if(request == "on"){
      document.querySelector('html').style.filter = 'grayscale(100%)'
   }
   if(request == "off"){
      document.querySelector('html').style.filter = 'grayscale(0%)'
   }

 })




   
   
   


