	
	var queryURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=cgmMcm8C1HK2OY92NoNnokY81k1st0nIAIHCwSMd";


	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(data){
			// console.log(data);
			console.log(data.photos[0].img_src);

			
			var newDiv = $("<div>");
			var newImg = $("<img src=" + data.photos[0].img_src + ">");
			newDiv.append(newImg);

			$("#nasaAPIDiv").append(newDiv);


		});