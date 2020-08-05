function fn1()
{
    var india=document.getElementById("rd1");
    var france=document.getElementById("rd2");

    if(india.checked==true){
        alert("India ");
    }
    else if(france.checked==true){
        alert("France");
        
    }
    else{
        alert("No country selected");
    }
}