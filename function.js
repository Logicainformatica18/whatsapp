
function send(){

    var numero_destino=w.numero_destino.value;
    var message=w.message.value;
    let url = "https://api.whatsapp.com/send?phone=51"+ numero_destino+"&text=*"+ message + " *%0A";
    window.open(url);
}

function clean(){
    w.numero_destino.value="";
    w.message.value="";
}