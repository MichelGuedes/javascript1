var botaoMaisPacientes = document.querySelector("#buscar-pacientes");

botaoMaisPacientes.addEventListener("click", function(){
  console.log("Procurando pacientes...");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
      console.log(xhr.responseText);
      var r = xhr.responseText;
      console.log(typeof r);

      var pacientes = JSON.parse(r);
      console.log(pacientes);
      console.log(typeof pacientes);
  });

  xhr.send();
});
