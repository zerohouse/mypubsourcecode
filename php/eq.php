<?
include "connect_db.php";
$eqs = $_POST['eqs'];
$pub = $_POST['pub'];

$sql = mysql_query("SELECT eq FROM eq WHERE `id` = '$user_id' and `pub` = '$pub'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);

if ($sql[0]==null){
mysql_query("insert into eq (pub, id, eq) values ('$pub','$user_id','$eqs')");
}else{
mysql_query("update `zerohouse3`.`eq` set `eq`='$eqs' where `id` = '$user_id' and `pub` = '$pub'") ;
}

mysql_close($connect);
?>