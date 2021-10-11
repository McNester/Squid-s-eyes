document.addEventListener("DOMContentLoaded", function(event) { 
    

    var isToggleTurnedOn = false;


    document.querySelector('.checkbox').addEventListener('click',toggleChanged )

    function toggleChanged(){

        document.querySelector('.layer').addEventListener("transitionend", showAlert);
        
    

    }

    function showAlert(){
        if(isToggleTurnedOn == false){
            isToggleTurnedOn = true;

            chrome.tabs.query({currentWindow: true, active: true},
                function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id,'on')
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