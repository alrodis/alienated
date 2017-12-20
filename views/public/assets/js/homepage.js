	//API route to get Mars Rover images from NASA API
	var queryURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=cgmMcm8C1HK2OY92NoNnokY81k1st0nIAIHCwSMd";


$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(data) {
    console.log("working");
    for (var i = 0; i < data.photos.length; i += 2) {
        if (i < 36) {
            var newDiv = $("<div class='col-lg-4'>");
            var newImg = $("<img src=" + data.photos[i].img_src + ">");
            newImg.addClass("nasaImg");
            newImg.attr("");
            newDiv.append(newImg);

            $("#nasaAPIDiv").append(newDiv);
        }

    }



});