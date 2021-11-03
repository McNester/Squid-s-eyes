chrome.runtime.onMessage.addListener(function (request) {
   if (request == "off") {
      document.querySelector('html').style.filter = 'unset'
   }


   if (request == 0) {

      document.querySelector('html').style.filter = 'hue-rotate(167deg)'
      
   }


   if (request == 1) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      svg.setAttribute("display","none");
      
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  
      var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id","deuteranopia");
      
  
      var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");


      feColorMatrix.setAttribute("values","1 0 0 0 0\
                                           0 1 0 0 0\
                                           0 0 1 0 0\
                                           0 0 0 1 0");
  
  
  
      filter.appendChild(feColorMatrix);
  
      svg.appendChild(filter);    
  
      
  
      
      
  
      document.querySelector('body').appendChild(svg);
  
      document.querySelector('html').style.filter = "url('#deuteranopia')";
      
   }


   if (request == 2) {
      document.querySelector('html').style.filter = 'hue-rotate(309deg)'
   }


   //done
   if (request == 3) {
      document.querySelector('html').style.filter = 'grayscale(100%)'
   }

})









