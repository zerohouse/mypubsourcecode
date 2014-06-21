//모바일을 위한 더블 클릭 체크 => 모바일은 드래그시 클릭이벤트 발생하여 터치따라가기 떔에 두번 클릭 일어나는듯..
//PC로 할땐 odd 관련 함수 on.tap 체크해서 뺴면댐. 그리고 스와이프 방지이벤트도 주석 해제.
drag = false;
mod = "<div id=mod><ul><li onclick='editThis(this);'>수정</li><li onclick='movencopyThis(this);'>이동/복사</li><li onclick='del_confirm(this);'>삭제</li></ul></div>";
multimove = false;
timeset = false;
img=false;
addids='';
groupnumbernow = 0;
anonymousval=0;
pagerightnow = 0;
sendto = "";
pubformnumber = 0;
replanony=0;
onthemenupan = 0;
addid = '';
schurl = '';
delno =0;
onlynomod = 0;
schnow = 0;
busy=false;
notswipe=false;
mini=false;
odd = 0;
youtube=false;
youtubei=0;
friend='';
friendset = false;
player="<iframe class=player src='$url'></iframe>";
youtubeobj = "<div class='moviewrap' id='id$id' onclick=moveToWrite('id$id1')><div class='removethis' onclick=removeID('id$id2')></div><img class='poster' onclick=\"playThis(this, '$inplay')\" src='$imgsrc'><div class='moviewords'><a class='movielink' href='$link' target='_blank'><b>$title</b></a><br>$description($rating)</div></div>";
$(function() {
/*$("mainpage").on('swipedown',function() {
$("#toptogglemenu").show(500);
});*/
$(document).mousemove(function(event) {
        x = event.pageX;
        y = event.pageY;
		
    });
	

	

swipeLetter(groupnumbernow);

hideID('writesomething');
hideID('mycardek');
hideID('switch');
hideID('result');
hideID('loading');

$('.upy').show();

	windowheight=$(window).height();
	$('#mainpage').scrollPagination();

	require("boot"); //드롭존 부트
	
	$('textarea').autosize();
	
    $(".popup").hide();
	
	$("#showit").click(function(){
	if (stop!=true) {
	reShow();
	}	
	});	
	
	$('.removethis').click(function(){
		removeCard(this);		
	});

	
	$('#mycardek').find('.moviewrap').click(function(){
	$( this ).clone().appendTo('#writeforsch');
	//hideID('mycardek',"blind", 500);
	//$("#writeforsch").show();
	//$("#newbody").focus();
	messageShow('글쓰기창에 카드가 추가되었습니다.');
	$("body").animate({scrollTop:0}, '500', 'swing', function() { }); 
			$('.removethis').click(function(){
		removeCard(this);		
			});
	});

	
	
	$('body').click(function(){
	drag=false;
    $("#mod").hide();
	$(".popup").hide();
				if ($( "#more" ).attr("toggle")==0){
   				$( "#more" ).animate({	opacity: 0.3}, 500 );
				$( "#more" ).attr("toggle","1");
   				}
	
	$("#friendsmove").hide();
    });	
	
	$('#groupset').not(".newpubs").click(function(){
    $(".newpubs").hide();
    });	
	$('#groupset').click(function(){
    $(".popup").hide();
    });	
	$("#groupset").hide();
	
	 
	  // Bind the swipeleftHandler callback function to the swipe event on div.box

   $( "body" ).on( "swipeleft", swipeleftHandler );
   $( "body" ).on( "swiperight", swiperightHandler );


  // Callback function references the event target and adds the 'swipeleft' class to it




  //  $( "#switch" ).draggable({
  //    start: function() {
	//  notswipesave=notswipe;
	  /*if (notswipe==false){
		
		swipeState('swipepin');
		
		}*/ //모바일에선 체크 못함..ㅜㅜ
	  
  //    },
  //    drag: function() {
	  
 //     },
 //     stop: function() {
	  /*if (notswipesave==false){
		swipeState('swipepin')
		
		}*/ //모바일에선 체크 못함..ㅜㅜ
		
//		stop =true;
//		setTimeout(function(){stop =false}, 1000);
		
  //    }
  //  } 
	
//	);
	    $( "#pointsbox" ).draggable({
      start: function() {
	  notswipesave=notswipe;
	  drag=true;
	  /*if (notswipe==false){
		
		swipeState('swipepin');
		
		}*/ //모바일에선 체크 못함..ㅜㅜ
	  
      },
      drag: function() {
	  
      },
      stop: function() {
	  /*if (notswipesave==false){
		swipeState('swipepin')
		
		}*/ //모바일에선 체크 못함..ㅜㅜ
		
		stop =true;
		setTimeout(function(){stop =false}, 1000);
		setTimeout(function(){drag =false}, 500);
		
      }
    } 
	
	);

	



plustype = 0;
$( "#pointsbox" ).click(function(){
if (odd!=0){return;}
odd++;
setTimeout(function(){odd=0}, 300);
if (drag==true){return;}
var plusclass;
   switch(plustype)
   {
   case 0:
   plustype++;
	 plusclass='sym';
   break;
   
   case 1:
	plustype++;
    plusclass='wow';
   break;
   
   case 2:
	plustype++;
   plusclass='good';
   break;
   
   case 3:
   plustype++;
   plusclass='sad';
   break;
   
   case 4:
      plustype=0;
   plusclass='hum';
   break;
   }
   $(this).removeClass();
   $(this).addClass(plusclass);
});

	
	

/*var timeout_id = 0;

 $('#topmenuwrap').mousedown(function() {
    timeout_id = setTimeout(menuMinimalize, 1000);
}).bind('mouseup mouseleave', function() {
    clearTimeout(timeout_id);
});*/ //for pc

  /*$("#topmenuwrap").on("taphold",function(){
	menuMinimalize();
  });      */
  
  /*$("#swipepin").on("tap",function(){
	swipeState('swipepin')
	event.stopPropagation();

  });     
  $("#groupname").on("tap",function(){
	
	if (mini==true){menuboxOnly();}
	else{setTopToggle('menubox')}

  });       */ //for mobile


});
/*function menuMinimalize(){
showID('switch');
hideID('toptogglemenu');
$("#swipepin").appendTo("#swipemini");
$("#groupname").appendTo("#gnamemini");
$("#swipepin").css("position","relative");
$("#groupname").css("position","relative");
$("#swipepin").css("right","");
$("#groupname").css("margin-left","0");
$("#groupname").css("margin-left","0");
$("#groupname").attr("onclick","menuboxOnly()");
mini=true;
}
function reShow(){
if (stop==true){return false;}
hideID('switch');
showID('toptogglemenu');
showID('topmenu');
$("#swipepin").appendTo("#spinwhere");
$("#groupname").appendTo("#gnamewhere");
$("#swipepin").css("position","absolute");
$("#groupname").css("position","absolute");
$("#swipepin").css("right","50");
$("#groupname").css("margin-left","60");
$("#groupname").attr("onclick","setTopToggle('menubox')");
mini=false;
}*/


