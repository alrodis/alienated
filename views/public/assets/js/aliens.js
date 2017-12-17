
// Post Route Click Event. 
$("#submit").on("click", newSighting);


// Function to create and post new sighting
function newSighting(){

		// capturing all variables in the form. 
		var city = $("#city").val().trim().toLowerCase();
		// var state = $("#state").val().trim().toLowerCase();
		var state = $(".custom-select-state").val().trim().toLowerCase();
		var country = $("#country").val().trim().toLowerCase();
		//var shape = $("#shape").val().trim().toLowerCase();
		var shape = $(".custom-select-shape").val().trim().toLowerCase();
		var duration_seconds = parseInt($("#minutes").val().trim())*60;
		var duration_minutes = parseInt($("#minutes").val().trim());
		var comments = $("#comments").val().trim().toLowerCase();
		var date = ($("#date").val().trim() + " 00:00:00");


		
		// validating that all the fields are filled in. 
		if(city == "" || state == "" || country=="" || shape == "" || duration_minutes==""||comments==""||date==""){
			// alert("Please fill in all fields")
			$("#failureModal").modal("toggle");
		} else{

		// Creating a newSighting Object. 
		var newSighting = {
		city: city,
		state: state,
		country: country,
		shape: shape,
		duration_seconds: duration_seconds,
		duration_minutes: duration_minutes, 
		comments: comments,
		date: date
		}

		// 
		console.log(newSighting);

		$.ajax("/api/sightings", {
			type: "POST",
			data: newSighting
		}).then(
			function(){
				console.log("newSighting was created");
				$("#successModal").modal("toggle");
				//console.log("Before.." + $("#city").val());
				$("#city").val("");
				//console.log("After.." + $("#city").val());	
				// $("#state").val("");
				// $("#custom-select").empty().append("start");//need to figure out how to clear this
				$(".custom-select-state").val("");
				$("#country").val("");
				$("#date").val("");
				//$("#shape").val("");
				$(".custom-select-shape").val("");
				$("#minutes").val("");
				$("#comments").val("");

			});
		}
	}	




