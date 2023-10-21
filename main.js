var listaGuest = [];

function click1() {
    var names=document.getElementById("id").value;
    listaGuest.push(names);
    var comprimento_lista=listaGuest.length;
    document.getElementById("nomes1").innerHTML=listaGuest.toString();
}