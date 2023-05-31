function validateBinary() {
  var input = document.getElementById("input").value;
  var result = document.getElementById("output");

  // Validar que la cadena no esté vacía
  if (input === "") {
    result.textContent = "La cadena no puede estar vacía.";
    return;
  }

  // Validar que la cadena esté compuesta solo por "0" y "1"
  if (!/^[01]+$/.test(input)) {
    result.textContent = "La cadena solo puede contener '0' y '1'.";
    return;
  }

  // Validar que los "1" sigan después de los "0"
  var zeroIndex = input.indexOf("0");
  var oneIndex = input.indexOf("1");

  if (zeroIndex === -1 || oneIndex === -1 || oneIndex < zeroIndex) {
    result.textContent = "Los '1' deben seguir después de los '0'.";
    return;
  }

  // Validar que después de los "1" no haya más "0"
  var afterOne = input.substring(oneIndex + 1);

  if (afterOne.includes("0")) {
    result.textContent = "Después de los '1' no puede haber más '0'.";
    return;
  }

  // Validar que la cantidad de "1" sea el doble que la de "0"
  var ones = input.match(/1/g);
  var zeros = input.match(/0/g);

  if (ones.length === zeros.length * 2) {
    result.textContent = "La cantidad de '1' es el doble que la de '0'. La cadena es válida :D";
  } else {
    result.textContent = "La cantidad de '1' no es el doble que la de '0'. La cadena no es válida D:";
  }
}

//------------------------------------------

function validatePalindrome() {
  var input = document.getElementById("input_p").value;
  var result = document.getElementById("output_p");

  // Validar que la cadena no esté vacía
  if (input === "") {
    result.textContent = "La cadena no puede estar vacía.";
    return;
  }

  // Validar que la cadena solo contenga 'a' y 'b'
  if (!/^[ab]+$/.test(input)) {
    result.textContent = "La cadena solo puede contener 'a' y 'b'.";
    return;
  }

  if (input.length % 2 !== 0) {
    result.textContent = "La cadena debe tener una longitud par.";
    return;
  }

  // Validar si la cadena es un palíndromo
  var reversedInput = input.split("").reverse().join("");

  if (input === reversedInput) {
    result.textContent = "La cadena es un palíndromo.";
  } else {
    result.textContent = "La cadena no es un palíndromo.";
  }
}