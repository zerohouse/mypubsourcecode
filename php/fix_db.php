<?
$fname = $_POST['fname'];
$fpasswd = $_POST['fpasswd'];
$fsex = $_POST['fsex'];
$femail = $_POST['femail'];
$phone = $_POST['phone'];

include "connect_db.php";

if($fname!=""){
mysql_query("update user_data set name='$fname' where id='$user_id'");
setcookie('user_name',$fname);
}if($fpasswd!=""){
mysql_query("update user_data set passwd='$fpasswd' where id='$user_id'");
}if($fsex!=""){
mysql_query("update user_data set sex='$fsex' where id='$user_id'");
}if($femail!=""){
mysql_query("update user_data set email='$femail' where id='$user_id'");
}if($phone!=""){
mysql_query("update user_data set phone='$phone' where id='$user_id'");}






echo "회원 정보가 변경되었습니다.";

mysql_close($connect);
?>