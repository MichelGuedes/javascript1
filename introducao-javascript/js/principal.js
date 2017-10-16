var titulo = document.querySelector("h1.titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){

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

/*secao para tratamento do formulario "form-adiciona" dentro de index.html*/
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  //previne o reload do form no metodo abaixo
  event.preventDefault();

  //captura os valores dos campos texto no formulario
  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  //cria uma nova tr
  var pacienteTr = document.createElement("tr");

  //cria uma td nova para cada campo
  var nomePacienteTd = document.createElement("td");
  var pesoPacienteTd = document.createElement("td");
  var alturaPacienteTd = document.createElement("td");
  var gorduraPacienteTd = document.createElement("td");
  var imcPacienteTd = document.createElement("td");

  //passa os valores capturados nas textboxes para as tags tds criadas acima
  nomePacienteTd.textContent = nome;
  pesoPacienteTd.textContent = peso;
  alturaPacienteTd.textContent = altura;
  gorduraPacienteTd.textContent = gordura;

  //associa as tds criadas com o tr principal criado
  pacienteTr.appendChild(nomePacienteTd);
  pacienteTr.appendChild(pesoPacienteTd);
  pacienteTr.appendChild(alturaPacienteTd);
  pacienteTr.appendChild(gorduraPacienteTd);

  //associa a nova linha tr com a tabela do form
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(pacienteTr);
});