function showID(showid, seffect, sduration) {
    $('#'+showid).show(seffect, sduration);
}
function hideID(hideid, effect, duration){
    $('#'+hideid).hide(effect, duration);
}

function removeID($id)
{
$('#'+$id).remove();

}

function menuboxOnly(){
 //모바일을 위한 더블 클릭 체크 => 모바일은 드래그시 클릭이벤트 발생하여 터치따라가기 떔에 두번 클릭 일어나는듯..



showID('toptogglemenu');
hideID('topmenu');
toggleID('menubox');
toggleID('toggleblock');

if ($( "#menubox" ).attr("toggle")==0){
$('#switch').css('top',4);
$( "#menubox" ).attr("toggle",1);}
else{
$('#switch').css('top',$('#menubox').height());
$( "#menubox" ).attr("toggle",0);}

}

function setTopToggle(){
$('.downy').toggle();
$('.upy').toggle();
if ($( "#menubox" ).attr("toggle")==0){
showID('toggleblock',"blind",500);showID('menubox',"blind",500);$( "#menubox" ).attr("toggle",1);}
else{
hideID('toggleblock',"blind",500);hideID('menubox',"blind",500);$( "#menubox" ).attr("toggle",0);}
}

function toggleID(toggleid, effect, duration){

odd++;
if (odd>1){
return false;} 
setTimeout(function(){odd=0;},500);//더블클릭방지

        $('.popup').not('#'+toggleid).hide();
       if (effect)
	   {$('#'+toggleid).toggle(effect, duration);}
	   else{
	   $('#'+toggleid).toggle("blind",500);}
		event.stopPropagation();

}

function callAdds($idofcall, $typeofcall){
switch ($typeofcall)
{ case 1: $("#"+$idofcall).toggleClass("replytoggle");break;
case 2: $("#"+$idofcall).toggleClass("feelingtoggle");break;
case 3: $("#"+$idofcall).toggleClass("writertoggle");break;
}
$("#"+$idofcall).addClass();
}

function togglePOPUP(toggleid){
        $('.popup').not('#'+toggleid).hide();
        $('#'+toggleid).toggle();
		event.stopPropagation();
}

function toggleAnonymous(){
if (anonymousval==0){ anonymousval=1;
	$("#profiletoggle").css("background-image","url('icon/anony.png')");
	$("#username").text("익명");
	messageShow('익명으로 글을 남깁니다.');
	}
else{ anonymousval=0;
	$("#profiletoggle").css("background-image","url('"+$user_profile+"')");
	$("#username").text($user_name);}
}




function writeLetter(){
if ($('#newbody').val()=='' && $('#newtitle').val()=='')
{
messageShow('글을 작성해주세요');
return;
}

		var sendwr = groupnumberfor[groupnumbernow];
if (groupnumbernow==100){sendwr = sendto;groupnumbernow=0; }
if (pagetypearray[groupnumbernow]==1){sendwr=groupnumberfor[groupnumbernow]+"||2";}

		var title = $("textarea#newtitle").val();
		var text = $("textarea#newbody").val();
		text = text.replace(/(?:\r\n|\r|\n)/g, "<br/>");
		
		$("#writeschvalue").remove();
		$("#removescript").remove();
		$(".removethis").replaceWith("<div class=plus></div>");
		$(".moviewrap").attr("onclick","");
		$( "#schtitlearea" ).replaceWith( "<div class=title>" + $( "#schtextarea" ).val() + "</div>" );
		$( "#schtextarea" ).replaceWith( "<div class=body>" + $( "#schtextarea" ).val() + "</div>" );
		$(".moviewrap").each(function(){
		$(this).attr("id","");});
		
		var schwrite = $("#writeforsch").html();
		$("#writeforsch").html("");
		
				$.ajax({
                        type: "POST",
                        url: "php/board_insert.php",
                        data: {head : title, body: text, anony : anonymousval, pagesort: sendwr, cards:schwrite},
                        success: function(response) {		
						$("textarea#newtitle").val("");
						$("textarea#newbody").val(""); 
						$("#my-dropzone").html("")
						$("#writesomething").hide();
						if (response.length<3){
						var answer = groupnameajax[groupnumbernow]+"에 글이 작성되었습니다.";
						response++;
						answer = "그룹"+response+" "+answer;
						alert(answer);
						}
						else{
						alert(response);}
						swipeLetter(groupnumbernow);
						$('.writebody:first').height(52);
						$('#writesomething').hide();
						}});
	}


function cardekCall(){
toggleID('mycardek');

if($('#mycardek').find('.moviewrap').length==0)
{
messageShow('카드가 없습니다.<br>컨텐츠의 +를 눌러 카드를 추가해보세요.');
}

}
	
function cardekState(state){
if (state == 'enable')
{showID("cardekcall");}
else{
hideID("cardekcall");
}
hideID("mycardek");
}

	
function callgroupSET(){
cardekState();
hideID("writespin","slide",500);
showID("groupset");
hideID("mainpage");
hideID("writesomething");
hideID("first");
$(".popup").hide();
}

