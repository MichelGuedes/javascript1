//pega todos os pacientes da pagina e adiciona um evento de duplo clique nele
//esse evento de duplo clique vai adicionar entao uma funcao para remover o paciente

/*var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){
    this.remove();
  });
});*/

//desse ponto para baixo tenta pegar todos os pacientes, mesmo os que foram
//adicionados depois
var tabela = document.querySelector("#tabela-pacientes");

//o parametro "event" passado para a function guarda qual celula indice foi clicada
//na tabela, dessa maneira esse elemento pode ser removido.
//e nesse caso, como vc esta passando para outro objeto da tabela (no caso o parent)
//a responsabilidade de remocao e nao do objeto em si, vc esta fazendo uso de DELEGATE
tabela.addEventListener("dblclick", function(event){
  //parent node vai pegar o elemento acima deste. o target mesmo so traz a celula
  //e nao a linha inteira
  //console.log(event.target.parentNode);

  //adiciona efeito de esmaecimento a remocao do paciente. ver index.css
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500); //-> aguarda 500 milisegundos para o efeito de fadeOut acabar e entao remover o paciente
});
