function detectarSecuencia() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  var resultado = "";

  if (input === "") {
    output.textContent = "La cadena no puede estar vacía.";
    return;
  }

  if (!/^[01]+$/.test(input)) {
    output.textContent = "¡Ingresa solo caracteres '1' y '0'!";
    return;
  }

  for (var i = 0; i < input.length; i++) {
    if (input[i - 1] === "0" && input[i] === "1") {
      resultado += "a";
    } else {
      resultado += "b";
    }
  }

  output.textContent = resultado;
}