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

	  jQuery('select').niceSelect();
	  
	jQuery('.search_result_list .search_result_box').on('click', function() {
		jQuery('.purchases_form_col .input_field_purches.input_search').val('').val(jQuery(this).text())
		jQuery(this).parents('.search_result_list').removeClass('active')
	});
	jQuery('.purchases_form_col .input_field_purches.input_search').on('focus', function() {
		jQuery('.search_result_list').addClass("active");
	})
	// .blur(function(){
	// 	jQuery('.search_result_list').removeClass("active");
	// });
	jQuery(document).on('click', function(event) {
		if (!jQuery(event.target).closest('.purchases_form_col .input_field_purches.input_search, .search_result_list').length) {
			jQuery(".search_result_list").removeClass("active");
		}
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
	getPostion();
});

function getPostion() {
	var position = jQuery( ".purchases_form_col .input_field_purches.input_search" ).offset();
	let setTopPosition = jQuery('.purchases_form_col .input_field_purches.input_search').outerHeight() + position.top;
	jQuery('.search_result_list').css({"left": + position.left ,  "top": + setTopPosition });
}
setTimeout(() => {
	
	getPostion()
}, 50);