function callfriendsSET(){
multimove=true;
cardekState();
friendset = true;
busy=true;
hideID("writespin","slide",500);
hideID("groupset");
hideID("writesomething");
hideID("first");
$(".popup").hide();

				$.ajax({
                        type: "POST",
                        url: "mypage/friends.php",
                        data: {},
                        success: function(response) {
						
						$("#mainpage").html(response);
						$("#mainpage").show();
						existOnly();
						$( "#multiple" ).attr("toggle","0");
						}});
						
}		



function findFriends(){	
setTimeout(function(){findProgress();},600);
}
	
function findProgress() {



	  $( "#about" ).show();
	  friend = $("#sch").val();
	  if (friend.length==0){
		
	  return;
	  }
                $.ajax({
                        type: "POST",
                        url: "php/frsch.php",
                        data:  {find_id: friend, pubids:pubid},
                        success: function(response) {
                           $("#about").html(response);
                        }
                });
                return false;
}

function scorePlus($scoretype, $onlynoscore)	{
  $.ajax({              type: "POST",
                        url: "php/scoreplus.php",
                        data: {type: $scoretype, onlyno : $onlynoscore},
                        success: function(points) {
						$("#points"+$onlynoscore).text(points);
						var tm;
						switch($scoretype){
						case 0: tm='유머'; break;
						case 1: tm='공감'; break;
						case 2: tm='우와'; break;
						case 3: tm='지식'; break;
						case 4: tm='감동'; break;
						}
						
						
						
						messageShow(tm+' 점수를 올렸습니다.<br> 게시물당 최대 3점을 줄 수 있습니다.');
														$.ajax({
								type: "POST",
								url: "letter/pointrefresh.php",
								data: {onlyno: $onlynoscore},
								success: function(response) {
								$("#easing"+$onlynoscore).html(response);
									
		
						
								}});
							
						
						

					}});
  }
   //점수올리기

      function swipeState($idb){
	  if (mini==true){
	  odd++;
if (odd==2){odd=0;return false();}} //모바일을 위한 더블 클릭 체크 => 모바일은 드래그시 클릭이벤트 발생하여 터치따라가기 떔에 두번 클릭 일어나는듯.. PC에선 두번눌러야댐.시발..ㅜㅜ
	  
	  
   if ($( "#"+$idb ).attr("toggle")==0){
     notswipe=false;
	messageShow('밀어서 페이지를 넘길 수 있습니다.');
   $( "#"+$idb ).animate({
  opacity: 1

	}, 200 );
   $( "#"+$idb ).attr("toggle","1");}
   else{
        notswipe=true;
	messageShow('밀어서 페이지를 넘길 수 없습니다.');
   $( "#"+$idb ).animate({
  
  opacity: 0.3
}, 200 );
   $( "#"+$idb ).attr("toggle","0");}
   }
   
   
   function removeGarigae($id){
  $($id).parent().parent().find('.overflow').animate({maxHeight:"+=1000px"});
  $($id).parent().parent().find('.garigae').remove();
   
   }
   
   function toggleState($idb){
   if ($( "#"+$idb ).attr("toggle")==0){
   
   $( "#"+$idb ).animate({
  
  opacity: 0.3
}, 200 );
   $( "#"+$idb ).attr("toggle","1");
   
   
   }
   else{
   
      $( "#"+$idb ).animate({
  
  opacity: 1
}, 200 );
   $( "#"+$idb ).attr("toggle","0");
}
   }
   

   function writeSpin(){
	
   $("body").scrollTop("0");
   showID('writesomething');
   $("#newbody").focus();
   }
function closeWrite($id){

$($id).parent().parent().parent().hide();
}
   
			
			
			
			
	function swipeleftHandler(){
	if (notswipe==true){return;}
	if (drag==true)
	{
	return;
	}
	
	
  groupnumbernow++;
  direction = 1;
  if(groupnumbernow>90){groupnumbernow=0;}
  if(groupnumbernow>groupcnt-1){groupnumbernow=0;}
  swipeLetter(groupnumbernow);

  }
    function swiperightHandler(){
	if (notswipe==true){return;}
		if (drag==true)
	{
	return;
	}
	
	groupnumbernow--;
	direction = 2;
	if(groupnumbernow>90){groupnumbernow=0;}
	if(groupnumbernow<0){groupnumbernow=groupcnt-1;}
	swipeLetter(groupnumbernow);

  }
			
			
			
			
			
function swipeLetter($group, $showingid, $hisid, $hisname){
mutimove=false;
friendset = false;
busy=false;
sendto = groupnumberfor[$group];
pagerightnow = 0;
groupnumbernow = $group;
cardekState('enable');
$("#friendsmove").appendTo("#save");
if ($group == 100){
sendto = $hisid+'||1';
$group=0;
groupnumbernow = 100; // 누군가의 페이지.
cardekState();
}
else if (pagetypearray[$group]==1){
sendto = groupnumberfor[$group]+'||2';
messageShow('PUB은 공개 게시판입니다.<br>모든 사용자가 글을 남기고 볼 수 있습니다.');
}

			hideID("groupset");
			hideID("writesomething");
			hideID("mainpage");
			showID("loading");
			$('#toggleblock').height($('#menubox').height()-10);


			var leftgroup = $group-1;
			var rightgroup = $group+1;
			var rightgroup2 = $group+2;
			
			switch ($group){
			case groupcnt-1:
			rightgroup = 0;
			rightgroup2 = 1;
			break;
			case groupcnt-2:
			rightgroup2 = 0;
			break;
			case 0:
			leftgroup=groupcnt-1;
			break;
			}

						$.ajax({
                        type: "POST",
                        url: "letter/letter.php",
                        data: {group : sendto, name: groupnameajax[$group]}, // groupname 수정
                        success: function(response) {

						setTimeout(function(){ajaxMore();
						
						},100);

						if (response){
						
						$("#first").html(response);
						showID("first");
						if (groupnumbernow==100){
						hideID("writespin", "slide", 500);

						}
						else{
						showID("writespin", "slide", 500);
						
						}
						hideID("loading");
						$("#mainpage").html("");
						showID("mainpage");
						showID($showingid);

						}
					}});

					$(".menu").css("color","#777777");
					$(".hiddenmenu").css("color","#777777");
					$(".menu").css("border-bottom","0px");
					$(".hiddenmenu").css("border-bottom","0px");
					$(".menu").css("padding-bottom","4px");
					$(".hiddenmenu").css("padding-bottom","4px");
					$("#menu"+$group).css("color","#"+groupcolorshow[$group]);
					$("#gline").css("background-color","#"+groupcolorshow[$group]);
					$("#menu"+$group).css("border-bottom","4px solid #"+groupcolorshow[$group]);
					$("#menu"+$group).css("padding-bottom","0px");
					/*
					$("#menu"+$group).show();
					if ($group>3){
					for (var i=0;i<$group-3;i++){
					$("#menu"+i).hide();
					}
					
					}*/
					
					
					var ggname;
					if (pagetypearray[$group]==1)
					{
					ggname = "Pub"+ groupnameajax[$group];
					}
					else if($hisid==$user_id)
					{
					ggname= "마이페이지";
					}
					else if (groupnumbernow == 100){
					
					     $.ajax({
                        type: "POST",
                        url: "php/getname.php",
                        data:  {id: $hisid},
                        success: function(response) {
						var textss = response;
						ggname = textss+"님의 페이지";	
						$("#groupname").text(ggname);
						}
					
                        });
								

					}
					else{					
					ggname = groupnameajax[$group];}
					
					if (groupnameajax[$group]=='')
					{ggname = "이름없는 그룹";
					
					messageShow('그룹관리에서 그룹이름을 설정해보세요.');
					}
					

					
					
					$("#groupname").text(ggname);
					
}





