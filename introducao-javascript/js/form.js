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
  imcPacienteTd.textContent = calculaImc(peso, altura);

  //associa as tds criadas com o tr principal criado
  pacienteTr.appendChild(nomePacienteTd);
  pacienteTr.appendChild(pesoPacienteTd);
  pacienteTr.appendChild(alturaPacienteTd);
  pacienteTr.appendChild(gorduraPacienteTd);
  pacienteTr.appendChild(imcPacienteTd);

  //associa a nova linha tr com a tabela do form
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(pacienteTr);
});
