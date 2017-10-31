//pega todos os pacientes da pagina e adiciona um evento de duplo clique nele
//esse evento de duplo clique vai adicionar entao uma funcao para remover o paciente
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){
    this.remove();
  });
});
