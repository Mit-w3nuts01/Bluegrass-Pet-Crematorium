"use strict";


jQuery(document).ready(function(){
	
/*Mobile Menu Start*/
jQuery(".hamburger-icon").click(function() {
	'use strict';
	jQuery(this).toggleClass('active');
	jQuery('.navigation_main').toggleClass('show');
	jQuery('body').toggleClass('open_menu');
});
/*Mobile Menu End*/

});

function bluesticky()
{
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

jQuery(window).on('load' ,function() {
	bluesticky();
});
jQuery(window).resize(function() {
	bluesticky();
});