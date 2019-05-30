function operacion()
{
   var mp1 = document.getElementById('mp').value;
   var mo2 = document.getElementById('mo').value;

   var resultado;

   resultado = parseInt(mp1) + parseInt(mo2);

   document.getElementById("resultado").value = resultado;
}