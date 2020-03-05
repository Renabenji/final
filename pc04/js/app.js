$(document).ready(function(){
	$(".cultura__link:first").addClass("active-color");
	$(".cultura__space02 article").hide();
	$(".cultura__space02 article:first").show();

	$(".cultura__link").click(function(){
		$(".cultura__link").removeClass("active-color");
		$(this).addClass("active-color");	
		$(".cultura__space02 article").hide();

		var mantener = $(this).attr("href");
		$(mantener).show();
		return false;
	});

		$(".deporte__link:first").addClass("active-color");
	$(".de-box01").hide();
	$(".de-box01:first").show();

	$(".deporte__link").click(function(){
		$(".deporte__link").removeClass("active-color");
		$(this).addClass("active-color");	
		$(".de-box01").hide();

		var mantener = $(this).attr("href");
		$(mantener).show();
		return false;
	});

	$(".empren__link:first").addClass("active-color");
	$(".em-box01").hide();
	$(".em-box01:first").show();

	$(".empren__link").click(function(){
		$(".empren__link").removeClass("active-color");
		$(this).addClass("active-color");	
		$(".em-box01").hide();

		var mantener = $(this).attr("href");
		$(mantener).show();
		return false;
	});
}); 

var square = document.querySelectorAll(".em-box02__color");
var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".header__space01");
var links = document.querySelectorAll(".menu__link");
var button1 = document.querySelector(".au-click1");
var info1 = document.querySelector(".au-info1");
var button2 = document.querySelector(".au-click2");
var info2 = document.querySelector(".au-info2");
var button3 = document.querySelector(".au-click3");
var info3 = document.querySelector(".au-info3");

		square.forEach(function(ele){
			ele.addEventListener("click", activar)
		});

		function activar(){
			desactivar();
			this.classList.add("check");
		}
		
		function desactivar(){
			square.forEach(function(ele){
				ele.classList.remove("check");
			})
		}

	links.forEach(function(elem, index){
	var retardo = 500*index;
	elem.style.transitionDelay = retardo + "ms"
	})

	burger.addEventListener("click", abrirmenu);

		function abrirmenu(){
		menu.classList.toggle("header__space01--visible");
	}

	button1.addEventListener("click", george);

		function george(){
			info1.classList.toggle("au-info1--visible");
		}

	button2.addEventListener("click", luz);

		function luz(){
			info2.classList.toggle("au-info2--visible");
		}

	button3.addEventListener("click", chris);

		function chris(){
			info3.classList.toggle("au-info3--visible");
		}

/*
		button.forEach(function(ele){
			ele.addEventListener("click", abririnfo)
		});

		function abririnfo(){
			cerrar();
			this.classList.remove("sr-info--visible");
		}

		function cerrar(){
			button.forEach(function(ele){
				ele.classList.add("sr-info--visible");
			})
		}
*/















/*		
var button = document.querySelectorAll(".ct-box01__buttoncolor");

	button.forEach(function(ele){
		ele.addEventListener("click", ir)
	});

	function ir(){
		var destino = this.getAttribute("href");
		console.log(destino);
		mostrar(destino);
	}

	function mostrar(){
		button.forEach(function(ele){
			
		})
	}
*/