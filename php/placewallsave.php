<?
$save = $_POST['save'];
$id = $_POST['id'];
include "connect_db.php";
$sql = mysql_query("SELECT `id`from wall where id='$id'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);
if ($sql[0]==null){
mysql_query("INSERT INTO `zerohouse3`.`wall` (`id`,`contents`,`date`) values('$id','$save',NOW())");
}
else{
mysql_query("update `zerohouse3`.`wall` set `contents`=\"$save\",`date`=now() where id='$id'");
}
echo "ok";
mysql_close($connect);
?>