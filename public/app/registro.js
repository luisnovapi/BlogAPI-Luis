function register()
{
    var name=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;


var data ={
    name: name,
    email: email,
    password: password
};

console.log(data);

fetch(`${API_PATH}/register`,
    {method:'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type' : 'aplication/JSON'
    }

    })
    .then(res => res.json())
    .then(response => console.log('Success:' , response))
    .catch(error => console.error ('Error :' , error));

  


    
}


window.onload = function()
{
   // console.log("Probando Debug");

   document.getElementById("btnRegistrar")
   .addEventListener("click", function(){
   register();
});

}

