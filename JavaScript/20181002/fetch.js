window.addEventListener("load", init);

function init()
{

	var url = "https://mindicador.cl/api/dolar";
	document.getElementById("info").onclick = traeDatos;
	function traeDatos()
	{
		fetch("https://mindicador.cl/api/dolar")
		.then( (data) => { return data.json() } )
		.then( data => {
			console.log(data);
			console.log(data.serie[0].valor);
		});
		fetch("https://mindicador.cl/api/dolar")
		.then( (data2) => { return data2 } )
		.then( data2 => {
			console.log(data2);
			console.log(data2.json());
		});
	}
	

} // fin init()