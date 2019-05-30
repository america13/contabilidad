function cis()
{
   var n1 = document.getElementById('gd').value;
   var n2 = document.getElementById('ga').value;

   var resultado;
   resultado = parseInt(n1) + parseInt(n2);
   document.getElementById("r").value = resultado;
}