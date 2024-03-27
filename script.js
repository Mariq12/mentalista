/*function iniciarJuego() {
  var userName = document.getElementById("username").value;
  // Convertir la primera letra en mayúscula
  userName = userName.charAt(0).toUpperCase() + userName.slice(1);
  var resultContainer = document.getElementById("resultado");
  resultContainer.innerHTML = ""; // Limpiar el contenedor de resultados
  resultContainer.textContent = "Bienvenido al juego, " + userName + "!";

  var maxIntentos = 10; // Desafio 4
  var intentosRealizados = 0;
  var numeroSecreto = parseInt(Math.random() * 1000) + 1;
  var numeroIngresado; // Desafio 1
  var intentosRestantes;

  while (intentosRealizados < maxIntentos) {
    intentosRealizados++;
    intentosRestantes = maxIntentos - intentosRealizados;

    numeroIngresado = parseInt(
      document.getElementById("numeroIngresado").value
    );

    if (numeroIngresado === numeroSecreto) {
      resultContainer.textContent =
        "¡Enhorabuena! " +
        userName +
        " ¡Acertaste en " +
        intentosRealizados +
        " intentos!";
      break;
    } else if (intentosRealizados === maxIntentos) {
      resultContainer.textContent =
        userName + "! ¡Se acabaron los " + maxIntentos + " intentos!";
    } else if (numeroIngresado > numeroSecreto) {
      resultContainer.textContent =
        userName + "! El número secreto es menor que " + numeroIngresado + ".";
    } else {
      resultContainer.textContent =
        userName + "! El número secreto es mayor que " + numeroIngresado + ".";
    }
  }
}

function iniciarJuego() {
  var numeroContainer = document.getElementById("numeroContainer");
  numeroContainer.style.display = "block";
}
*/

/*
function iniciarJuego() {
  var inputUsuario = document.getElementById("username").value.trim();
  var resultadoContainer = document.getElementById("resultado");
  var numeroContainer = document.getElementById("numeroContainer");
  var continuarButton = document.getElementById("continuarButton");

  // Verificar si se ha ingresado el nombre de usuario
  if (inputUsuario === "") {
    resultadoContainer.textContent = "Por favor, ingrese un nombre de usuario válido.";
    resultadoContainer.style.color = "white"; // Cambiar color a blanco
  } else {
    var userName = inputUsuario.charAt(0).toUpperCase() + inputUsuario.slice(1);
    
    // Mostrar mensaje de bienvenida
    resultadoContainer.textContent = "¡Bienvenido al juego, " + userName + "!";
    resultadoContainer.style.color = "white"; // Cambiar color a blanco

    // Mostrar el contenedor del número a adivinar y el botón de continuar
    numeroContainer.style.display = "block";
    continuarButton.style.display = "block";

    // Desactivar el input del nombre de usuario y el botón de inicio del juego
    document.getElementById("username").disabled = true;
    document.querySelector("button").disabled = true;
  }
}

function continuarJuego() {
  var inputNumero = document.getElementById("numeroIngresado").value.trim();
  var resultadoContainer = document.getElementById("resultado");
  var numeroSecreto = parseInt(Math.random() * 1000) + 1;
  var intentosRealizados = 1; // Comenzar con 1 intento
  
  var numeroIngresado = parseInt(inputNumero);

  // Verificar si el número ingresado es igual al número secreto
  if (numeroIngresado === numeroSecreto) {
    resultadoContainer.textContent = "¡Felicidades! ¡Has adivinado el número en tu primer intento!";
    resultadoContainer.style.color = "white"; // Cambiar color a blanco
  } else {
    resultadoContainer.textContent = "El número que ingresaste no es el correcto. ¡Inténtalo de nuevo!";
    resultadoContainer.style.color = "white"; // Cambiar color a blanco
  }

  // Mostrar el otro botón
  document.getElementById("otroBoton").style.display = "block";

  // Ocultar el contenedor del número a adivinar y el botón de continuar
  document.getElementById("numeroContainer").style.display = "none";
  document.getElementById("continuarButton").style.display = "none";

  // Habilitar el input del nombre de usuario y el botón de inicio del juego
  document.getElementById("username").disabled = false;
  document.querySelector("button").disabled = false;

  // Limpiar el valor del input del número ingresado
  document.getElementById("numeroIngresado").value = "";
}
*/

function iniciarJuego() {
  var userNameInput = document.getElementById("username");
  var userName = userNameInput.value;

  if (userName.trim() === "") {
    alert("Por favor, ingresa tu nombre de usuario antes de iniciar el juego.");
    return; // Salir de la función si no se ha ingresado un nombre de usuario
  }

  var deseaJugar = prompt("¿Quieres jugar? (s/n)");

  // Si el usuario decide no jugar, salir del juego
  if (deseaJugar.toLowerCase() !== "s") {
    alert("¡Hasta luego, " + userName + "!");
  } else {
    // Mostrar un saludo personalizado
    alert("Hola, " + userName + "! Bienvenido al juego.");

    var maxIntentos = 10; // Desafio 4
    var intentosRealizados = 0;
    var numeroSecreto = parseInt(Math.random() * 1000) + 1;
    var numeroIngresado; // Desafio 1
    var intentosRestantes;

    while (intentosRealizados < maxIntentos) {
      intentosRealizados++;
      intentosRestantes = maxIntentos - intentosRealizados;

      do {
        numeroIngresado = prompt(
          userName +
            "! Digite un número entre 1 y 1000. Tienes " +
            intentosRestantes +
            " intentos!"
        );

        if (!numeroIngresado || isNaN(numeroIngresado)) {
          alert("Por favor, ingresa un número válido.");
        }
      } while (!numeroIngresado || isNaN(numeroIngresado));

      numeroIngresado = parseInt(numeroIngresado);

      if (numeroIngresado === numeroSecreto) {
        alert(
          "¡Enhorabuena! " +
            userName +
            " ¡Acertaste en " +
            intentosRealizados +
            " intentos!"
        );
        // Mostrar el mensaje sobre el número máximo de intentos
        alert(
          userName +
            "! El número máximo de intentos que te llevó adivinar el número fue: " +
            intentosRealizados
        );
        break;
      } else if (intentosRealizados === maxIntentos) {
        alert(userName + "! ¡Se acabaron los " + maxIntentos + " intentos!");
      } else if (numeroIngresado > numeroSecreto) {
        alert(
          userName + "! El número secreto es menor que " + numeroIngresado + "."
        );
      } else {
        alert(
          userName + "! El número secreto es mayor que " + numeroIngresado + "."
        );
      }
    }
  }
}
