function login()
{
    var uname=document.getElementById("username").value;
    var pswd=document.getElementById("password").value;

    if(uname==pswd){
        alert("Uname and password are same ");
    }
    else{
        alert("Uname and password doesnt match ");
        
    }
}