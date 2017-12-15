
$("#submit").on("click", runSightingQuery);


function runSightingQuery(event){
	event.preventDefault();
	var userState =  $("#state").val().trim().toLowerCase();
	var currentURL =  window.location.orgin;

	$.ajax({url: "/comments", 
		method: "POST",
		data: {
			userState: userState
		}
		}).done(function(data){

			
			for (var i = 0; i < data.length; i++) {

				var resultDiv = $("<div>");
				resultDiv.addClass("circle");
				resultDiv.attr("id", "commentCircle","col-md-3", i + 1);
				$("#searchResults").append(resultDiv);

				var commentText = $("<p>");
				commentText.attr("id", "commenttext");
				commentText.html(data[i].comments + "<br/>" + "<br/>" + data[i].city + ", " + data[i].state);

				
				resultDiv.append(commentText)
				
			}



			

			console.log(data);


		
		})
}