function viewLetter($view, pub){
$("#friendsmove").appendTo("#save");
mutimove=false;
friendset = false;
//sendto = groupnumberfor[$group];
pagerightnow = 0;
busy=true;
cardekState();
$("#friendsmove").appendTo("#save");
			hideID("groupset");
			hideID("writesomething");
			hideID("mainpage");
			showID("loading");

						$.ajax({
                        type: "POST",
                        url: "letter/viewletter.php",
                        data: {only : $view, pub: pub}, // groupname 수정
                        success: function(response) {		
						if (response){
						
						$("#first").html(response);
						showID("first");
						hideID("writespin", "slide", 500);

						hideID("loading");
						$("#mainpage").html("");
						showID("mainpage");
						}
					}});
}













function existOnly(){
var fr=0;
$( ".frwrap" ).each(function( index ) {
 if ( $( this ).find( '.movefr' ).length ==0 )
 {
 $(this).hide();
 }
 else{$(this).show(); fr++;}

 
});
 if (fr>1){$('#noned').remove();}else{
 $('#multiple').remove();
 $('#multi').remove();}
 
}


function openNEWpub($newpubnumber){
pubformnumber = $newpubnumber;
$("#newpub" + $newpubnumber).show();
				$.ajax({
                        type: "POST",
                        url: "pub/pub.html",
                        data: {},
                        success: function(response) {		
						$("#newpub" + $newpubnumber).html(response);
						
						}});


}



function writeReply($replyid, only, $textid, $anonyreply) {
						var replytext = $($textid).val();
						if (replytext==""){alert("댓글을 입력해주세요");
						}
						else{
						var anonyreply = $($anonyreply).text();
						$.ajax({
                        type: "POST",
                        url: "letter/writereply.php",
                        data: {onlyno: only, reply: replytext, anony: replanony},
                        success: function(response) {
								
								$.ajax({
								type: "POST",
								url: "letter/replyrefresh.php",
								data: {onlyno: only},
								success: function(response) {
								$($replyid).html(response);
								var comments = $("#comments"+only).text();
								comments++;
								$("#comments"+only).text(comments);
						
								}});
								
								
					}});}
        } 
		
function delReply(delonlyno, delno) {
if (confirm("삭제하시겠습니까?")){
						$.ajax({
                        type: "POST",
                        url: "letter/delreply.php",
                        data: {onlyno: delonlyno, no: delno},
                        success: function(response) {

														$.ajax({
								type: "POST",
								url: "letter/replyrefresh.php",
								data: {onlyno: delonlyno},
								success: function(response) {
								$("#replybox"+delonlyno).html(response);
								var comments = $("#comments"+delonlyno).text();
								comments--;
								$("#comments"+delonlyno).text(comments);
						
								}});
						
					}});
					
					
				}
        } 
		
function replyToggle($identify) {
		if (replanony==0){
		
		replanony=1;
		document.getElementById("anony"+$identify).innerHTML="익명";
		$("#anonyimg"+$identify).css("background-image","url(icon/anony.png)");
        } else {
		replanony=0;
		document.getElementById("anony"+$identify).innerHTML=$user_name;
		$("#anonyimg"+$identify).css("background-image","url("+$user_profile+")");
		}}
		

function showGroupForm(){
for (var i = 0; i < 10; i++) {
	if (i-1<groupon){
   $("#group"+i).show();}
	
	if (gonmenupan[i]!=0){
   gonmenupan[i]=0;
   toggleGroupMenupan(i);
   }
}
}

function showPubForm(){
for (var i = 0; i < 10; i++) {
	if (ponmenupan[i]!=0){
	ponmenupan[i]=0;
   $("#pub"+i).show();
   togglePubMenupan(i);
   }
}
}

	
function addGroup(){
if (groupon < 10){
$("#group"+(groupon+1)).show();
groupon++;
messageShow('체크하면 메뉴에 표시됩니다.');
}
}
/*
function delGroup(){
if (groupon > -1){
$("#group"+groupon).hide();
groupon--;
}
}*/

function addPub(){
if (pubon < 10){
$("#pub"+(pubon+1)).show();
messageShow('체크하면 메뉴에 표시됩니다.');
pubon++;}
}
/*
function delPub(){
if (pubon > -1){
$("#pub"+pubon).hide();
pubon--;
}
}*/


