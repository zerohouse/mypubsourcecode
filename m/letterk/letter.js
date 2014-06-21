$(function() {
$("#schtitlearea").autosize();
$("#schtextarea").autosize();
$(".popup").hide();

$( "#pointseq" ).slider({ range: "min", value:0, min: 0, max: 10, step: 1,
      slide: function( event, ui ) { drag=true;
		

	setTimeout(function(){eq(1);}, 100);

		} });
$( "#pointseq" ).find('.ui-slider-handle').css('background-image','url(../icon/point.png)');
$( "#pointseq" ).find('.ui-slider-handle').css('background-size',48);
$( "#pointseq" ).find('.ui-slider-handle').width(44);
$( "#pointseq" ).find('.ui-slider-handle').height(44);
$( "#pointseq" ).find('.ui-slider-handle').css('margin-top',-23);
$( "#pointseq" ).find('.ui-slider-handle').css('margin-left',-22);		


 $( ".each" ).slider({ range: "min", value:0, min: 0, max: 50, step: 5,
      slide: function( event, ui ) { drag=true;

	setTimeout(function(){eq(1);}, 100);
	} });
$( "#humeq" ).find('.ui-slider-handle').css('background-image','url(../icon/humor.png)');
$( "#symeq" ).find('.ui-slider-handle').css('background-image','url(../icon/shy.png)');
$( "#woweq" ).find('.ui-slider-handle').css('background-image','url(../icon/suprise.png)');
$( "#goodeq" ).find('.ui-slider-handle').css('background-image','url(../icon/good.png)');
$( "#sadeq" ).find('.ui-slider-handle').css('background-image','url(../icon/sad.png)');

});
replanony=0;

