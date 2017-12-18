//Post Route On-Click event when user searches for UFO sightings. 
$("#submit").on("click", runSightingQuery);

// function to retrieve data and display it dynamically on page
function runSightingQuery(event) {
    event.preventDefault();
    $("#searchResults").empty();
    //grabbing the selected state from search box on form
    var userState = $(".custom-select").val().trim().toLowerCase();
    var currentURL = window.location.orgin;

    $.ajax({
        url: "/comments",
        method: "POST",
        data: {
            userState: userState
        }
    }).done(function(data) {

    //looping through database to grab the matching state user selected
    //dynamically updating page with that data
        for (var i = 0; i < data.length; i++) {

            var resultDiv = $("<div>");
            resultDiv.addClass("circle");
            resultDiv.attr("id", "commentCircle", "col-md-3", i + 1);
            $("#searchResults").append(resultDiv);
            var commentText = $("<p>");
            commentText.attr("id", "commenttext");
            commentText.html(data[i].comments + "<br/>" + "<br/>" + data[i].city + ", " + data[i].state);
            resultDiv.append(commentText);
        }
        console.log(data);
    });
}