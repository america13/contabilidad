function cop()
{
   var n1 = document.getElementById('cpro').value;
   var n2 = document.getElementById('cid').value;

   var resultado;
   resultado = parseInt(n1) + parseInt(n2);
   document.getElementById("res").value = resultado;
}