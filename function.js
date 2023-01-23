
function send(){
    var codigo_pais =w.codigo_pais.value
    var numero_destino=w.numero_destino.value;
    var message=w.message.value;
    let url = "https://api.whatsapp.com/send?phone="+codigo_pais+ numero_destino+"&text=*"+ message + " *%0A";
    window.open(url);
}

function clean(){
    w.numero_destino.value="";
    w.message.value="";
}