window.addEventListener('load',cargar, true);

		function cargar()
		{
				texto.innerHTML = localStorage.getItem('texto');			
		}

		function agregar()
		{
			texto = document.getElementById('texto');
			texto.innerHTML= texto.value
			localStorage.setItem('texto',texto.innerHTML);
		}

		function regresar() 
		{ 
			window.location.assign('index.html');
   		}