function groupSettingJUKYONG(){
	var pubdata="";
	var groupdata="";
	for (var i = 0; i < 10; i++) {
	pubdata = pubdata + $("#p"+i).val() + ";+;" + $("#p"+i+"c").val() + "|+|";
	}
	
	for (var i = 0; i < 10; i++) {
	$("#g"+i).val()
	$("#g"+i+"c").val()
	groupdata = groupdata + $("#g"+i).val() + ";+;" + $("#g"+i+"c").val() + "|+|";
	}

	var menupan = $("#menupan").sortable("toArray");
	
					$.ajax({
                        type: "POST",
                        url: "php/pubsetting.php",
                        data: {pub : pubdata, group: groupdata, menu : menupan, pubids : pubid},
                        success: function(response) {
						alert("그룹설정이 변경되었습니다.");
						location.reload();
						}});

	
}


function toggleGroupMenupan($number){ // 메뉴판에 애드 / 리무브 (그룹)
if (gonmenupan[$number]==0){
	if (onthemenupan>10){alert('메뉴에 최대 10개까지 등록할 수 있습니다.'); return;}
onthemenupan++;
var sgname = $("#g"+$number).val();
gonmenupan[$number]=1;
var $n = $number +1;
if(sgname ==""){sgname = "이름없음";}
$("#menupan").append("<div onclick='toggleGroupMenupan("+$number+")' class=onmenupan id='gm"+$number+"'><font color=#777777 size=2>그룹"+$n+"</font><br>"+sgname+"</div>")
$("#g"+$number+"ck").css("background-image","url(icon/checked.png)");}
else {
	if (onthemenupan<5){alert('메뉴는 최소 4개가 필요합니다.'); return;}
onthemenupan--;
$("#g"+$number+"ck").css("background-image","none");
$("#gm"+$number).remove();
gonmenupan[$number]=0;}
}


function togglePubMenupan($number){ // 메뉴판에 애드 / 리무브 (pub)
if (ponmenupan[$number]==0){
	if (onthemenupan>9){alert('메뉴에 최대 10개까지 등록할 수 있습니다.'); return;}
	onthemenupan++;

var sgname = $("#p"+$number).val();
ponmenupan[$number]=1;
var $n = $number +1;
if(sgname ==""){sgname = "이름없음";}
$("#menupan").append("<div  onclick='togglePubMenupan("+$number+")' class=onmenupan id='pm"+$number+"'><font color=#777777 size=2>PUB"+$n+"</font><br>"+sgname+"</div>")
$("#p"+$number+"ck").css("background-image","url(icon/checked.png)");}
else {
	if (onthemenupan<5){alert('메뉴는 최소 4개가 필요합니다.'); return;}
	onthemenupan--;

$("#pm"+$number).remove();
ponmenupan[$number]=0;
$("#p"+$number+"ck").css("background-image","none");}
}

function delNo($delno){
delno = $delno;
}

function delAlarm($delo, $id, $x){

			$.ajax({
                        type: "POST",
                        url: "php/delalarm.php",
                        data: {no: $delo},
                        success: function(response) {
								
								var cnt = $('#alarm').text();
								if (cnt==1){
							if ($x!=1){
								$($id).next().remove();
								$($id).prev().remove();
							}
							else{
								$($id).parent().parent().next().remove();
								$($id).parent().parent().prev().remove();
							}
							$('#alarm').remove();
								}
								else {
							
								cnt--;
								$('#alarm').text(cnt);
								}
							if ($x!=1){
								$($id).remove();
							}
							else{
							$($id).parent().parent().remove();
							
							}
							
							
							}});	


}


function friendOK($friendid)	{
						$( "#friendswhere" ).appendTo( "#new"+$friendid );;
						$( ".newfriends").not( "#new"+$friendid ).hide();
						$("#friendswhere").show();
						$( "#new"+$friendid).toggle("blind",500);
						addid=$friendid;
							event.stopPropagation();

					}
					
function groupShow()
{
$('#groupall').appendTo("#multi");
toggleID('groupall')

event.stopPropagation();

}

function friendMove($friendid)	{
						$( "#friendsmove" ).appendTo( "#move"+$friendid );
						$( ".movefriends").not( "#move"+$friendid ).hide();
						$("#friendsmove").show();
						$( "#move"+$friendid).show();
						addid=$friendid;
					event.stopPropagation();
					}

				
function friendMoveAllgroup($friendid)	{
						if (multimove==false)
						{
						$( "#groupall" ).appendTo( "#moves"+$friendid );
						$("#groupall").show();
						addid=$friendid;}
						else{

						if($( "#go"+$friendid ).hasClass('selector'))
						{
						addids = addids.replace($friendid+"||","");
						}
						else{
						addids =$friendid+"||"+addids;
						}
						$( "#go"+$friendid ).toggleClass('selector');
						}
						
						
						
					event.stopPropagation();
					}
function multiJukyong(){
$( "#groupall" ).appendTo( "#multi" );
				$("#groupall").show();
					event.stopPropagation();
}					
function multiMove(){
if (multimove==true){
multimove=false;
messageShow('다중 선택이 해제 되었습니다.<br>한명씩 이동시킵니다.');
$('.friendswrap').removeClass('selector');
}
else{
multimove=true;
messageShow('다중 선택이 활성화 되었습니다.<br>여러명 선택하여  이동시킵니다.');
}
toggleState('multiple');
$('#multi').toggle();
}
					
					
					
function addFriends($sort, $groupname){
var am = "";
if ($groupname==''){
$groupname="이름없는 그룹";
}

if (multimove==true){addid = addids;}

$.ajax({
                        type: "POST",
                        url: "php/fr_ok.php",
                        data: {id: addid, sort: $sort, no: delno},
                        success: function(response) {
						
						if(friendset == false){
							if ($sort!=50)
							{
							am = $groupname+"의 멤버가 되었습니다.";}
							else{
							am = "무인도로 갔습니다.";
							$sort=groupnumbernow;
							}
							alert(response + am);
							
							$("#friendswhere").hide();
							swipeLetter($sort);
						}
						else{
						if (multimove==false)
						$("#go"+addid).appendTo("#friends" + $sort );
						else{
						$('.selector').appendTo("#friends" + $sort );
						$('.selector').removeClass('selector');
						addids='';
						}

						
						$("#groupall").hide();
						existOnly();
						
						
						
						}
							
							
							
							}});							

}





