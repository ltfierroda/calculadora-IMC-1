var cal= document.getElementById('cal')
cal.onclick= function(){
    var  Ingresepeso1=document.getElementById('kg').value
    var  Ingresealtura1=document.getElementById('m').value
    var  Ingresepeso2=document.getElementById('kgr').value
    var  Ingresealtura2=document.getElementById('mt').value
    var imc=Math.ceil(Ingresepeso1/(Ingresealtura1*Ingresealtura1));
    var imcx=Math.ceil(Ingresepeso2/(Ingresealtura2*Ingresealtura2));
    if (imc >imcx){
        alert('el imc '+imc+ ' de usuario 1 es mayor')
    }else {
        alert('el imc '+imcx+' de usuario 2 es mayor')
    }
    
}