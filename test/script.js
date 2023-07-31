window.addEventListener("DOMContentLoaded", function() {

	"use strict";

	const flags = {
		menu: false,
	}

	const toggleMenu = function() {
		flags.menu = !flags.menu;
		document.querySelector(".app-menu").toggleAttribute("hidden");
		document.querySelector(".app-filter").toggleAttribute("hidden");
	};

	document.querySelector(".app-navicon").addEventListener("click", function(event) {
		event.preventDefault();
		toggleMenu();
	});

	document.querySelector(".app-menu-close").addEventListener("click", function(event) {
		event.preventDefault();
		toggleMenu();
	});

	document.querySelector(".app-filter").addEventListener("click", function(event) {
		event.preventDefault();
		if (flags.menu) {
			toggleMenu();
		}
	});

});