function friendReq(friend) {
var $gn;
if (groupnumbernow!=100)
{$gn=groupnumbernow;}
else{$gn=0;
}
if (pagetypearray[$gn]==1)
{
$gn = 0;
}

  				$.ajax({
                        type: "POST",
                        url: "php/req.php",
                        data: {id: friend, sort: $gn},
                        success: function(response) {
						
						if (response==100)
						{alert("이미 친구입니다.");}
						else if (response==200)
						{alert("친구 요청 대기중입니다!");}
						else if (response==300)
						{alert("알림을 눌러보세요. 상대가 먼저 친구요청했어요.");}
						else if (groupnameajax[response] ==""){
						$gn++;
						alert("이름없는 그룹" + $gn +"(으)로 친구요청 하였습니다.");
						}
						else{
						$gn = groupnameajax[response];
						alert($gn +"그룹으로 친구요청 하였습니다.");}
								
							}});							
					
					}

        
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight-20 + 'px';
  }
  
eqtype=0;
function ajaxMore() {
if (busy==true){
return false; 
}

busy = true;
				$('#mainpage').append("<div id=moreloading><img src=icon/preloader.gif></div>");
				
				 	$.ajax({
                        type: "POST",
                        url: "letter/lettermore.php",
                        data: {group : sendto,	page : pagerightnow, eqtype: eqtype},
                        success: function(data) {
						
					if(data.length < 550) { 
					$('#morebtn').remove();
					$('#mainpage').append("<div id=morebtn>마지막페이지입니다.</div>");
					$('#moreloading').remove();
					busy = true;
					}
					
					else {
					$('#mainpage').append(data);
					$('#morebtn').remove();
					$('#moreloading').remove();
					$('#mainpage').append("<div id=morebtn style='cursor:hand' onclick='ajaxMore();'>더보기</div>");
					}						busy = false;
					pagerightnow++;
							}});								
					
					}

				
function modLetter($onlynumber){

		if( $('#mod').length ==0){
		$("#mod"+$onlynumber).append(mod);
		}
		$("#mod").appendTo("#mod"+$onlynumber);

		$("#mod").show();
		
		onlynomod = $onlynumber;
	event.stopPropagation();
}
					
					
function del_confirm($id) {
if (confirm("삭제하시겠습니까?")){
  				$.ajax({
                        type: "POST",
                        url: "php/del.php",
                        data: {no: onlynomod},
                        success: function(response) {
						alert(response);
						
$($id).parent().parent().parent().parent().parent().parent().remove();




					}}); 
  
}}




function cancelMod($id) {
var titlevar = $($id).parent().parent().parent().find('.writetitle').val();
var bodyvar = $($id).parent().parent().parent().find('.writebody').val();
bodyvar = bodyvar.replace(/(?:\r\n|\r|\n)/g, "<br>");
titlevar = titlevar.replace(/(?:\r\n|\r|\n)/g, "<br>");
$($id).parent().parent().parent().find('.writetitle').replaceWith("<div class=title>"+titlevar+"</div>");
$($id).parent().parent().parent().find('.writebody').replaceWith("<div class=body>"+bodyvar+"</div>");
$($id).parent().html("");
}

function modThis($id) {
var titlevar = $($id).parent().parent().parent().find('.writetitle').val();
var bodyvar = $($id).parent().parent().parent().find('.writebody').val();
bodyvar = bodyvar.replace(/(?:\r\n|\r|\n)/g, "<br>");
titlevar = titlevar.replace(/(?:\r\n|\r|\n)/g, "<br>");
$($id).parent().parent().parent().find('.writetitle').replaceWith("<div class=title>"+titlevar+"</div>");
$($id).parent().parent().parent().find('.writebody').replaceWith("<div class=body>"+bodyvar+"</div>");
var thisnum = $($id).attr("onlyno");
var modvalue = titlevar +"|||"+ bodyvar;

					$.ajax({
                        type: "POST",
                        url: "php/mod.php",
                        data: {talk: modvalue, anony:'' , onlyno: thisnum},
                        success: function(response) {
						$($id).parent().html("");
						//$("#edit"+onlynomod).attr("contentEditable","false");
						//$("#edit"+onlynomod).css("border","none");

					}}); 
}

function editThis($id) {
$('#mod').hide();
if ($($id).parent().parent().parent().parent().parent().parent().find('textarea').length==0){

var titlevar = $($id).parent().parent().parent().parent().parent().parent().find('.title').html();

var bodyvar = $($id).parent().parent().parent().parent().parent().parent().find('.body').html();
bodyvar = bodyvar.replace(/<br>/g, "\r\n");
titlevar = titlevar.replace(/<br>/g, "\r\n");
$($id).parent().parent().parent().parent().parent().parent().find('.title').replaceWith("<textarea class=writetitle placeholder='제목' onkeydow='javascript:if (event.keyCode == 13) return false;'>"+titlevar+"</textarea>");
$($id).parent().parent().parent().parent().parent().parent().find('.body').replaceWith("<textarea  placeholder='내용' class=writebody>"+bodyvar+"</textarea>");

$("#editbtn"+onlynomod).html("");
//$("#edit"+onlynomod).attr("contentEditable","True");
//$("#edit"+onlynomod).css("border","1px solid #dddddd");
//$("#edit"+onlynomod).focus();
$("#editbtn"+onlynomod).append("<a class=modibtn onlyno="+onlynomod+" onclick=modThis(this);>수정</a> &nbsp  &nbsp&nbsp&nbsp <a  class=modibtn onclick=cancelMod(this)>취소</a>");
}
$($id).parent().parent().parent().parent().parent().parent().find('.writetitle').focus();
$($id).parent().parent().parent().parent().parent().parent().find('.writebody').focus();
event.stopPropagation();
$('textarea').autosize();
if (titlevar.length > 0){
$($id).parent().parent().parent().parent().parent().parent().find('.writetitle').show();
}

}

function movencopyThis($id) {
$('#movencopy > ul > li').removeClass('copyselect');
$('#movencopy > ul > li:eq('+(groupnumbernow+1)+')').addClass('copyselect');
$('#movencopy').css("left",x);
$('#movencopy').css("top",y-20);
$('#movencopy').show();
}

