<?
$card = $_POST['card'];
include "connect_db.php";
$sql = mysql_query("SELECT `id`from cards where id='$user_id'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);
if ($sql[0]==null){
mysql_query("INSERT INTO `zerohouse3`.`cards` (`id`,`cards`,`date`) values('$user_id','$card',NOW())");
}
else{
mysql_query("update `zerohouse3`.`cards` set `cards`='$card',`date`=now() where id='$user_id'");
}
mysql_close($connect);
?>