var botaoMaisPacientes = document.querySelector("#buscar-pacientes");

botaoMaisPacientes.addEventListener("click", function(){
  //cria um objeto capaz de ler uma request em JSON e passa a URI com os dados
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  //se houver o "load" de dados no objeto da conexao...
  xhr.addEventListener("load", function(){
    //...carrega todos os pacientes encontrados em XHR e parseia para o formato JSON
    var pacientes = JSON.parse(xhr.responseText);

    pacientes.forEach(function(paciente){
      adicionaPaciente(paciente); //-> essa funcao esta dentro de form.js
    });
  });

  xhr.send();
});
