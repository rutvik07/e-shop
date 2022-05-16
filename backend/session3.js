var fun1 = ()=>{
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#em').value;
    var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var psd = document.querySelector('#psd').value;
    var conpsd = document.querySelector('#conpsd').value;
    
    if(name === "")
    {
        alert("Name Cannot Be Blank");
    }
    if(email === "")
    {
        alert("Email Cannot Be Blank");
    }
    else if(!email.match(email_regex))
    {
        alert("Invalid Email");
    }
    if(psd === "")
    {
        alert("Password Cannot Be Blank");
    }
    else if(psd.length < 8)
    {
        alert("Password is too short");
    }
    if(conpsd === "")
    {
        alert("Confirm Password Cannot Be Blank");
    }
    else if(psd != conpsd)
    {
        alert("Confirm Password Does Not Match !");
    }
   
};