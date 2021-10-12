document.addEventListener("DOMContentLoaded", function(event) { 
    

    var isToggleTurnedOn = false;

    


    //-1- none


    // 0- prot
    // 1- deut
    // 2- tritan
    // 3- mono
    var kindOfBlindness = -1;



    const protBtn = document.querySelector("#prot");
    const deutBtn = document.querySelector("#deut");
    const tritanBtn = document.querySelector("#tritan");
    const monoBtn = document.querySelector("#mono");



    protBtn.addEventListener('click',function(){
        
        kindOfBlindness = 0;
    })

    deutBtn.addEventListener('click',function(){
        kindOfBlindness = 1;
    })

    tritanBtn.addEventListener('click',function(){
        kindOfBlindness = 2;
    })

    monoBtn.addEventListener('click',function(){
        kindOfBlindness = 3;
    })




    document.querySelector('.checkbox').addEventListener('click',toggleChanged )

    function toggleChanged(){

        document.querySelector('.layer').addEventListener("transitionend", showAlert);
        
    

    }

    function showAlert(){
        if(isToggleTurnedOn == false){
            isToggleTurnedOn = true;

            chrome.tabs.query({currentWindow: true, active: true},
                function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id,kindOfBlindness)
                }
            )

         

            return;
        }

        isToggleTurnedOn = false;

        chrome.tabs.query({currentWindow: true, active: true},
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,'off')
            }
        )

        
    }



},false);