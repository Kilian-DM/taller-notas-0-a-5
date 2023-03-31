function calcularnota(){
    var nombre = document.getElementById("nombre").value;
    var nota= document.getElementById("nota").value;

    if(nota<=2.95){
    document.getElementById("nombre-resultado").innerHTML="Nombre: "+nombre+"<br><br>";
    document.getElementById("nota-resultado").innerHTML="Nota: "+nota+"<br><br> El estudiante No Aprobó - Deficiente"
}else{
    if(nota<=3.95){
        document.getElementById("nombre-resultado").innerHTML="Nombre: "+nombre+"<br><br>";
    document.getElementById("nota-resultado").innerHTML="Nota: "+nota+"<br><br> El estudiante Aprobó - Aceptable"
    }else{
        if(nota<=5){
        document.getElementById("nombre-resultado").innerHTML="Nombre: "+nombre+"<br><br>";
    document.getElementById("nota-resultado").innerHTML="Nota: "+nota+"<br><br> El estudiante Aprobó - Superior"
    }else{
        alert("Error, Ingrese la nota de 0 a 5");
    }
}
}
}
