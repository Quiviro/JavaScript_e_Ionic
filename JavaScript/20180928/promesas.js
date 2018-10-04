window.addEventListener("load", function () 
{

	document.getElementById("promesa").onclick = function(){hilo()};
	
	function hilo()
	{
		var promesa = new Promise(
			function(resolve, reject)
			{
				var datos = [];
				var n1 = document.getElementById("numero1").value;
				var n2 = document.getElementById("numero2").value;
				if(!isNaN(n1) && !isNaN(n2))
				{
					datos[0] = n1;
					datos[1] = n2;
					resolve(datos);
				}
				else
				{
					reject("Error en los datos");
				}
				// vamos a crear un párrafo con JavaScript
				var parrafo = document.createElement("p");
				parrafo.innerHTML = "Números: " + datos[0] + ", " + datos[1];
				// var textoParrafo = document.createTextNode("Números: " + datos[0] + ", " + datos[1]);
				// parrafo.appendChild(textoParrafo);
				
				// inserto el parrafo al final del body
				document.body.appendChild(parrafo);
			}
		);
		promesa
		.then(suma)
		.then(multiplica)
		.then(dividir)
		.then(multiplica)
		.then(
			function(info)
			{
				console.log(info);
			},
			function(error)
			{
				console.log("Nuevo texto" + error);
			}
		);
	}

	function suma(datos)
	{
		var n1 = parseInt(datos[0]);
		var n2 = parseInt(datos[1]);
		// creo elemento <p>
		var parrafo = document.createElement("p");
		// creo texto
		var textoParrafo = document.createTextNode("Suma: " + (n1 + n2));
		// inserto el texto dentro del párrafo
		parrafo.appendChild(textoParrafo);
		// inserto el párrafo al final del elemento "resultado" 
		document.getElementById("resultado").appendChild(parrafo);
		return n1 + n2;
	}
	function multiplica(resultado)
	{
		var parrafo = document.createElement("p");
		var textoParrafo = document.createTextNode("Multiplicación por sí mismo: " 
			+ (resultado * resultado));
		parrafo.appendChild(textoParrafo);
		document.getElementById("resultado").appendChild(parrafo);
		return resultado * resultado;
	}
	function dividir(n1)
	{
		var parrafo = document.createElement("p");
		var textoParrafo = document.createTextNode("Dividir entre tres: " + Math.round(n1 / 3));
		parrafo.appendChild(textoParrafo);
		document.getElementById("resultado").appendChild(parrafo);
		return Math.round(n1 / 3);
	}


		class Prueba
	{
		constructor()
		{

		}
	}
	var clss = function classF1(){};
	var instancia = new Prueba;
	var dato = "string";
	var dato1 = 4;
	console.log("I. " + (instancia instanceof Prueba));
	console.log("II. " + (clss instanceof Object));
	console.log("III. " + (dato instanceof String));
	console.log("IV. " + (typeof dato));
	console.log("V. " + (typeof (dato1)));

	
	var pedro =
	{
		nombre: "Pedro",
		apellidos: "Gómez"/*,
		saludar: function()
		{
			console.log("Hola " + this.nombre + " " + this.apellidos);
		}*/
	};
	
	// es mala práctica modificar el comportamiento por defecto de los objetos JS
	Object.prototype.saludar = function()
	{
		console.log("Hola soy " + this.nombre);
	}
	pedro.saludar();
	console.log(pedro.hasOwnProperty("saludar"));


	// CLOSURE 
	function padre()
	{
		var nombre = "Andrés";
		var dato2 = function hijo()
		{
			// "nombre" es una variable de la función padre
			console.log("Hola " + nombre);
		}
		nombre = "Julián";

		return dato2;
	}
	var llamada = padre();
	// aquí voy a llamar a la función hijo
	llamada();
	// aquí voy a escribir la función hijo
	console.log(llamada);


	// LLAMADA A API, mediante jQuery
	// NO CONSIGO QUE FUNCIONE
	var url = "https://mindicador.cl/api/dolar";
	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function (data)
		{
			cargaDatos(data);
		}
	});
	function cargaDatos(informa)
	{
		console.log("Pinto la info de la web");
		console.log(informa);
		console.log(informa.autor);
	}


}); // fin escuchador de carga inicial