function ci()
{
   var n1 = document.getElementById('mp').value;
   var n2 = document.getElementById('mi').value;
   var n3 = document.getElementById('gg').value;

   var resultado;
   resultado = parseInt(n1) + parseInt(n2) + parseInt(n3);
   document.getElementById("Costosindirectos").value = resultado;
}