function validarCadena() {
    var cadena = document.getElementById("input").value;
    var result = document.getElementById("output")

    if (cadena === "") {
        result.textContent = "La cadena no puede estar vacía.";
        return;
    }

    if (!cadena.match(/^[\[\]\(\)]+$/)) {
        result.textContent = "La cadena contiene caracteres no válidos.";
        return;
    }

    if (validarEquilibrio(cadena) && validarAnidamiento(cadena)) {
        result.textContent = "La cadena es válida.";
    } else {
        result.textContent = "La cadena no es válida.";
    }
}

function validarEquilibrio(cadena) {
    var pila = [];
    var pares = {
        "]": "[",
        ")": "("
    };

    for (var i = 0; i < cadena.length; i++) {
        var char = cadena[i];

        if (char === "[" || char === "(") {
            pila.push(char);
        } else if (char === "]" || char === ")") {
            if (pila.length === 0 || pila.pop() !== pares[char]) {
                return false;
            }
        }
    }

    return pila.length === 0;
}

function validarAnidamiento(cadena) {
    var nivel = 0;

    for (var i = 0; i < cadena.length; i++) {
        var char = cadena[i];

        if (char === "[") {
            nivel++;
        } else if (char === "]") {
            nivel--;

            if (nivel < 0) {
                return false;
            }
        }
    }

    return nivel === 0;
}