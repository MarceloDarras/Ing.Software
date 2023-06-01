var contenedor = document.getElementById("contenedor");

var filas = 4;
var columnas = 5;

for (var i = 0; i < filas; i++) {
  for (var j = 0; j < columnas; j++) {
    (function () {
      var boton1 = document.createElement("button");
      boton1.classList.add("btn", "btn-success");

      boton1.innerHTML = "Estacionamiento " + (i * columnas + j);

      contenedor.appendChild(boton1);

      boton1.id = "boton1";

      var botonSeleccionado = null;


      boton1.addEventListener("click", function () {
        this.classList.remove("btn-success");
        this.classList.add("btn-primary");
        boton1.disabled = true;
        var botonExiste = document.getElementById("boton2");
        deshabilitarBotones();
        if (botonExiste) {
          console.log("El boton ya existe");
          this.classList.toggle("btn-success");
          boton1.disabled = true;
        } else {
          var boton2 = document.createElement("button");
          boton2.classList.add("btn", "btn-danger");
          boton2.id = "boton2";
          boton2.innerHTML = "Confirmar";
          contenedor.appendChild(boton2);

          boton2.addEventListener("click", function () {
            boton1.classList.remove("btn-primary");
            var confirmar = confirm("Seguro de tu selección?");
            if(confirmar == true){
                deshabilitarBotones();
                boton1.classList.add("btn-warning");
                contenedor.removeChild(boton2)
                boton5.disabled = false;
                var boton3 = document.createElement("button");
                boton3.classList.add("btn", "btn-primary");
                boton3.innerHTML = "Gestionar arriendo";
                contenedor.appendChild(boton3);
                boton3.id = "boton3";
                var boton4 = document.getElementById("boton4");
                boton4.disabled = false;

                boton4.addEventListener("click", function(){
                  alert("has llegado a tu destino");
                  boton1.classList.remove("btn-warning");
                  boton1.classList.add("btn-danger");
                  boton4.disabled = true;
                  contenedor.removeChild(boton3);
                  var boton5 = document.getElementById("boton5");
                  boton5.disabled = false;
                  boton5.addEventListener("click", function(){
                    var confirmar3 = confirm("¿Desea terminar su arriendo?");
                    if(confirmar3 == true){
                      alert("Gracias por venir, vuelva pronto");
                      habilitarBotones();
                      boton1.classList.remove("btn-danger");
                      boton1.classList.add("btn-success");
                      boton4.disabled = true;
                      boton5.disabled = true;
                    }else{
                      console.log("No se cancela el arriendo");
                    }
                  });
                });

                boton3.addEventListener("click", function(){
                  var confirmar2 = confirm("¿Quieres cancelar tu arriendo?");
                  if(confirmar2 == true){
                    boton1.classList.remove("btn-warning");
                    boton1.classList.add("btn-success");
                    contenedor.removeChild(boton3);
                    habilitarBotones();
                  }else{
                    console.log("El arriendo sigue en pie");
                  }
                });
            }else{
                boton1.classList.add("btn-success");
                habilitarBotones();
                contenedor.removeChild(boton2)
            }
          });
        }
      });
    })();
  }
}

function habilitarBotones(){
  var botones = document.getElementsByTagName("button");
  for(i=0;i<botones.length;i++){

    botones[i].disabled = false;
    botones[i].classList.remove("btn-primary", "btn-warning");
    botones[i].classList.add("btn-success");

  }
}
function deshabilitarBotones(){
  var botones = document.getElementsByTagName("button");
  for(i=0;i<botones.length;i++){

    botones[i].disabled = true;
  }
}



