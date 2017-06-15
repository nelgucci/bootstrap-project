
$('#random-gif-btn').click(function(){
	$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg", function( data ) {
	var img= '<img src=" ' + data.data.image_url + ' ">'
	$('#random-gif-container').html(img);

//$('#random-gif-container').html('<img class="theimage" src="http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=pg">')
  // $( ".result" ).html( data );
  // alert( "Load was performed." );
  console.log(data);});
});


// $.get( "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC", function( data ) {
//   // $( ".result" ).html( data );
//   // alert( "Load was performed." );
//   console.log(data);
// });

var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
    
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('.popup')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});