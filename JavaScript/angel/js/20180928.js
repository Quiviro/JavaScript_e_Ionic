window.onload=init;

function padre(nombre){
	var hola = 'hola';
	var info = function hijo (texto){
		console.log(hola + ' ' + nombre + ' ' + texto);
	}
	nombre= 'Julián';
	return info;
}
var hijo = padre('Pedro');
hijo('es viernes');





//console.log(llamada);




function init (){


var url = 'https://mindicador.cl/api/dolar';

$.ajax({

	type: 'GET',
  	url: url,
  	dataType:'json',
  	success: function (data){
  		cargaDatos(data);		
  	},
});


function cargaDatos(informa){
	console.log('pinto la info de la web ');
	//console.log( informa);
	console.log(informa.autor);
}
//console.log(informacion);
//console.log(data.autor)

	//var info = {"version":"1.5.0","autor":"mindicador.cl","codigo":"dolar","nombre":"Dólar observado","unidad_medida":"Pesos","serie":[{"fecha":"2018-09-28T04:00:00.000Z","valor":661.5},{"fecha":"2018-09-27T04:00:00.000Z","valor":663.9},{"fecha":"2018-09-26T04:00:00.000Z","valor":670.84},{"fecha":"2018-09-25T04:00:00.000Z","valor":667.17},{"fecha":"2018-09-24T04:00:00.000Z","valor":666.44},{"fecha":"2018-09-21T04:00:00.000Z","valor":673.74},{"fecha":"2018-09-20T04:00:00.000Z","valor":684.86},{"fecha":"2018-09-14T04:00:00.000Z","valor":682.79},{"fecha":"2018-09-13T04:00:00.000Z","valor":691.06},{"fecha":"2018-09-12T04:00:00.000Z","valor":698.43},{"fecha":"2018-09-11T04:00:00.000Z","valor":692.62},{"fecha":"2018-09-10T04:00:00.000Z","valor":688.44},{"fecha":"2018-09-07T04:00:00.000Z","valor":684.97},{"fecha":"2018-09-06T04:00:00.000Z","valor":691.05},{"fecha":"2018-09-05T04:00:00.000Z","valor":693.13},{"fecha":"2018-09-04T04:00:00.000Z","valor":684.13},{"fecha":"2018-09-03T04:00:00.000Z","valor":680.48},{"fecha":"2018-08-31T04:00:00.000Z","valor":675.38},{"fecha":"2018-08-30T04:00:00.000Z","valor":666.81},{"fecha":"2018-08-29T04:00:00.000Z","valor":658.45},{"fecha":"2018-08-28T04:00:00.000Z","valor":656.81},{"fecha":"2018-08-27T04:00:00.000Z","valor":662.64},{"fecha":"2018-08-24T04:00:00.000Z","valor":665.58},{"fecha":"2018-08-23T04:00:00.000Z","valor":660.67},{"fecha":"2018-08-22T04:00:00.000Z","valor":665.02},{"fecha":"2018-08-21T04:00:00.000Z","valor":669.82},{"fecha":"2018-08-20T04:00:00.000Z","valor":668.44},{"fecha":"2018-08-17T04:00:00.000Z","valor":666.13},{"fecha":"2018-08-16T04:00:00.000Z","valor":661.75},{"fecha":"2018-08-14T04:00:00.000Z","valor":658.7},{"fecha":"2018-08-13T04:00:00.000Z","valor":653.98}]};



	Object.prototype.saludar = function (){
		console.log('Hola soy ' + this.nombre);
	}

	class Prueba {
		constructor(){}
	}
	class Prueba2 {
		constructor(){}
	}
	
	var clss = new Prueba();
	var array = new Array();
	var array2= [];
	var instancia;

	var dato = 'stringd';
	var dato1 = 1;
	//console.log(instancia instanceof classF1());
	console.log(clss instanceof Prueba);
	console.log(clss instanceof Object);
	console.log(instancia instanceof Object);
	//console.log(objeto instanceof Object);
	//console.log(objeto instanceof Prueba);

	// console.log(dato instanceof String);

	// console.log(typeof dato);
	// console.log(typeof(dato1));

	var pedro = {
		nombre:'Pedro',
		apellidos: 'Gómez'
	}

	var Juan = {
		nombre: 'Juan',
		apellidos: 'Jímenez'
	}
	var string = 'hola';


	pedro.saludar();
	Juan.saludar();



	//document.getElementById('boton').onclick= sumaNumero;
	//crearJson();
	document.getElementById('promesa').onclick=hilo;
	


	}


function hilo (){
	var promesa = new Promise(function(resolve, reject){
		 var n1= document.getElementById('numero1').value;
		 var n2 = document.getElementById('numero2').value;
		 var datos = [];
		 if (!isNaN(n1) && !isNaN(n2)){
		 	datos[0]=n1;
		 	datos[1]= n2;
		 	resolve(datos);
		 }else{
		 	reject('Error en los datos');
		 }
	})

	promesa.then(suma)
	.then(multiplicar)
	.then(dividir)
	.then(function (info){
		console.log(info);
	}, function (errores){
		console.log("nuevo texto" + errores);

	});


}


function suma(datos){
	var n1= parseInt(datos[0]);
	var n2 = parseInt(datos[1]);
	return (n1+n2);
	}

function multiplicar (resultado){

	if (resultado == 5 ){
		return Promise.reject('No puedo ejecutarlo')
	}else {
	return resultado*resultado;
}
}

function restar (n1,n2, llamada3){
	llamada3(n1-n2);
}

function cuadrado (n1, llamada4){
	llamada4(n1*n1);
}

function dividir(n1){
	return n1/3;
}

function par(divide, llamada6){
	llamada6(divide%2);
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




//suma (2,1, backLlamadaSuma);





function backLlamadaSuma(resultado){
	console.log(resultado);
	multiplicar(resultado, backMultiplicar);
}

function backMultiplicar (n1){
	console.log(n1);
	restar (n1,4, backResta)
}

function backResta (n1){
	console.log(n1);
	cuadrado(n1, backCuadrado);
}

function backCuadrado (n1){
 	console.log(n1);
 	dividir(n1, backDividir);
}

function backDividir (n1){
	console.log(n1);
	par(n1, backPar);
}

function backPar (n1){
	if(n1==0){
		console.log('es par');
	}else{
		console.log('es impar');
	}
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



