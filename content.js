chrome.runtime.onMessage.addListener(function (request) {
   if (request == "off") {
      document.querySelector('html').style.filter = 'unset'
   }


   //done
   if (request == 0) {

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      svg.setAttribute("display", "none");

      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

      var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id", "protanopia");


      var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");


    


      feColorMatrix.setAttribute("values","1.0 -0.3 0.25 0.0 0.0\
                                           0.7  1   0.25 0.0 0.0\
                                           0.0 0.0 2 0.0 0.0\
                                           0.0 0.0 0.0 1.0 0.0");

      filter.appendChild(feColorMatrix);

      svg.appendChild(filter);






      document.querySelector('body').appendChild(svg);

      document.querySelector('html').style.filter = "url('#protanopia')";

   }


   //done
   if (request == 1) {

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      svg.setAttribute("display", "none");

      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

      var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id", "deuteranopia");


      var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");


      feColorMatrix.setAttribute("values","0.9 0.0 -0.1 0.0 0.0\
                                           0.8 0.9 -0.1 0.0 0.0\
                                           0.0 0.0 2.0 0.0 0.0\
                                           0.0 0.0 0.0 1.0 0.0");







      filter.appendChild(feColorMatrix);

      svg.appendChild(filter);






      document.querySelector('body').appendChild(svg);

      document.querySelector('html').style.filter = "url('#deuteranopia')";

   }


   //done
   if (request == 2) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      svg.setAttribute("display", "none");

      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

      var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id", "tritanopia");


      var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");


    


      feColorMatrix.setAttribute("values","1.000 -0.600  0.400  0.000  0.000\
                                           0.100  1.000  0.300  0.000  0.000\
                                           0.600  -1.500 1.200  0.000  0.000\
                                           0.000  0.000  0.000  1.000  0.000");



      filter.appendChild(feColorMatrix);

      svg.appendChild(filter);






      document.querySelector('body').appendChild(svg);

      document.querySelector('html').style.filter = "url('#tritanopia')";

   }


   //done
   if (request == 3) {

     
      
      document.querySelector('html').style.filter = 'grayscale(100%)'
   }

})









