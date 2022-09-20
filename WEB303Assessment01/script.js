/*
	WEB 303 Assignment 1 - jQuery
	{Rishi Patel}
	Student ID: - 0793722
*/

$(document).ready(function(){
	
	// Using Change Event for function
	$("input").change(function(){
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();

		let solution = (( salary * percent)/ 100);
		$("#amount").text('$' + solution.toFixed(2));
	});

	// Using Keyup Event for function
	// $("input").keyup(function(){
	// 	let salary = $("#yearly-salary").val();
	// 	let percent = $("#percent").val();

	// 	let solution = (( salary * percent)/ 100);
	// 	$("#amount").text('$' + solution.toFixed(2));
	// });
});