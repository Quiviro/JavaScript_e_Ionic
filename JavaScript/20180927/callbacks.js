// window.addEventListener('load', init);

// function init()
// {

	function suma(n1, n2, llamada)
	{
		var suma = n1 + n2;
		llamada(suma);
	}
	function multiplica(resultado, llamada2)
	{
		llamada2(resultado * 4);
	}
	function resta(n1, n2, llamada3)
	{
		llamada3(n1 - n2);
	}
	function cuadrado(n1, llamada4)
	{
		llamada4(n1 * n1);
	}
	function dividir(n1, llamada5)
	{
		llamada5(Math.round(n1 / 3));
	}
	function par(divide, llamada6)
	{
		llamada6(divide % 2);
	}
	


	// versión 1.0
	// suma(2, 1, function(resultado)
	// {
	// 	console.log(resultado);
	// 	multiplica(resultado, function(multiplicacion)
	// 		{
	// 			console.log(multiplicacion);
	// 			resta(multiplicacion, 4, function(restar)
	// 			{
	// 				console.log(restar);
	// 				cuadrado(restar, function(elevado)
	// 				{
	// 					console.log(elevado);
	// 					dividir(elevado, function(divide)
	// 					{
	// 						console.log(divide);
	// 						par(divide, function (n1)
	// 						{
	// 							if(n1 == 0)
	// 							{
	// 								console.log("Es par");
	// 							}
	// 							else
	// 							{
	// 								console.log("Es impar");
	// 							}
	// 						})
	// 					});
	// 				});
	// 			});
	// 		});
	// });

	do
	{
		var n1 = parseInt(prompt("1. Introduce un número"));
		var n2 = parseInt(prompt("2. Introduce otro número"));
	}while(isNaN(n1) || isNaN(n2) );
	
	suma (n1, n2, reLlamadaSuma);

	// promesas que no valen nada
	var promise = new Promise (
		function (resolve, reject)
		{
			if(!isNaN(n1))
			{
				resolve();
			}
			else
			{
				reject();
			}
		});

		promise.then(
			function(resolve)
			{
				console.log("Éxito");
			},
			function(reject)
			{
				console.log("Error");
			}
	);

// } // fin init()