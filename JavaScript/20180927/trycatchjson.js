window.onload = init;

function init() 
{
	
	document.getElementById("botonSuma").onclick = function(){sumaNumero()};
	function sumaNumero()
	{
		try
		{
			var n1 = parseInt(document.getElementById("numero1").value);
			var n2 = parseInt(document.getElementById("numero2").value);
			if(isNaN(n1) || isNaN(n2))
			{
				throw "Por favor, \
				introduzca dos números numéricos"
			}
			var resultado = n1 + n2;
			document.getElementById("resultado").innerHTML = n1 + " + " + n2 +
				" = " + resultado;
		}
		catch(error)
		{
			document.getElementById("resultado").innerHTML = error;
		}		
	}

	crearJson();
	// JSON
	function crearJson()
	{
		var nombre = [];
		var apellido = [];
		var ciudad = [];
		var personas = [];

		nombre[0] = "Paco";
		nombre[1] = "Juan";
		nombre[2] = "María";

		apellido[0] = "Jiménez";
		apellido[1] = "García";
		apellido[2] = "López";

		ciudad[0] = "Madrid";
		ciudad[1] = "Toledo";
		ciudad[2] = "Guadalajara";

		for(let i = 0; i < nombre.length; i++)
		{
			personas.push({
				"Nombre": nombre[i],
				"Apellido": apellido[i],
				"Ciudad": ciudad[i]
			});
		}

		
		document.getElementById("mostrarObjeto").innerHTML = JSON.stringify(personas);
		var objeto = {};
		objeto.personas = personas;
		document.getElementById("mostrarJson").innerHTML = JSON.stringify(objeto);
		console.log(personas);

		var tabla = "<th>Nombre</th><th>Apellido</th><th>Ciudad</th>";
		
		for (let i = 0; i < nombre.length; i++) 
		{
			tabla += "<tr>"
			tabla += "<td>" + personas[i].Nombre + "</td>";
			tabla += "<td>" + personas[i].Apellido + "</td>";
			tabla += "<td>" + personas[i].Ciudad + "</td>";
			tabla += "</tr>";
		}


		document.getElementById("tablaPersonas").innerHTML = tabla;

	}
	

} // fin init()