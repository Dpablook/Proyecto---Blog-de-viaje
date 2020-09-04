/*aviso*/

function construccion(){
	let botonConst = document.getElementById("ver_italia");
	let aviso = document.getElementById("aviso");

	botonConst.addEventListener("click", function(){
		aviso.style.display = "flex";
	});
}

construccion();
