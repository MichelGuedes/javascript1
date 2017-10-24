/*secao para tratamento do formulario "form-adiciona" dentro de index.html*/
var botaoAdicionar = document.querySelector("#adicionar-paciente");

////////////////////////////////////////////////////////////////////////////////

//exibe mensagens de erro que estao dentro de um array de strings
function exibeMensagemErro(arrayMsgErros){
  var ulMsgErro = document.querySelector("#mensagem-erro");
  ulMsgErro.innerHTML = "";
  ulMsgErro.textContent = "";

  //se existe uma msg de erro, passa os valores para as li's de erro dentro da
  //ul de erro no HTML
  if (arrayMsgErros.length > 0){
    arrayMsgErros.forEach(function(msgErro){
      var liMsgErro = document.createElement("li");
      liMsgErro.textContent = msgErro;
      ulMsgErro.appendChild(liMsgErro);
    });

    return true;
  }

  //se a mensagem de erro esta vazia, zera o valor da mensagem de erro, tambem
  //para limpar o que quer que ja estivesse la
  else{
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////

//verifica se os dados de um paciente parametro sao validos
function validaPaciente(paciente){
  var msg = [];

  if (!validaPeso(paciente.peso)){
    msg.push("Peso inválido. ");
  }

  if (!validaAltura(paciente.altura)){
    msg.push("Altura inválida. ");
  }

  return msg;
}

///////////////////////////////////////////////////////////////////////////////

//pega os dados de um paciente, a partir de um form parametro
function retornaPacienteFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

////////////////////////////////////////////////////////////////////////////////

//cria uma tag TD e passa os atributos de valor e classe para ela
function adicionaTd(valor, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = valor;
  return td;
}

////////////////////////////////////////////////////////////////////////////////

//adiciona a tag TR a um paciente parametro
function adicionaTr(paciente){
  //cria uma nova tr
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //cria uma td nova para cada campo
  var nomePacienteTd = adicionaTd(paciente.nome, "info-nome");
  var pesoPacienteTd = adicionaTd(paciente.peso, "info-peso");
  var alturaPacienteTd = adicionaTd(paciente.altura, "info-altura");
  var gorduraPacienteTd = adicionaTd(paciente.gordura, "info-nome");
  var imcPacienteTd = adicionaTd(paciente.imc, "info-imc");

  //associa as tds criadas com o tr principal criado
  pacienteTr.appendChild(nomePacienteTd);
  pacienteTr.appendChild(pesoPacienteTd);
  pacienteTr.appendChild(alturaPacienteTd);
  pacienteTr.appendChild(gorduraPacienteTd);
  pacienteTr.appendChild(imcPacienteTd);

  return pacienteTr;
}

////////////////////////////////////////////////////////////////////////////////

//adiciona um listener de click no botao de adicionar do form
botaoAdicionar.addEventListener("click", function(event){
  //previne o reload do form no metodo abaixo
  event.preventDefault();

  //seleciona o formulario de cadastro do paciente do HTML
  var form = document.querySelector("#form-adiciona");

  //extrai os dados do paciente que esta no formulario e popula a variavel obj
  //paciente abaixo
  var paciente = retornaPacienteFormulario(form);

  //retorna o Tr montado para popular na tabela HTML
  var pacienteTr = adicionaTr(paciente);

  //verifica se os dados do paciente estao ok
  var erroMsg = validaPaciente(paciente);

  //se tem mensagem de erro, pula fora da execucao para nao adicionar o paciente.
  //voltamos ao VBScript com GOTO disfarcado, viva!
  if (exibeMensagemErro(erroMsg)){
    return;
  }

  //associa a nova linha tr com a tabela do form
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(pacienteTr);

  //limpa os campos do formulario
  form.reset();
});
