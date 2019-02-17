//Use RegEx to validate form
document.getElementById("submit").addEventListener("click", function() {
                    
    var userInput = document.getElementsByTagName("input");
                
        for(var i=0; i < userInput.length; i++){
            var userValue = userInput[i].value.trim();
            var userRegEx = new RegExp (userInput[i].pattern);
            var userName = userRegEx.test(userValue);
                    
        if(userName == ""){
            console.log(userInput[i].id + " is invalid")
                
        } else {
            console.log (userValue)
                
            } 
        }
    })
