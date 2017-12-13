function runSightingQuery(){

	var currentURL =  window.location.orgin;

	$.ajax({url: "/comments", 
		method: "GET"}).done(function(data){

			var resultDiv = $("#returnSearch");

			resultDiv.append(data[0].comments);

			console.log(data[0].comments);


		});
}

runSightingQuery();