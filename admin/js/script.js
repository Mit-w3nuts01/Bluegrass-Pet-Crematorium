"use strict";


jQuery(document).ready(function(){
	$(function() {

		(function quantityProducts() {
		  var quantityArrowMinus = jQuery(".quantity-arrow-minus");
		  var quantityArrowPlus = jQuery(".quantity-arrow-plus");
		  var quantityNum = jQuery(".quantity-num");
	  
		  quantityArrowMinus.click(quantityMinus);
		  quantityArrowPlus.click(quantityPlus);
	  
		  function quantityMinus() {
			if (quantityNum.val() > 0) {
			  quantityNum.val(+quantityNum.val() - 1);
			}
		  }
	  
		  function quantityPlus() {
			quantityNum.val(+quantityNum.val() + 1);
		  }
		})();
	  
	  });
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