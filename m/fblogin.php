<?
$id = $_POST['id'];
$name = $_POST['name'];
$gender = $_POST['gender'];
$image = $_POST['image'];
$email = $_POST['mail'];



include "php/connect_db.php";

$sql = mysql_query("select `id` from user_data where `id` = '$id'");
$isempty = mysql_fetch_array($sql,MYSQL_NUM);
if ( $isempty[0] == null )
{

$rand = rand(0,10);
$url = "http://mypub.me/img/" . $rand . ".jpg";

if ($gender='m'){
$tmp = "1;+;girl;+;Girl;+;FF4079||";
$tmpn = "Girl";
}
else{
$tmp = "1;+;boy;+;Boy;+;FF4079||";
$tmpn = "Boy";
}



if($flag != "ok")
{
$sql = "insert into user_data (id, name, sex, email, date, onmenu, char_url, score, groupdata, pub, profile) values ('$id','$name','$gender','$email',now(),'1;+;hotissue;+;핫이슈;+;FF4079||1;+;humor;+;ㅋㅋ;+;FF4079||{$tmp}0;+;0;+;친구;+;2929FF||','$url','0|0|0|0|0', '친구;+;2929FF|+|가족;+;2929FF|+|동료;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|;+;2929FF|+|', '핫이슈;+;FF4079|+|ㅋㅋ;+;FF4079|+|$tmpn;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|;+;FF4079|+|','$image')"; 

$result = mysql_query($sql, $connect) or die("error 1");
}
if($flag != "ok")
{
$sql = "create table g_$id(
no int primary key not null auto_increment,
fr_id varchar(30) not null,
sort varchar(12) not null, 
fr_on char(1),
only char(1),
date datetime)";


$result = mysql_query($sql, $connect) or die("error 2");
}


if($flag != "ok")
{
$sql = "create table my_$id(
no int primary key not null auto_increment,
name_id text(65536),
sort varchar(12) not null, 
sort_name varchar(12) not null,
score varchar(12) not null,
only_no int(12) not null,
date datetime)";

$result = mysql_query($sql, $connect) or die("error 3");
}



/* 글남길 데이터베이스*/
if($flag != "ok")
{
$sql = "create table t_$id(
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
cards text(65536)
)";

$result = mysql_query($sql, $connect) or die("error 5");
}

echo "addok";
}
else
{
echo "ok";
}
setcookie('user_id',$id);
setcookie('user_name',$name);
mysql_close($connect);
?>