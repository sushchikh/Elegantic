window.onload = function(){

	var burger = document.getElementById('burger');
	var menu = document.getElementById('menu_desctop');
	burger.onclick = addShowClass;

	function addShowClass(){
		menu.classList.toggle('menu_show');
	};


};//window.onload function end