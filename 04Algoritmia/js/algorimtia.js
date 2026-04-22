function problema1() {

}
function problema2() {
    //Vector1
    var px_x1 = document.querySelector("#p2-x1").value;
    var px_x2 = document.querySelector("#p2-x2").value;
    var px_x3 = document.querySelector("#p2-x3").value;
    var px_x4 = document.querySelector("#p2-x4").value;
    var px_x5 = document.querySelector("#p2-x5").value;
    //Vector2
    var px_y1 = document.querySelector("#p2-y1").value;
    var px_y2 = document.querySelector("#p2-y2").value;
    var px_y3 = document.querySelector("#p2-y3").value;
    var px_y4 = document.querySelector("#p2-y4").value;
    var px_y5 = document.querySelector("#p2-y5").value;
    //Creamos los vectores
    var vector1 = [px_x1, px_x2, px_x3, px_x4, px_x5];
    var vector2 = [px_y1, px_y2, px_y3, px_y4, px_y5];
    //Primero vamos a ordenar los elementos para permutarlos
    vector1 = vector1.sort(function(a, b){return b-a});
    vector2 = vector2.sort(function(a, b){return a-b});
    //Ahora vamos a permutar los elementos
    vector2 = vector2.reverse();
    //Ahora vamos a multiplicar los elementos de ambos vectores
    var resultado = 0;
    for (var i = 0; i < vector1.length; i++) {
        resultado += vector1[i] * vector2[i];
    }
    //Mostramos el resultado
    document.querySelector('#p2-resultado').textContent = "El producto escalar es: " + resultado;
}
function problema3() {
}