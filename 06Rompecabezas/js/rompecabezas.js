var instrucciones = [
    "Utiliza las flechas de navegación para mover las piezas del rompecabezas. El objetivo es ordenar las piezas correctamente para completar la imagen. ¡Diviértete jugando!",
    "Para ordenar las piezas, haz clic en la pieza que deseas mover y luego haz clic en la dirección a la que quieres moverla (arriba, abajo, izquierda o derecha). Asegúrate de que la pieza vacía esté adyacente a la pieza que deseas mover para que el movimiento sea válido."
];

var movimientos = [];

//Esta es la configuración inicial del rompecabezas, la cual se puede mezclar para crear un nuevo juego
var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Esta es la configuración correcta del rompecabezas, la cual se utilizará para verificar si el jugador ha ganado
var rompeCorrecto = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Necesito conocer la posición de la pieza vacía para poder mover las piezas correctamente
var piezaVacia = {fila: 2, columna: 2};

//Ahora necesito una función que se encargue de mostrar la lista de instrucciones en el HTML
function mostrarInstrucciones() {
    for(var i = 0; i < instrucciones.length; i++) {
       mostrarInstruccionesEnLista(instrucciones[i], "lista-instrucciones");
    }
}
function mostrarInstruccionesEnLista(instruccion, idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}