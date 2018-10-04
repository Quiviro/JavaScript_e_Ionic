window.onload=init;

function init (){

	//document.getElementById('boton').onclick= sumaNumero;
	crearJson();
	}


function crearJson(){
	var nombre= [];
	var apellido = [];
	var ciudad = [];
	var personas = [];

	nombre[0]= 'Paco';
	nombre[1]= 'Juan';
	nombre[2]= 'Maria';

	apellido[0] = 'Jiménez';
	apellido[1] = 'García';
	apellido[2] = 'López';

	ciudad[0] = 'Madrid';
	ciudad[1] = 'Toledo';
	ciudad[2] = 'Guadalajara';

	for(let i=0;i<nombre.length;i++){
		personas.push({
			'nombre': nombre[i],
			'apellido': apellido[i],
			'ciudad':ciudad[i]
		});
	}
	console.log(personas);
	console.log(JSON.stringify(personas));

	var objeto = {};
	objeto.personas=personas;
console.log(JSON.stringify(objeto));
	
console.log(personas[0].nombre);

for (let i=0;i<3;i++){
	console.log('la persona se llama '+ personas[i].nombre);
}	

var infoWeb = {"count":1,"created":"2018-09-27T17:49:21Z","lang":"es-ES","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Nome, AK, US","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/","description":"Yahoo! Weather for Nome, AK, US","language":"en-us","lastBuildDate":"Thu, 27 Sep 2018 09:49 AM AKDT","ttl":"60","location":{"city":"Nome","country":"United States","region":" AK"},"wind":{"chill":"36","direction":"68","speed":"22"},"atmosphere":{"humidity":"80","pressure":"1024.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"8:59 am","sunset":"8:44 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Nome, AK, US at 09:00 AM AKDT","lat":"64.499474","long":"-165.405792","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/","pubDate":"Thu, 27 Sep 2018 09:00 AM AKDT","condition":{"code":"30","date":"Thu, 27 Sep 2018 09:00 AM AKDT","temp":"42","text":"Partly Cloudy"},"forecast":[{"code":"30","date":"27 Sep 2018","day":"Thu","high":"51","low":"41","text":"Partly Cloudy"},{"code":"24","date":"28 Sep 2018","day":"Fri","high":"52","low":"45","text":"Windy"},{"code":"23","date":"29 Sep 2018","day":"Sat","high":"51","low":"48","text":"Breezy"},{"code":"32","date":"30 Sep 2018","day":"Sun","high":"53","low":"46","text":"Sunny"},{"code":"32","date":"01 Oct 2018","day":"Mon","high":"51","low":"45","text":"Sunny"},{"code":"23","date":"02 Oct 2018","day":"Tue","high":"52","low":"48","text":"Breezy"},{"code":"23","date":"03 Oct 2018","day":"Wed","high":"52","low":"47","text":"Breezy"},{"code":"23","date":"04 Oct 2018","day":"Thu","high":"47","low":"37","text":"Breezy"},{"code":"28","date":"05 Oct 2018","day":"Fri","high":"48","low":"37","text":"Mostly Cloudy"},{"code":"23","date":"06 Oct 2018","day":"Sat","high":"49","low":"42","text":"Breezy"}],"description":"<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/30.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Partly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Partly Cloudy. High: 51Low: 41\n<BR /> Fri - Windy. High: 52Low: 45\n<BR /> Sat - Breezy. High: 51Low: 48\n<BR /> Sun - Sunny. High: 53Low: 46\n<BR /> Mon - Sunny. High: 51Low: 45\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>","guid":{"isPermaLink":"false"}}}}};

console.log(infoWeb.created);

}



// function sumaNumero (){


// try{
// 	var n1= parseInt(document.getElementById('numero1').value);
// 	var n2 = parseInt(document.getElementById('numero2').value);

// 	if(isNaN(n1) || isNaN(n2)){
// 	throw '';
// 	}
// 	var resultado = n1+n2;
// 	document.getElementById('resultado').innerHTML = resultado;
// 	}catch(error){
// 		document.getElementById('resultado').innerHTML = 'error';
// 	}

// 	console.log('hola2');
// }




suma (2,1, backLlamadaSuma);

function suma(n1,n2,llamada){
	var suma=n1+n2;
	llamada(suma);
}

function multiplicar (resultado, llamada2){
	llamada2(resultado*resultado);
}

function restar (n1,n2, llamada3){
	llamada3(n1-n2);
}

function cuadrado (n1, llamada4){
	llamada4(n1*n1);
}

function dividir(n1, llamada5){
	llamada5(n1/3);
}

function par(divide, llamada6){
	llamada6(divide%2);
}



// suma(2,1,function(resultado){
// 	console.log(resultado);
// 	multiplicar(resultado, function(multiplicacion){
// 		console.log(multiplicacion)
// 		restar(multiplicacion, 4, function (resta){
// 			console.log(resta);
// 			cuadrado(resta, function(elevado){
// 				console.log(elevado);
// 				dividir(elevado, function (divide){
// 					console.log(divide);
// 					par(divide, function (n1){
// 						if(n1 == 0){
// 							console.log('es par');
// 						}else {
// 							console.log('es impar');
// 						}
// 					});
// 				});
// 			});
// 		});
// 	});
// });











