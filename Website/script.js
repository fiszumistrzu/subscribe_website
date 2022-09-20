            document.querySelector('.getButton').addEventListener('click', function(){
                document.querySelector('#modal').style.display = "block"
            })
            document.querySelector('.botButton').addEventListener('click', function(){
                document.querySelector('#modal').style.display = "block"
            })
            document.querySelector('#wylacz').addEventListener('click', function(){
                document.querySelector('#modal').style.display = "none"
                document.querySelector('.txtInvalidEmail').style.display = "none"
            })

            function checkEmail(inputEmail){
                var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (inputEmail.match(email)){ 
                    document.querySelector('.txtInvalidEmail').style.display = "none"
                    alert('E-mail address has been saved!');
                }
                else{   
                    document.querySelector('.txtInvalidEmail').style.display = "block"     
                }
            }
            document.querySelector('.subButton').addEventListener('click', function(){
                let inputEmail = document.querySelector("input").value
                checkEmail(inputEmail);
                document.querySelector("input").value = '';
            })