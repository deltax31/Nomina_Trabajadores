var trabajador = document.getElementById("empleado");
var horas_laboradas = document.getElementById("horaslaboradas");
var valor_hora = document.getElementById("valorhoras");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", multiplicarporClick);
var nomina = 0;


function  multiplicarporClick()
{
  var usuario = trabajador.value;
  var numero1 = parseInt(horaslaboradas.value);
  var numero2 = parseInt(valor_hora.value);
  nomina = numero1 * numero2;
  document.write( "La nomina del trabajador " + usuario + " es de " + nomina + " $ ");
}
