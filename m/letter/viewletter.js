$(function() {

$('.fancybox').each(function(){
$(this).find('img').on('load', function(){
  if($(this).height()>600){
	$(this).parent().removeClass('fancybox');
	$(this).parent().attr('href','#');
  }
});
});



$( ".plus").unbind( "click" );
$('.plus').click(function(){
cardCopy(this);
});
$( ".removethis").unbind( "click" );
		$('.removethis').click(function(){
		removeCard(this);		
		});
    $( ".letterp" ).droppable({
      accept: "#pointsbox",
      //activeClass: "ui-state-hover",
      hoverClass: "ui-state-hover",
      drop: function( event, ui ) {
	  var plus = $( this ).find('.onlysave').val();
	  scorePlus( plustype , plus );
	  $( this ).find('.easing').show();
	$('#pointsbox').css("top",'');
	$('#pointsbox').css("left",'');
	  $(this).find('.overflow').animate({maxHeight:"+=1000px"});
  $(this).find('.garigae').remove();
      }
    });
});
