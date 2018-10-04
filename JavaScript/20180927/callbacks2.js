// window.addEventListener('load', init);

// function init()
// {
	// versión 1.1
	function reLlamadaSuma(resultado)
	{
		console.log("Suma: " + n1 + " + " + n2 + " = " + resultado);
		multiplica(resultado, reLlamadaMultiplica);
	}
	function reLlamadaMultiplica(n1)
	{
		console.log("Multiplicación por cuatro: " + n1);
		resta(n1, 4, reLlamadaResta);
	}
	function reLlamadaResta(n1)
	{
		console.log("Resta cuatro: " + n1);
		cuadrado(n1, reLlamadaCuadrado);
	}
	function reLlamadaCuadrado(n1)
	{
		console.log("Elevado al cuadrado: " + n1);
		dividir(n1, reLlamadaDividir);
	}
	function reLlamadaDividir(n1)
	{
		console.log("División entre 3: " + n1);
		par(n1, reLlamadaPar);
	}
	function reLlamadaPar(n1)
	{
		if(n1)
		{
			console.log("Es impar");
		}
		else
		{
			console.log("Es par");
		}
	}

// } // fin init()


	