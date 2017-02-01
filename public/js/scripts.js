$(document).ready(function(){
	var hotelCount = 0
	$('#hotel-button').click(function(){
		if (!hotelCount) {

			let selectedHotel = $("#hotel-choices").find(":selected");
			$('#chosen-hotel').append(`<div class="itinerary-item"><span class="title" data-id="${selectedHotel.text()}">${selectedHotel.text()}</span><button class="btn btn-xs btn-danger remove btn-circle" id="hotel-x-button" data-id="${selectedHotel.text()}">x</button></div>`);
			hotelCount++;
		}

		$('#hotel-x-button').click(() => {
			hotelCount--;
			$('#hotel-x-button').prev().remove();
			$('#hotel-x-button').remove();
		})

	});


	var restaurantCount = 0;
	$('#restaurant-button').click(() => {
		let selectedResto = $("#restaurant-choices").find(":selected");
		if (restaurantCount < 3) {
			$('#chosen-restaurant').append(`<div class="itinerary-item"><span class="title" data-id="${selectedResto.text()}">${selectedResto.text()}</span><button class="btn btn-xs btn-danger remove btn-circle" id="restaurant-x-button" data-id="${selectedResto.text()}">x</button></div>`);

			restaurantCount++;
			$('.btn.btn-xs.btn-danger.remove.btn-circle').unbind('click'); 
			$('.btn.btn-xs.btn-danger.remove.btn-circle').click(function(){ 
				restaurantCount--;
				$(this).parent().remove();
			})
		}
	});

	// activities
	$('#activity-button').click(() => {
		
		let selectedActivity = $("#activity-choices").find(":selected");
		$('#chosen-activities').append(`<div class="itinerary-item"><span class="title" data-id="${selectedActivity.text()}">${selectedActivity.text()}</span><button class="btn btn-xs btn-danger remove btn-circle" id="activity-x-button" data-id="${selectedActivity.text()}">x</button></div>`);

		$('.btn.btn-xs.btn-danger.remove.btn-circle').unbind('click'); 

		$('.btn.btn-xs.btn-danger.remove.btn-circle').click(function(){
			$(this).parent().remove(); 

	});



});

}); 


