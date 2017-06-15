
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