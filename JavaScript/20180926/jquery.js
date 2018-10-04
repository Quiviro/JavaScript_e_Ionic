$(document).ready(init);

function init() 
{

	/*
	con JavaScript Vainilla hay que escribir bastante más código
	var i = 0;
	var matrix = document.querySelectorAll("#contenedor p");
	for (i = 0; i < 4; i++) 
	{
		matrix[i].style.color = "lime";
		matrix[i].style.backgroundColor = "black";
	}
	*/
	var contenedor = document.getElementById("contenedor");
	contenedor.style.width = "500px";
	contenedor.style.height = "600px";
	contenedor.style.backgroundColor = "red";

	// con jQuery con una sola función oculto los párrafos
	// $("#contenedor p").hide();
	// o cambio el estilo del contenedor
	$("#contenedor p").width("480").height("125").css("backgroundColor", "yellow").backgroundColor;
	// html() sustituye el contenido, respetando las etiquetas
	// $("#contenedor").html("<h2>Prueba de función html()</h2>");
	// text() hace lo mismo, pero solo inserta texto plano (no recomendable, quizá)
	// append() añade contenido al final, pero dentro, del objeto
	$("#contenedor p:first-child").append("<span> span añadido mediante la función append()</span>");
	// prepend() lo añadiría al principio
	$("#contenedor p + p + p").prepend("<span>span añadido mediante la función prepend() </span>");
	// before() añade contenido antes del objeto
	$("#contenedor").after("<h3>He añadido un título después con after()</h3>");
	// voy a borrar el último párrafo
	$("#contenedor p:last-child").remove();
	// voy a sustituir el segundo párrafo
	$("#contenedor p:first-child + p").replaceWith("<h3>El Cambiazo, con replaceWith()</h3>");
	$("#contenedor h3").css({"color":"white", "fontSize":"2.5em"});
	//.fadeOut(4000).fadeIn(4000);

	// podría crear dos funciones en bucle que se llamen una a otra (callback)...
	// ... para aparecer y desaparecer infinitamente
	$("#boton1").click(ocultar).click(verde);
	function mostrar()
	{
		$("#contenedor h3").fadeIn(4000);
		setTimeout(ocultar, 4000);
	}
	function ocultar()
	{
		$("#contenedor h3").fadeOut(4000);
		setTimeout(mostrar, 4000);
	}
	function verde()
	{
		$("p").addClass("parrafo-verde");
	}























} // fin init()