<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>

<?

$fuserid = $_POST['fuserid'];
$fname = $_POST['fname'];
$fpasswd = $_POST['fpasswd'];
$fpasswd_re = $_POST['fpasswd_re'];
$fsex = $_POST['fsex'];
$femail = $_POST['femail'];
$phone = $_POST['phone'];

$rand = rand(0,10);
$url = "http://mypub.me/img/" . $rand . ".jpg";


include "../php/connect_db.php";

$ss = mysql_query("select `id` from user_data where `id` = '$fuserid'");
$r = mysql_fetch_array($ss);
$r2 = strlen($r[0]);

if($fuserid=="" || $fname=="" || $fpasswd == "" || $fpasswd_re == "" || $fpasswd!=$fpasswd_re)
{
echo "<script>
alert('*필수 입력 사항은 반드시 입력해야 합니다.');
history.back();
</script>";
die;
}
else if($r2 >= 1)
{
echo "<script>
alert('$r[0] 아이디가 이미 존재합니다.');
history.back();
</script>";
die;
}

setcookie('user_id',$fuserid);
setcookie('user_name',$fname);

if ($fsex=='m'){
$tmp = "1;+;girl;+;Girl;+;FF4079||";
$tmpn = "Girl";
}
else{
$tmp = "1;+;boy;+;Boy;+;FF4079||";
$tmpn = "Boy";
}

$sql = "insert into user_data (id, name, passwd, sex, email, date, phone, onmenu, char_url, score, groupdata, pub, profile) values ('$fuserid','$fname','$fpasswd','$fsex','$femail',now(),'$phone','1;+;hotissue;+;핫이슈;+;FF4079||1;+;humor;+;ㅋㅋ;+;FF4079||{$tmp}0;+;0;+;친구;+;2929FF||','$url','0|0|0|0|0', '친구;+;2929FF|+|가족;+;2929FF|+|동료;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|', '핫이슈;+;FF4079|+|ㅋㅋ;+;FF4079|+|$tmpn;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|','http://mypub.me/icon/profile.png')"; //고쳐야댐
$res = mysql_query($sql,$connect);
$tot_row = mysql_affected_rows();



/* 유저 친구 그룹핑 설정 테이블 설정 (상대가 어떤 그룹을 설정했는지 설정)*/

if($flag != "ok")
{
$sql = "create table g_$fuserid(
no int primary key not null auto_increment,
fr_id varchar(30) not null,
sort varchar(12) not null, 
fr_on char(1),
only char(1),
date datetime)";
/* fr_id : 친구 ID, fr_sort : 친구가 나를 설정한 그룹, sort : 친구가 나 분류, fr_on : 친구 추가 여부 */

$result = mysql_query($sql, $connect) or die("error
<script> alert(' 중복 아이디 입니다.');
location.replace('new.php');
</script>");
}

/* 내가 남긴 글*/

if($flag != "ok")
{
$sql = "create table my_$fuserid(
no int primary key not null auto_increment,
name_id text(65536),
sort varchar(12) not null, 
sort_name varchar(12) not null,
score varchar(12) not null,
only_no int(12) not null,
date datetime)";

/* fr_id : 친구 ID, fr_sort : 친구가 나를 설정한 그룹, sort : 친구가 나 분류, fr_on : 친구 추가 여부 */

$result = mysql_query($sql, $connect) or die("error
<script> alert(' 중복 아이디 입니다.');
location.replace('index.html');
</script>");
}



/* 글남길 데이터베이스*/
if($flag != "ok")
{
$sql = "create table t_$fuserid(
no int primary key not null auto_increment,
sort varchar(12) not null,
id varchar(30) not null,
img varchar(5000) not null,
talk text(65536),
score varchar(12) not null,
anony varchar(12) not null,
talk_sort varchar(12) not null,
only_no int(12) not null,
date datetime,
cards text(65536))";

$result = mysql_query($sql, $connect) or die("error
<script> alert(' 테이블이 이미 존재 합니다.');
location.replace('new.php');
</script>");
}


/* sort : 글남길 그룹, talk : 글 */
mysql_close($connect);



if($tot_row > 0){
	echo "<script>
	alert('My Republic, My PUB\\r\\n 회원이 되신 것을 환영합니다. ');
	location.replace('../index.php');
	</script>";
	}
else{
	echo "<script>
	alert('[등록 실패]\\r\\n 오류가 발생하여 회원 등록에 실패했습니다. ');
	history.back();
	</script>";
	}

	
	
	
	








mysql_close($connect);
?>
</html>