function mcSelector($id){
$($id).toggleClass('copyselect');
}

function movencopyEXE(){
var alertm='';
var copynmode='';
if ($('.copyselect').length==0){
	if (confirm("선택된 그룹이 없으므로 삭제됩니다.")){
	movencopyAjax(copynmode);
	}
}
else{
$('.copyselect').each(function(){
		alertm = alertm + $(this).text();
copynmode = copynmode + $(this).find('.only').val()+'|+|';});

	if (confirm(alertm +"에 글을 올립니다.")){
	movencopyAjax(copynmode);
	}

}
}
function movencopyAjax($sends){
$.ajax({
                        type: "POST",
                        url: "php/multi_insert.php",
                        data: {sends: $sends, no: onlynomod},
                        success: function(response) {		
										messageShow('글이 이동/복사되었습니다.');
						}});


}

  

function schType($type){
var $url;
var $id;
var $message;
youtube=false;
img=false;

switch ($type)
{
case 1 : $url="sch/movie.php"; $id="movie"; $message="어떤 영화를 보셨나요?"; break;
case 2 : $url="sch/book.php"; $id="book"; $message="어떤 책을 읽으세요?"; break;
case 3 : $url="sch/news.php"; $id="news"; $message="어떤 뉴스를 찾고 싶으세요?"; break;
case 4 : $url="sch/ency.php"; $id="ency"; $message="사전을 검색합니다"; break;
case 5 : $url="sch/img.php"; $id="img"; $message="그림을 검색합니다"; img=true;
break;
case 6 : $url=""; $id="youtube"; $message="동영상을 검색합니다."; youtube=true; break;
case 7 : $url="sch/local.php"; $id="local"; $message="어디에 가셨나요?"; break;
case 8 : $url="sch/doc.php"; $id="doc"; $message="어떤 논문을 찾으세요?"; break;
case 9 : $url="sch/shop.php"; $id="shop"; $message="무엇을 사고 싶으세요?"; break;
case 10 : $url="sch/web.php"; $id="web"; $message="웹에서 검색합니다."; break;
}
schurl = $url;

$('#schvalue').val("");

$('.scon').removeClass("opacity");

if (schnow!=$type){
$('#'+$id).addClass("opacity");
$('#schwindow').show("blind", 500);
$('#schvalue').attr("placeholder", ""+$message );
schnow = $type;}
else{
$('#schwindow').hide("blind", 500);
schnow = 0;


}
}


function playThis(target, url){
var playerurl = player.replace("$url", url);
if( $(target).attr("play")==1 )
{
$(target).attr("play","0");
$(target).parent().find(".player").remove();
}
else{
$(target).attr("play","1");
$(target).parent().append(playerurl);
$("iframe").height(Math.ceil($(window).width()*0.5));
}

}



  
function schSomething($page) {


				var schword = $("#schvalue").val();

				schword = schword.replace(/ /g, ",");
				
		if (youtube==true)
		{
		
		// +$imgsrc+ = 썸네일 주소
		// +$id+ = 아이디(번호)
		// +$title+ = 제목
		// +$link+ = youtubeplay주소
		// +$inplay+ = 자체재생주소
		//+$description+ = 설명
		// +$rating+ = 평점
		// 문자를 바꿔서 어팬드 해줌;
		var youtubeget, $inplay, $link;

                $.ajax({
                        type: "GET",
                        url: "http://gdata.youtube.com/feeds/api/videos",
                        data: {q: schword, 'max-results':10, alt: 'jsonc', v: 2},
						dataType: "json",
                        
					success: function(json){

					$("#result").html("");
			$.each(json.data.items, function() {
								youtubei++;
			$inplay = "http://www.youtube.com/v/"+this.id+"?version=3&f=videos&app=youtube_gdata";
			$link = "wall.html?id=youtube"+this.id+"&name="+this.title;
			youtubeget = youtubeobj;
			youtubeget = youtubeget.replace("$imgsrc", this.thumbnail.hqDefault);
			youtubeget = youtubeget.replace("$title", this.title);
			youtubeget = youtubeget.replace("$id", youtubei);
			youtubeget = youtubeget.replace("$id1", youtubei);
			youtubeget = youtubeget.replace("$id2", youtubei);
			youtubeget = youtubeget.replace("$link", $link);
			youtubeget = youtubeget.replace("$inplay", $inplay);
			youtubeget = youtubeget.replace("$description", this.description);
			youtubeget = youtubeget.replace("$rating", this.rating);
				$("#result").append(youtubeget);
						
						
						
						

				}); 
				}
				});
		
				
		
		}
		
		
		
		
		else{

                $.ajax({
                        type: "POST",
                        url: schurl,
                        data: {query: schword,s: $page},
                        success: function(response) {
							$("#result").html("");
							if (response.length>10){
							youtubei++;
			var x = 11;
			if (img==true){
			x = 21;
			}
			
			for (var i =1; i<x;i++){
			youtubei++;
			response = response.replace("$$"+i, youtubei);
			response = response.replace("$$"+i, youtubei);
			response = response.replace("$$"+i, youtubei);
			response = response.replace("$$"+i, youtubei);
			response = response.replace("$$"+i, youtubei);
			}
							
							
							
                           $("#result").append(response);}
						   else{$("#result").append("<center><font size=5 color=#FFF>검색결과가 없습니다.</font><center>");}
                        }
                });
				}
				showID('result', "blind", 500);
				
}

function messageShow(message)
{
showID("message","highlight",500);
setTimeout(function(){hideID("message")},2500);
$('#message').html(message);
}



function moveToWrite($schid){
$('#schvalue').val("");
hideID('result',"blind", 500);
$("#writeforsch").show();
$("#"+$schid).appendTo("#writeforsch");
toggleState('cardtoggles');
toggleID('mycards');
$("#newbody").focus();
$("#"+$schid).attr( "onclick", "" );
$("body").animate({scrollTop:0}, '500', 'swing', function() { }); //for pc
//$.mobile.silentScroll(0);
}

