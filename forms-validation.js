validation=()=>{


    let name=document.getElementById('name').value
    let adress=document.getElementById('adresse').value
    let comm=document.getElementById('commentaire').value
    let email1=document.getElementById('email').value
    let passe=document.getElementById('password').value
    let regexemail=/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    let regexpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/


    if(name==='')
    {
        document.getElementById("msgname").innerHTML = "invalid Name ! ";
    }
    else 
    document.getElementById("msgname").innerHTML = '<i class="fas fa-thumbs-up"></i>';

    if(adress==='')
    {
        document.getElementById("msgadress").innerHTML = "invalid Address !";
    }
    else

    document.getElementById("msgadress").innerHTML = '<i class="fas fa-thumbs-up"></i>';

    if(email1==='' || (regexemail.test(email1)===false))
    {
        document.getElementById("msgmail").innerHTML = "invalid E-mail !";
    }
    else
    document.getElementById("msgmail").innerHTML = '<i class="fas fa-thumbs-up"></i>';

    if(comm==='')
    {
        document.getElementById("msgcomm").innerHTML = "Leave a comment !";   
    }
    else 
    document.getElementById("msgcomm").innerHTML = '<i class="fas fa-thumbs-up"></i>';

    if(passe==='' || (regexpass.test(passe)===false))
    {
        document.getElementById("msgpass").innerHTML = "invalid Password !";
    }
    else
    document.getElementById("msgpass").innerHTML = '<i class="fas fa-thumbs-up"></i>';    
    

}


