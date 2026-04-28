function problema1() {
    const input = document.getElementById('p1-input').value;
    const output = document.getElementById('p1-output');
    
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    if (!regex.test(input)) {
        output.textContent = "Error: Por favor ingresa únicamente letras y espacios.";
        return;
    }
    
    const palabras = input.trim().split(/\s+/);
    const invertidas = palabras.reverse().join(" ");
    
    output.textContent = invertidas;
}

function problema2() {
    const output = document.getElementById('p2-output');
    const regex = /^-?\d+(\.\d+)?$/;
    
    let x = [];
    let y = [];
    
    for (let i = 1; i <= 5; i++) {
        let valX = document.getElementById('p2-x' + i).value;
        let valY = document.getElementById('p2-y' + i).value;
        
        if (!regex.test(valX) || !regex.test(valY)) {
            output.textContent = "Error: Todos los campos deben contener números válidos.";
            return;
        }
        
        x.push(parseFloat(valX));
        y.push(parseFloat(valY));
    }
    
    x.sort((a, b) => b - a);
    y.sort((a, b) => b - a);
    
    let productoEscalar = 0;
    
    for (let i = 0; i < x.length; i++) {
        productoEscalar += x[i] * y[i];
    }
    
    output.textContent = "Producto escalar máximo: " + productoEscalar;
}

function problema3() {
    const input = document.getElementById('p3-input').value;
    const output = document.getElementById('p3-output');
    
    const regex = /^[A-Z]+(,[A-Z]+)*$/;
    
    if (!regex.test(input)) {
        output.textContent = "Error: Solo mayúsculas A-Z separadas por comas, sin espacios.";
        return;
    }
    
    const palabras = input.split(',');
    
    let maxUnicos = 0;
    let palabraMax = "";
    
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let caracteresUnicos = new Set(palabra).size;
        
        if (caracteresUnicos > maxUnicos) {
            maxUnicos = caracteresUnicos;
            palabraMax = palabra;
        }
    }
    
    output.textContent = "Palabra: " + palabraMax + " con " + maxUnicos + " caracteres únicos.";
}