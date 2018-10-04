window.addEventListener('load', init);

function init()
{
	document.getElementById("generarCombinacion").onclick = function() {loteria()};
	function loteria()
	{
		// Combinación de 6 número aleatorios entre 1 y 49 sin remplazamiento
		var combinacion = [];
		var mostrarCombinacion = "";
		var i = 0;
		var numeroAleatorio = 0; // null también podría valer
		var repetido = false;
		do
		{
			numeroAleatorio = parseInt(Math.random()*49)+1;
			for (i = 0; i < combinacion.length; i++) 
			{
				if (combinacion[i] == numeroAleatorio)
				{
					repetido = true;
					break;
				}
			}
			if (repetido == false) 
			{
				combinacion[combinacion.length] = numeroAleatorio;
			}
			repetido = false;
		}while(combinacion.length < 6)
		// vamos a ordenarlo de menor a mayor pero...
		// los números se comparan como strings, por su valor unicode...
		// ordena sin tener en cuenta los ceros a la izquierda
		// hay que introducir una pequeña función para que los ordene numéricamente
		mostrarCombinacion = combinacion.sort(function(a, b){return a - b});
		document.getElementById("mostrarCombinacion").innerHTML = mostrarCombinacion;
	} // fin loteria()
} // fin de init()