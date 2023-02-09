function openForm() {
    document.getElementById("miformulario").style.display = "block";
  }
  function closeForm() {
    document.getElementById("miformulario").style.display = "none";
  }
  function enviarformulario(){
    document.formulario.submit();
    closeForm();
}
  var i = 0;
function barra() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("barraP2");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function experiencias(){
    barra();
    document.getElementById("expe").style.display="block";
    document.getElementById("estu").style.display="none";
    document.getElementById("habi").style.display="none";
    document.getElementById("info").style.display="none"; 
    document.getElementById("acer").style.display="none";
  }
  function estudios(){
    barra();
    document.getElementById("expe").style.display="none";
    document.getElementById("estu").style.display="block";
    document.getElementById("habi").style.display="none";
    document.getElementById("info").style.display="none"; 
    document.getElementById("acer").style.display="none";
  }
  function habilidades1(){
    barra();
    document.getElementById("expe").style.display="none";
    document.getElementById("estu").style.display="none";
    document.getElementById("habi").style.display="block";
    document.getElementById("info").style.display="none"; 
    document.getElementById("acer").style.display="none";
  }
  function informacion(){
    barra();
    document.getElementById("expe").style.display="none";
    document.getElementById("estu").style.display="none";
    document.getElementById("habi").style.display="none";
    document.getElementById("info").style.display="block"; 
    document.getElementById("acer").style.display="none";
  }
  function acercaDeMi(){
    barra();
    document.getElementById("expe").style.display="none";
    document.getElementById("estu").style.display="none";
    document.getElementById("habi").style.display="none";
    document.getElementById("info").style.display="none"; 
    document.getElementById("acer").style.display="block";
  }