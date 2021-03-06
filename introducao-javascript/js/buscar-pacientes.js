var botaoMaisPacientes = document.querySelector("#buscar-pacientes");

botaoMaisPacientes.addEventListener("click", function(){
  //cria um objeto capaz de ler uma request em JSON e passa a URI com os dados
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    //se houver o "load" de dados no objeto da conexao...
    //status 200 = sucesso na conexao
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200){
      //...carrega todos os pacientes encontrados em XHR e parseia para o formato JSON
      var pacientes = JSON.parse(xhr.responseText);
      erroAjax.classList.add("invisivel");

      pacientes.forEach(function(paciente){
        adicionaPaciente(paciente); //-> essa funcao esta dentro de form.js
      });
    }

    //erro na conexao para pegar os dados
    else {
        erroAjax.classList.remove("invisivel");
    }

  });

  xhr.send();
});
