$(document).ready(() => {

	// hotel
	$('#hotel-button').click(() => {
		let selectedHotel = $("#hotel-choices").find(":selected");
		$('#chosen-hotel').empty(); 
		$('#chosen-hotel').append(selectedHotel);
	});

	// restos
	var restaurantCount= 0; 
	$('#restaurant-button').click(() => {
		let selectedResto = $("#restaurant-choices").find(":selected");
		if (restaurantCount < 3){
			$('#chosen-restaurant').append(`<div class="itinerary-item"><span class="title" data-id="${selectedResto.text()}">${selectedResto.text()}</span><button class="btn btn-xs btn-danger remove btn-circle" id="restaurant-x-button" data-id="${selectedResto.text()}">x</button></div>`);
			
			$(`#${selectedResto.text()}:last`).click(() => {
				alert('testing');
			});
			
			restaurantCount++;  
		}				
	});

	// activities
	$('#activity-button').click(() => {
		let selectedActivity = $("#activity-choices").find(":selected");
	});

	// hotels
	$('#hotel-x-button').click(
		function(){
			$('#chosen-hotel').empty()
		}); 

});