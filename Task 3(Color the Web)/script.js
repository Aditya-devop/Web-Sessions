function show(){
    document.getElementById("ans").innerHTML="";
    var x=document.getElementsByName("p2");
    var colors=[];
    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            document.getElementById("ans").innerHTML+=x[i].value.toUpperCase()+" ";
            colors.push(x[i].value);
            
        }
    }
    if(colors.length==1){
        document.body.style.background=colors[0];
    }
    else{
        const gradient=`linear-gradient(-125deg,${colors.join(", ")})`;
        document.body.style.background=gradient;
    }
}
