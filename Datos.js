var trabajador =  prompt("Cual  es el nombre del trabajador");
var horas_laboradas =  parseInt(prompt("Horas laboradas del tabajador"));
var valor_hora =  parseInt(prompt("Valor hora del trabajador"));
var nomina = 0;

if (trabajador)
{
  nomina = horas_laboradas * valor_hora;
  document.write( "La nimina del trabajador " + trabajador + " es de " + nomina + " $ ");
}
