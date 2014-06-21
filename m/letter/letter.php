<?
include "../php/connect_db.php";
$group = $_POST['group']; // 타입으로 나눠서 소팅해야댐.
$groupname = $_POST['name'];
$page = $_POST['page'];

$type = explode('||',$group);
$sql = mysql_query("SELECT * FROM user_data  WHERE `id` = '$user_id'");
$user_data = mysql_fetch_array($sql,MYSQL_NUM); // no, id, name, passwd, sex, email, date, group, phone, char_url, profile, score, attractive
if ($groupname==null){$groupname="이름없는";}
if ($type[1]==1){
$sql = mysql_query("SELECT name FROM user_data  WHERE `id` = '$type[0]'");
$sname = mysql_fetch_array($sql,MYSQL_NUM);

echo "
<iframe class=myframe scrolling='no'   src='mypage/mypage.html?id=$type[0]'>
</iframe><div style='width:900;margin:auto;'>
	<div class=metro style='background-color:#a73e5c;' onclick=\"busy=false;pagerightnow=0;$('#mainpage').html('');ajaxMore();\">
	Letter
	</div>
	<div onclick=mypageCardCall('$type[0]'); class=metro style=background-color:#ec4863>
	Cards
	</div>
	<a href='../wall.html?id={$type[0]}&name={$sname[0]}' style=text-decoration:none; target=_blank><div class=metro style=text-decoration:none;background-color:#ffda66>
	Wall
	</div></a>
	<div class=metro onclick=\"busy=true;mypageModCall('$type[0]')\"  style='background-color:#1fcecb;'>
	Info
	</div></div><div class=wrapping><br>";
		

}else if ($type[1]==2){

$sql = mysql_query("SELECT * FROM score  WHERE `type` = 'pub_$type[0]'");
$score = mysql_fetch_array($sql,MYSQL_NUM);
	
		echo "
		<div class=wrapping>
		
            <div id='namewrap'>
               $user_data[2]님 안녕하세요. <font style=font-family:dek>Pub</font> {$groupname}입니다 &nbsp<a class=viewfriends onclick=toggleID('stats') style='cursor: hand;
float: right;
width: 30px;
height: 30px;
background-image: url(../icon/stats-icon.png);
background-size: 30px;
top: 15;
position: absolute;'></a>
            </div>";?>

			<div id=stats class=letter style='overflow: hidden;display:none;'>
			
		
			
			
			<div id=chartwrap style='text-align: center;'>
<div class=title><?echo $groupname?>의 글</div>

<canvas id='Doughnut' data-type='Doughnut' width='200' height='200'></canvas>
<br>
<a style='color:#F7464A;'>■</a>ㅋㅋ
<a style='color:#E2EAE9;'>■</a>공감
<a style='color:#D4CCC5;'>■</a>우와
<a style='color:#949FB1;'>■</a>지식
<a style='color:#4D5360;'>■</a>감동
<br>
<br>
<br>

<br>

</div>			
			
        <script type='text/javascript'>
            var data = [
	{
		value: <?echo $score[0]?>+1,
		color:"#F7464A"
	},
	{
		value : <?echo $score[1]?>+1,
		color : "#E2EAE9"
	},
	{
		value : <?echo $score[2]?>+1,
		color : "#D4CCC5"
	},
	{
		value : <?echo $score[3]?>+1,
		color : "#949FB1"
	},
	{
		value : <?echo $score[4]?>+1,
		color : "#4D5360"
	}

]
            $(document).ready(function(){
                $('#Doughnut').each(function(){
                    eval("new Chart(this.getContext('2d'))." + $(this).data('type') + '(data,options);');
                });
            });
        </script>
			
			
			

			
			
			
			
			</div>



<?



}else{
	$xx = str_split($groupname, 15);
		echo "
		<div class=wrapping>
		
            <div id='namewrap'>
               $user_data[2]님 안녕하세요. <a class=namewid>$xx[0]</a> 그룹입니다 &nbsp <a class=viewfriends onclick=toggleID('friends') style='cursor: hand;
float: right;
width: 30px;
height: 30px;
background-image: url(../icon/friends.png);
background-size: 30px;
top: 15;
position: absolute;'></a>
            </div>
        "; // 인사말
		echo "<div id=friends class=frwrap><div class=frtitle><strong>{$groupname}그룹의 멤버<br><br></strong></div>";
		$sql = mysql_query("SELECT count(fr_id) FROM g_$user_id  WHERE `sort` = '$type[0]'");
		$frcnt = mysql_fetch_array($sql,MYSQL_NUM);
		if ($frcnt[0]==0){
		echo "<div class=movefr>이 그룹에 친구가 없습니다.</div>";
		}
		else{
		for ($i=0;$i<$frcnt[0];$i++){
		$sql = mysql_query("SELECT fr_id FROM g_$user_id  WHERE `sort` = '$type[0]' order by no desc limit $i,1");
		$friends = mysql_fetch_array($sql,MYSQL_NUM);
		$sql = mysql_query("SELECT name FROM user_data  WHERE `id` = '$friends[0]'");
		$frname = mysql_fetch_array($sql,MYSQL_NUM);
		$sql = mysql_query("SELECT profile FROM user_data  WHERE `id` = '$friends[0]'");
		$frprofile = mysql_fetch_array($sql,MYSQL_NUM);

		echo "<div class=movefr onclick=friendMove('$friends[0]')><img class=frprofile src=$frprofile[0]><br>$frname[0]</div><div class=movefriends id=move$friends[0]></div>";}}
		echo "</div>";

}

	$sql = mysql_query("SELECT eq from eq where `id` = '$user_id' and pub='$type[0]'");
	$eq = mysql_fetch_array($sql,MYSQL_NUM);
	if ($eq[0]==null){$eq[0]='0|0|0|0|0|0|0';}
	$eqs = explode('|',$eq[0]);

	$function="setTimeout(function(){eqtype='$eq[0]';},1000);";
	$onoff = "$('#eqstate').text('on');$('#eqable').css('opacity',1);";
	if ($eqs[0]==null||$eqs[0]==0){
	$onoff = "$('#eqstate').text('off');$('#eqable').css('opacity',0.3);";
	$function = $function. "$( '.each' ).slider( 'option', 'disabled', true );
$( '#pointseq' ).slider( 'option', 'disabled', true );";
	}
	$function = $function. 	"$( '#pointseq' ).slider( 'option', 'value',". $eqs[1] .");
	$( '#humeq' ).slider( 'option', 'value',". $eqs[2] .");
	$( '#symeq' ).slider( 'option', 'value',". $eqs[3] .");
	$( '#woweq' ).slider( 'option', 'value',". $eqs[4] .");
	$( '#goodeq' ).slider( 'option', 'value',". $eqs[5] .");
	$( '#sadeq' ).slider( 'option', 'value',". $eqs[6] .");";
		mysql_close($connect);

?>
	
</div>
</div>
<script src="letter/letter.js"></script>



<script><?echo $function; echo $onoff?></script>