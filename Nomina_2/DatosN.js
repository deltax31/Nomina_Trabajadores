var i =0;
var o = 0;
var u = 0;
var empleado = document.getElementById("datos");
empleado = ["David C", "Alejandro C", "Camila V", "Adriana G"];
var hora_laboral = [40, 60, 50, 80];
var valor_hora = [3500, 4000, 4500, 6000];
var boton = document.getElementById("botoncito");
boton.addEventListener("click", datosPorClick);
var nomina = 0;

var matrix = [
  ["David C", "Alejandro C", "Camila V", "Adriana G"],
  [40, 60, 50, 80],
  [3500, 4000, 4500, 6000]
];

console.log(matrix);



function datosPorClick()
{
  for(i = 0; i < matrix.length; i++)
  {
    for(o = 0; o < matrix[i].length; o++);
    {
        var nombre = empleado[i];
        var horaslaboradas = hora_laboral[i];
        var valorhoras = valor_hora[i];
        nomina = horaslaboradas * valorhoras;
      document.write( "La nomina del trabajador " + nombre + " es de " + nomina + " $ ");

    }
  }
}
