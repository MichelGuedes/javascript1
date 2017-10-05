var titulo = document.querySelector("h1.titulo");
titulo.textContent = "Aparecida Nutricionista";

var primeiropaciente = document.querySelector("#primeiro-paciente");
var alturaPaciente = document.querySelector(".info-altura").textContent;
var pesoPaciente = document.querySelector(".info-peso").textContent;

var alturaValida = true;
var pesoValido = true;

if (pesoPaciente <=0 || pesoPaciente >= 300){
  pesoValido = false;
  var tdPeso = primeiropaciente.querySelector(".info-peso");
  tdPeso.textContent("Peso inválido!");
}

if (alturaPaciente <=0 || alturaPaciente >= 3.00){
  alturaValida = false;
  var tdAltura = primeiropaciente.querySelector(".info-altura");
  tdAltura.textContent("Altura inválida!");
}

//calcula IMC ou não dependendo dos valores de peso e altura válidos
if (alturaValida && pesoValido){
  var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
  var tdImc = primeiropaciente.querySelector(".info-imc");
  tdImc.textContent = imc;
}
