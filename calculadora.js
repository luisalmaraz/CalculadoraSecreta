function concatenar(dato){
			//alert("hola");
		dato = document.getElementById("entrada").value+=dato;
		//dato += document.getElementById("entrada").value;
		//innerHTML += dato;

	}
function borrar(){
	//alert("hola");
	document.getElementById("entrada").value="";
 }
function iguals(){
	pantalla = document.getElementById("entrada").value;
	//alert(imp);
	if (pantalla == "007"){
window.location.assign('Oculta.html');
} 
   res = eval(pantalla);
   document.getElementById("entrada").value=res;
}