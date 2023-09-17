/*
	WEB 303 Assignment 1 - jQuery
	Mehakdeep Kaur
*/
$(document).ready(function() {
	$("input").on("keyup",function(event){
		let salary = $("#yearly-salary").val();
		let percent =$("#percent").val();
		let amount =((salary*percent)/100);
		amount=amount.toFixed(2);
		$("#amount").text("$"+amount);
	})
})

