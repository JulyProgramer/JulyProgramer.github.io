//Funcionamiento del boton de modo oscuro, cambia el color de fondo, desaparece el
//boton y aparece el de modo claro.
document.getElementById('modo_oscuro').addEventListener("click", function(){
    document.body.style.backgroundColor= "#9498C1"
    document.getElementById("modo_claro").style.display="block"
    document.getElementById("modo_oscuro").style.display="none"
})
//Hace lo opuesto al de arriba.
document.getElementById('modo_claro').addEventListener("click", function(){
    document.body.style.backgroundColor= "white"
    document.getElementById("modo_claro").style.display="none"
    document.getElementById("modo_oscuro").style.display="block"
})
//Funcionamiento del boton de mas sobre mi, hace aparecer el texto, desaparece el
//boton y aparece el de ocultar.
document.getElementById('sobre_mi').addEventListener("click", function(){
    document.getElementById("texto").style.display="block"
    document.getElementById("ocultar").style.display="block"
    document.getElementById("sobre_mi").style.display="none"
})
//Hace lo opuesto al de arriba.
document.getElementById('ocultar').addEventListener("click", function(){
    document.getElementById("texto").style.display="none"
    document.getElementById("ocultar").style.display="none"
    document.getElementById("sobre_mi").style.display="block"
})

