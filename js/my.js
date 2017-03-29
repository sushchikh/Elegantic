window.onload = function(){

	var burger = document.querySelectorAll('.burger');
	var menu = document.querySelectorAll('.menu_desctop');

	burger.addEventListener("click", showMenu);

	function showMenu(){
		console.log('111');
		menu.classList.toggleClass('show_menu');
	};
	console.log(burger);
	console.log(menu);




};//window.onload function end