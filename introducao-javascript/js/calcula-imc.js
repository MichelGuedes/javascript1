var titulo = document.querySelector("h1.titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

for (var i = 0; i < pacientes.length; i++){

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
    var imc = calculaImc(pesoPaciente, alturaPaciente);
    var tdImc = pacientes[i].querySelector(".info-imc");
    tdImc.textContent = imc; //imc.toFixed(2);
  }
  else {
    pacientes[i].classList.add("paciente-invalido");
  }
}
