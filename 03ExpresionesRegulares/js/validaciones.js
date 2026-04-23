function validarPositivo(valor) {
    const num = parseFloat(valor);
    return (!isNaN(num) && num >= 0);
}

// 1. Inversión
function ejercicio1() {
    const capital = document.getElementById('capital').value;
    if (!validarPositivo(capital)) return alert("Ingresa un capital válido");
    
    const ganancia = capital * 0.02;
    const total = parseFloat(capital) + ganancia;
    document.getElementById('result1').innerText = `Ganancia: $${ganancia.toFixed(2)}. Total: $${total.toFixed(2)}`;
}

// 2. Comisiones
function ejercicio2() {
    const sb = document.getElementById('sueldo').value;
    const v1 = document.getElementById('v1').value;
    const v2 = document.getElementById('v2').value;
    const v3 = document.getElementById('v3').value;

    if ([sb, v1, v2, v3].some(v => !validarPositivo(v))) {
        return alert("Todos los campos deben ser números positivos");
    }

    const comision = (parseFloat(v1) + parseFloat(v2) + parseFloat(v3)) * 0.10;
    const total = parseFloat(sb) + comision;
    document.getElementById('result2').innerText = `Comisiones: $${comision.toFixed(2)}. Total a recibir: $${total.toFixed(2)}`;
}

// 3. Descuento (15%)
function ejercicio3() {
    const total = document.getElementById('totalcompra').value;
    if (!validarPositivo(total)) return alert("Ingresa un monto de compra válido");

    const pagoFinal = total * 0.85;
    document.getElementById('result3').innerText = `Total a pagar: $${pagoFinal.toFixed(2)}`;
}

// 4. Calificación Final (55% parciales, 30% examen, 15% trabajo)
function ejercicio4() {
    const p1 = document.getElementById('p1').value;
    const p2 = document.getElementById('p2').value;
    const p3 = document.getElementById('p3').value;
    const ef = document.getElementById('exFinal').value;
    const tf = document.getElementById('trabFinal').value;

    if ([p1, p2, p3, ef, tf].some(v => !validarPositivo(v) || parseFloat(v) > 10)) {
        return alert("Ingresa calificaciones válidas (0-10)");
    }

    const promedioP = (parseFloat(p1) + parseFloat(p2) + parseFloat(p3)) / 3;
    const notaFinal = (promedioP * 0.55) + (ef * 0.30) + (tf * 0.15);
    document.getElementById('res4').innerText = `Calificación Final: ${notaFinal.toFixed(2)}`;
}

// 5. Porcentaje de Hombres y Mujeres
function ejercicio5() {
    const h = parseInt(document.getElementById('numHombres').value);
    const m = parseInt(document.getElementById('numMujeres').value);

    if (isNaN(h) || isNaN(m) || (h + m) === 0) {
        return alert("Ingresa cantidades válidas (el total no puede ser cero)");
    }

    const total = h + m;
    const porcH = (h / total) * 100;
    const porcM = (m / total) * 100;
    document.getElementById('res5').innerText = `Hombres: ${porcH.toFixed(1)}%, Mujeres: ${porcM.toFixed(1)}%`;
}

// 6. Edad de una persona
function ejercicio6() {
    const fecha = document.getElementById('fechaNacimiento').value;
    if (!fecha) return alert("Selecciona una fecha");

    const hoy = new Date();
    const cumple = new Date(fecha);
    
    if (cumple > hoy) return alert("La fecha no puede ser mayor a la actual");

    let edad = hoy.getFullYear() - cumple.getFullYear();
    const mes = hoy.getMonth() - cumple.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) {
        edad--;
    }

    document.getElementById('res6').innerText = `Tienes ${edad} años.`;
}