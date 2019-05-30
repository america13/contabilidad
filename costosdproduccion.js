function cdp()
{
   var n1 = document.getElementById('g').value;
   var n2 = document.getElementById('cd').value;

   var resultado;

   resultado = parseInt(n1) + parseInt(n2);

   document.getElementById("cp").value = resultado;
}