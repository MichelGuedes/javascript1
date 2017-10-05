var titulo = document.querySelector("h1.titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i <= pacientes.length; i++){

  //var primeiropaciente = document.querySelector("#primeiro-paciente");
  var alturaPaciente = pacientes[i].querySelector(".info-altura").textContent;
  var pesoPaciente = pacientes[i].querySelector(".info-peso").textContent;

  var alturaValida = true;
  var pesoValido = true;

  if (pesoPaciente <=0 || pesoPaciente >= 300){
    pesoValido = false;
    var tdPeso = pacientes[i].querySelector(".info-peso");
    tdPeso.textContent = "Peso inválido!";
  }

  if (alturaPaciente <=0 || alturaPaciente >= 3.00){
    alturaValida = false;
    var tdAltura = pacientes[i].querySelector(".info-altura");
    tdAltura.textContent = "Altura inválida!";
  }

  //calcula IMC ou não dependendo dos valores de peso e altura válidos
  if (alturaValida && pesoValido){
    var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
    var tdImc = pacientes[i].querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(2);
  }
  else {
    pacientes[i].classList.add("paciente-invalido");
  }
}
