$(document).ready(function(){
	var hotelCount = 0
	var day = 1;
	
	var $blankDay = $('#day1').children().clone();
	
	
	$('#hotel-button').click(function(){
		if (!hotelCount) {

			let selectedHotel = $("#hotel-choices").find(":selected");
			$('#chosen-hotel').append(`<div class="itinerary-item"><span class="title" data-id="${selectedHotel.text()}">${selectedHotel.text()}</span><button class="btn btn-xs btn-danger remove btn-circle" id="hotel-x-button" data-id="${selectedHotel.text()}">x</button></div>`);
			hotelCount++;
			
			coordArr = selectedHotel.attr('data-id').split(',');
			
			drawMarker('hotel', selectedHotel.text(), [coordArr[0], coordArr[1]]);
		}

		$('#hotel-x-button').click(function() {
			hotelCount--;
			
			let hotelName = $(this).prev().attr('data-id');
				markersObj[hotelName].setMap(null);
				delete markersObj[hotelName];
			
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
			
			coordArr = selectedResto.attr('data-id').split(',');
			
			drawMarker('restaurant', selectedResto.text(), [coordArr[0], coordArr[1]]);
			
			$('.btn.btn-xs.btn-danger.remove.btn-circle').unbind('click'); 
			$('.btn.btn-xs.btn-danger.remove.btn-circle').click(function(){ 
				restaurantCount--;
				let restoName = $(this).prev().attr('data-id');
				markersObj[restoName][0].setMap(null);
				markersObj[restoName] = markersObj[restoName].slice(1)
				$(this).parent().remove();
			});
		}
	});

	// activities
	$('#activity-button').click(() => {
		
		let selectedActivity = $("#activity-choices").find(":selected");
		$('#chosen-activities').append(`<div class="itinerary-item"><span class="title" data-id="${selectedActivity.text()}">${selectedActivity.text()}</span><button class="btn btn-xs btn-danger remove btn-circle" id="activity-x-button" data-id="${selectedActivity.text()}">x</button></div>`);
		
			coordArr = selectedActivity.attr('data-id').split(',');
			
			drawMarker('activity', selectedActivity.text(), [coordArr[0], coordArr[1]]);

		$('.btn.btn-xs.btn-danger.remove.btn-circle').unbind('click'); 

		$('.btn.btn-xs.btn-danger.remove.btn-circle').click(function(){
			let activityName = $(this).prev().attr('data-id');
				markersObj[activityName][0].setMap(null);
				markersObj[activityName] = markersObj[activityName].slice(1)
			$(this).parent().remove(); 
		});
	});

	$('#day-add').click(function() {	
		var $nextDay = $('#day1').children().clone().prop('id', 'day2')
		
		$('#day1').children().hide();
		
		$blankDay.appendTo('#day1');
	});
	
}); 


