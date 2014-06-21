<?
include('../php/connect_db.php');

$id=$_POST['id'];
$sql = mysql_query("SELECT sum(hum),sum(sym),sum(wow),sum(info),sum(etc) from score where writer = '$id'");
$score=mysql_fetch_array($sql,MYSQL_NUM);
$sql = mysql_query("SELECT score from user_data where id = '$id'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);
$give = explode('|',$sql[0]);
$sql = mysql_query("SELECT name from user_data where id = '$id'");
$name=mysql_fetch_array($sql,MYSQL_NUM);
?>

<?
if ($user_id==$id){
$sql = "select *from user_data where id = '$user_id'";
$find_db = mysql_query($sql, $connect);
$in = mysql_fetch_array($find_db);
if ($in[4] == 'm'){$man ='checked';$woman="";}
else{$woman ='checked'; $man="";}
?>
<script type="text/javascript" src="/js/num.js"></script>
<script type="text/javascript">
	$(function() {

    $('#phone').numberOnly();
});

function infoMod() {
if ($('#modi').css('display')=='none'){$('#modi').show('blind',500);return;}
var ssname = $('#fname').val();
var ssphone = $('#phone').val();
var ssmail = $('#femail').val();
$.ajax({
                        type: "POST",
                        url: "../php/fix_db.php",
                        data: {fname: ssname , phone: ssphone, femail: ssmail},
                        success: function(response) {		
							messageShow(response);
						}});



}


</script>

<br><br>
<div id=modi style='overflow: auto;display:none;
padding:0 10%;
text-align:center;'>
<div class=title>회원 정보변경</div>
<input class='form3' type="hidden" name="fuserid" id="fuserid" maxlength="12" value='<? echo $user_id;?>' readonly>

<style>
.form3{border-radius:5 0;border:1px solid #Ddd}
</style>
이름&nbsp;&nbsp; <input class='form3' type="text" value='<?echo $user_name;?>' name="fname" id="fname" maxlength="10"> <br /> <br>
<!--변경 암호&nbsp;&nbsp; <input class='form3' type="password" name="fpasswd" id="fpasswd" maxlength="10"><br /><br>
암호 확인&nbsp;&nbsp; <input class='form3' type="password" name="fpasswd_re" id="fpasswd_re" maxlength="10" onblur="chk_passwd()"> <br><font size="2">한번더입력해주삼</font> <br /><br>-->
핸드폰 번호&nbsp;&nbsp; <input class='form3' type="text" name="phone" value='<?echo  $in[17];?>' id="phone" maxlength="4"> <br><font size="2">친구 찾기등에 사용됩니다!</font> <br /><br>
성별 <input   type="radio" name="fsex" value="m" <?echo $man?>> 남 
<input type="radio" name="fsex" value="w" <?echo $woman?>> 여<br>


<br>
이메일&nbsp;&nbsp; <input style=width:150; class='form3' value='<? echo $in[5];?>' type="text" name="femail" maxlength="30">





</div>
<div class='btn' onclick="infoMod()">
정보변경
</div>


<br><br>
<?}?>










<div id=chartwrap style='text-align: center;'>
<div class=title><?echo $name[0]?>님</div>

<div class=label><?echo $name[0]?>님이 쓰는 글은...</div>
<canvas id='Doughnut' data-type='Doughnut' width='250' height='250'></canvas>
<br>
<a style='color:#F7464A;'>■</a>ㅋㅋ
<a style='color:#E2EAE9;'>■</a>공감
<a style='color:#D4CCC5;'>■</a>우와
<a style='color:#949FB1;'>■</a>지식
<a style='color:#4D5360;'>■</a>감동

<br>
<br>
<br>
<div class=label><?echo $name[0]?>님이 좋아하는 글은...</div>
<canvas id='Doughnut2' data-type='Doughnut' width='250' height='250'></canvas>
<br>
<a style='color:#F7464A;'>■</a>ㅋㅋ
<a style='color:#E2EAE9;'>■</a>공감
<a style='color:#D4CCC5;'>■</a>우와
<a style='color:#949FB1;'>■</a>지식
<a style='color:#4D5360;'>■</a>감동

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
            var data2 = [
	{
		value: <?echo $give[0]?>+1,
		color:"#F7464A"
	},
	{
		value : <?echo $give[1]?>+1,
		color : "#E2EAE9"
	},
	{
		value : <?echo $give[2]?>+1,
		color : "#D4CCC5"
	},
	{
		value : <?echo $give[3]?>+1,
		color : "#949FB1"
	},
	{
		value : <?echo $give[4]?>+1,
		color : "#4D5360"
	}

]
            $(document).ready(function(){
                $('#Doughnut').each(function(){
                    eval("new Chart(this.getContext('2d'))." + $(this).data('type') + '(data,options);');
                });
				$('#Doughnut2').each(function(){
                    eval("new Chart(this.getContext('2d'))." + $(this).data('type') + '(data2,options);');
                });
            });
        </script>
<br><br><br>





<?mysql_close($connect);?>