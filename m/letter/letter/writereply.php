<?
include "../php/connect_db.php";
 
$only_no= $_POST['onlyno'];
$where= $_POST['who'];
$reply= $_POST['reply'];
$anony= $_POST['anony'];




$sql= mysql_query("SELECT `reply` FROM reply WHERE `only_no` = '$only_no'");
$ori = mysql_fetch_array($sql,MYSQL_NUM);
$no2 = explode("|",$ori[0]);
$no = count($no2);

$date= date( 'Y-m-d H:i:s', time() );
$replydone = "$ori[0]". "|" . "$anony"."&*$"."$user_name"."&*$"."$user_id"."&*$"."$reply"."&*$"."$date"; //1은 익명

$sql= mysql_query("SELECT `id` FROM reply WHERE `only_no` = '$only_no'");
$writer = mysql_fetch_array($sql,MYSQL_NUM);
$sql = mysql_query("select no from alarm order by no desc limit 0,1");
$delno = mysql_fetch_array($sql,MYSQL_NUM);

mysql_query("update `zerohouse3`.`reply` set `reply`='$replydone' where only_no='$only_no'");


$sql= mysql_query("SELECT `delno` FROM alarm WHERE `only` = '$only_no'");
$alarm = mysql_fetch_array($sql,MYSQL_NUM);

if ($writer[0]!=$user_id){
if ($alarm[0]==null){
mysql_query("insert into alarm (id, message, date, delno, only) values ('$writer[0]',\"<li onclick='viewLetter($only_no);delAlarm($delno[0], this);'>{$user_name}님이 댓글을 남겼습니다.</li>\",now(),'$delno[0]', '$only_no')");}
else{
mysql_query("update alarm set message=\"<li onclick='viewLetter($only_no);delAlarm($alarm[0], this);'>{$user_name}님이 댓글을 남겼습니다.</li>\" where only = '$only_no'");}

}
mysql_close($connect);

?>