function cardCopy($id){
$( $id ).parent().clone().appendTo('#writeforsch'); 
$("#writeforsch").show();
$('#writeforsch').find(".plus").replaceWith("<div class=removethis></div>");

$( $id ).parent().clone().appendTo('#tmpcards'); 
$("#tmpcards").show();
$('#tmpcards').find(".plus").replaceWith("<div class=removethis></div>");



		
		if ($('#writeforsch > .moviewrap').length>3){
		$('#writeforsch > .moviewrap:first').remove();
		}
		if ($('#tmpcards > .moviewrap').length>7){
		$('#tmpcards > .moviewrap:first').remove();
		}
		
	$('#mycardek > .moviewrap').click(function(){
	$( this ).clone().appendTo('#writeforsch');
	hideID('mycardek',"blind", 500);
	$("#writeforsch").show();
	$("#newbody").focus();
	$("body").animate({scrollTop:0}, '500', 'swing', function() { }); 

	});
	$('.removethis').click(function(){
			removeCard(this)
	});
		
		carddekUpdate("카드가 추가되었습니다.");



		
}

function removeCard($id){
	$( $id ).parent().remove();
			carddekUpdate("카드가 삭제되었습니다.");

	}


function carddekUpdate(message){
		var sendcard = $('#tmpcards').html();
						$.ajax({
                        type: "POST",
                        url: "php/mycards.php",
                        data: {card: sendcard},
                        success: function(response) {		
										messageShow(message);
						}});

}

function mypageCardCall($id){
			hideID("mainpage");
			showID("loading");
						$.ajax({
                        type: "POST",
                        url: "mypage/card.php",
                        data: {id: $id},
                        success: function(response) {		
						busy=true;
						$('#mainpage').html(response);
						$('#mycardeknamespace').remove();
						$(".removethis").replaceWith("<div class=plus></div>");
						$('.plus').click(function(){
					cardCopy(this);
						});
						showID("mainpage");
						hideID("loading");
						}});

}


function mypageModCall($id){
			hideID("mainpage");
			showID("loading");
						$.ajax({
                        type: "POST",
                        url: "mypage/modify.php",
                        data: {id: $id},
                        success: function(response) {		
						$('#mainpage').html(response);
						showID("mainpage");
						hideID("loading");
						}});

}



function writeSchvalue(){
		var sendwr = groupnumberfor[groupnumbernow];
if (groupnumbernow==100){sendwr = sendto;groupnumbernow=0; }
if (pagetypearray[groupnumbernow]==1){sendwr=groupnumberfor[groupnumbernow]+"||2";}



		
		
				$.ajax({
                        type: "POST",
                        url: "php/board_insert.php",
                        data: {body: schwrite, pagesort: sendwr},
                        success: function(response) {		
						alert(response);
						swipeLetter(groupnumbernow);
						}});
	}

	
	


	
	
	
	
	
	
(function($) {

	$.fn.scrollPagination = function(options) {
		
		var settings = { 
			nop     : 10, // The number of posts per scroll to be loaded
			offset  : 0, // Initial offset, begins at 0 in this case
			error   : 'No More Posts!', // When the user reaches the end this is the message that is
			                            // displayed. You can change this if you want.
			delay   : 0, // When you scroll down the posts will load after a delayed amount of time.
			               // This is mainly for usability concerns. You can alter this as you see fit
			scroll  : true // The main bit, if set to false posts will not load as the user scrolls. 
			               // but will still load if the user clicks.
		}
		
		// Extend the options so they work with the plugin
		if(options) {
			$.extend(settings, options);
		}
		
		// For each so that we keep chainability.
		return this.each(function() {		
			
			// Some variables 
			$this = $(this);
			$settings = settings;
			var offset = $settings.offset;
			busy = false; // Checks if the scroll action is happening 
			                  // so we don't run it multiple times
			
			// Custom messages based on settings
			if($settings.scroll == true) $initmessage = '';
			else $initmessage = '';
			
			// Append custom messages and extra UI
			/*$this.append('<div class="content"></div><div class="loading-bar">'+$initmessage+'</div>');*/
			
			function getData() {
			if (busy == true){
			return false}
			busy = true;

			
				$('#mainpage').append("<div id=moreloading><img src=icon/preloader.gif></div>");

				// Post data to lettermore.php
				$.post('letter/lettermore.php', {
					group : sendto,	
					page : pagerightnow,
					eqtype : eqtype,
					action        : 'scrollpagination',
				    number        : $settings.nop,
				    offset        : offset,
					    
				}, function(data) {
						
					// Change loading bar content (it may have been altered)
					
						
					// If there is no data returned, there are no more posts to be shown. Show error
					if(data.length < 550) { 
					
					$('#morebtn').remove();
					$('#mainpage').append("<div id=morebtn>마지막페이지입니다.</div>");
					$('#moreloading').remove();
					}
					else {

						// Offset increases
					    offset = offset+$settings.nop; 
						    
						// Append the data to the content div
					   	/*$this.find('.content').append(data);*/
						
					
						$('#mainpage').append(data);
					$('#morebtn').remove();
					$('#moreloading').remove();
					$('#mainpage').append("<div id=morebtn style='cursor:hand' onclick='ajaxMore();'>더보기</div>");

						// No longer busy!	
						busy = false;
						pagerightnow++;
					}	
						
				});
					
			}	
			
			getData(); // Run function initially
			
			// If scrolling is enabled
			if($settings.scroll == true) {
				// .. and the user is scrolling
				$(window).scroll(function() {
					
					// Check the user is at the bottom of the element
					if($(window).scrollTop() + windowheight + 200 > $this.height() && !busy) {
						
						// Now we are working, so busy is true
						
						
						// Tell the user we're loading posts
						
						
						// Run the function to fetch the data inside a delay
						// This is useful if you have content in a footer you
						// want the user to see.
						setTimeout(function() {
							
							getData();
							
						}, $settings.delay);
						
						
						
						
						
						
						
						
							
					}	
				});
			}
			
			// Also content can be loaded by clicking the loading bar/
			$this.find('.loading-bar').click(function() {
			
				if(busy == false) {
					busy = true;
					getData();
				}
			
			});
			
		});
	}

})(jQuery);


