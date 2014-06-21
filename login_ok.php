<?php


if(!isset($_POST['is_ajax'])) exit;
if(!isset($_POST['user_id'])) exit;
if(!isset($_POST['user_pw'])) exit;
$is_ajax=$_POST['is_ajax'];
$user_id = $_POST['user_id'];
$user_pw = $_POST['user_pw'];

include "php/connect_db.php";

$sql = "select *from user_data where id = '$user_id' and passwd = '$user_pw' ";
$res = mysql_query($sql, $connect);
$list = mysql_num_rows($res);

mysql_select_db("user_data", $connect);
$result = mysql_query("SELECT * FROM user_data WHERE `id` = '$user_id'");
$row = mysql_fetch_array($result);


mysql_close($connect);

if($list)
{
$row = mysql_fetch_array($res);
setcookie('user_id',$user_id);
setcookie('user_name',$row[2]);
echo "success"; 

}
else{
mysql_close($connect);exit;}
?>