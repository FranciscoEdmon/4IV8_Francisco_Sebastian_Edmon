function validar(formulario){
    //Vamos a crear una función para validar que los campos no estén vacios
    if(formulario.nombre.value.trim() === ""){
        alert("El campo de nombre no puede estar vacio");
        formulario.nombre.focus();
        return false;
    }
    if(formulario.edad.value.trim() === ""){
        alert("El campo de edad no puede estar vacio");
        formulario.edad.focus();
        return false;
    }
    if(formulario.email.value.trim() === ""){
        alert("El campo de email no puede estar vacio");
        formulario.email.focus();
        return false;
    }
    
    //Vamos a crear una función para validar un numero minimo de caracteres y el tipo de caracteres en el campo nombre
    if(formulario.nombre.value.length <= 3){
        alert("El nombre debe tener al menos 3 caractares"); //Si el campo nombre tiene menos de 3 caracteres, se muestra una alerta
        formulario.nombre.focus(); //Con esto hacemos que el cursor se posicione en el campo nombre
        return false; //Con esto evitamos que el formulario se envie
    }

    // Función auxiliar para validar caracteres permitidos
    function validarCaracteres(checkString, allowedChars, errorMessage, field) {
        for(var i = 0; i < checkString.length; i++){
            var ch = checkString.charAt(i);
            if(allowedChars.indexOf(ch) === -1){
                alert(errorMessage);
                field.focus();
                return false;
            }
        }
        return true;
    }

    // Validar nombre
    var allowedName = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜabcdefghijklmnñopqrstuvwxyzáéíóúü ";
    if(!validarCaracteres(formulario.nombre.value, allowedName, "El nombre solo puede contener letras y espacios", formulario.nombre)){
        return false;
    }

    // Validar edad (solo números)
    var allowedAge = "0123456789";
    if(!validarCaracteres(formulario.edad.value, allowedAge, "La edad solo puede contener números", formulario.edad)){
        return false;
    }

    var edad = parseInt(formulario.edad.value);
    if(edad <= 0 || edad >=100){
        alert("La edad debe ser un numero entre 1 y 99");
        formulario.edad.focus();
        return false;
    }
    var correoelectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var txt = formulario.email.value;
    var emailValido = correoelectronico.test(txt);

    alert("Email " + (emailValido ? "válido" : "no válido"));
    if(!emailValido){
        formulario.email.focus();
        return false;
    }
}