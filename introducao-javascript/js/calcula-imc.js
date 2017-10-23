var titulo = document.querySelector("h1.titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

///////////////////////////////////////////////////////////////////////////////

//calcula um IMC a partir de um peso e uma altura
function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

///////////////////////////////////////////////////////////////////////////////

//verifica pela regra se um peso e valido
function validaPeso(peso){
  if ((peso <= 0) || (peso >= 300)){
    return false;
  }
  else {
    return true;
  }
}

///////////////////////////////////////////////////////////////////////////////

//verifica pela regra se a altura e valida
function validaAltura(altura){
  if ((alturaPaciente <=0) || (alturaPaciente >= 3.00)){
    return false;
  }
  else{
    return true;
  }
}

///////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < pacientes.length; i++){

  var alturaPaciente = pacientes[i].querySelector(".info-altura").textContent;
  var pesoPaciente = pacientes[i].querySelector(".info-peso").textContent;

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido){
    var tdPeso = pacientes[i].querySelector(".info-peso");
    tdPeso.textContent = "Peso inválido!";
  }

  if (!alturaValida){
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
