function eqOnoff(){
if ( $('#eqstate').html() == 'on' ){
$('#eqstate').html('off');
$('#eqable').css('opacity', 0.3);
$( ".each" ).slider( "option", "disabled", true );
$( "#pointseq" ).slider( "option", "disabled", true );
setTimeout(function(){eq(0);}, 100);
}
else{
$('#eqstate').html('on');
$('#eqable').css('opacity', 1);
$( ".each" ).slider( "option", "disabled", false );
$( "#pointseq" ).slider( "option", "disabled", false );
setTimeout(function(){eq(1);}, 100);
}

}

function eq($eqt){
eqtype = $eqt + "|" + $( "#pointseq" ).slider( "value" ) + "|" +$( "#humeq" ).slider( "value" ) + "|" + $( "#symeq" ).slider( "value" ) + "|" + $( "#woweq" ).slider( "value" ) + "|" + $( "#goodeq" ).slider( "value" ) + "|" + $( "#sadeq" ).slider( "value" );
$.ajax({type: "POST",
       url: "php/eq.php",
      data: {eqs: eqtype, pub: groupnumberfor[groupnumbernow] },
	  success: function(response) {
	  
	  $('#mainpage').html('');
	  pagerightnow=0;
	  setTimeout(function(){ajaxMore();}, 100);
	  }});

}