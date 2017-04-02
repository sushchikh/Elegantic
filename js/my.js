window.onload = function(){


//бургер-меню
	var burger = document.getElementById('burger');
	var menu = document.getElementById('menu_desctop');
	burger.onclick = addShowClass;

	function addShowClass(){
		menu.classList.toggle('menu_show');
	};


// карусель
	var carousels = document.querySelectorAll('#carousel_container .carousel_element');
	var currentCarousel = 0;
	var carouselInteraval = setInterval(nextCarousel, 5000);

	function nextCarousel(){
		carousels[currentCarousel].className = 'carousel_element';
		currentCarousel = (currentCarousel+1) % carousels.length;
		carousels[currentCarousel].className = 'carousel_element show'
	};






};//window.onload function end