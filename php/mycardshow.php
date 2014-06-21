<?
include "connect_db.php";
$sql = mysql_query("SELECT `cards`from cards where id='$user_id'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);
echo $sql[0];
mysql_close($connect);
?>