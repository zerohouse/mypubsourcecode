<?php
include "connect_db.php";

$delno = $_POST['no'];
$ids = $_POST['id'];
$sort = $_POST['sort'];

$id = explode('||',$ids);
$cnt = count($id);
if ($cnt<2){$id = $id[0];

$sql = mysql_query("select name from user_data where id='$id'");
$name = mysql_fetch_array($sql, MYSQL_NUM);

if ($delno!=null) {mysql_query("update g_$user_id set fr_on='1' where fr_id='$id'");}
mysql_query("update g_$user_id set sort='$sort' where fr_id='$id'");
mysql_query("update g_$user_id set date='now()' where fr_id='$id'");

if ($delno!=null) {mysql_query("update g_$id set fr_on='1' where fr_id='$user_id'");}
mysql_query("update g_$id set date='now()' where fr_id='$user_id'");
if ($delno!=null) {mysql_query("DELETE FROM alarm WHERE delno = '$delno'");}
	$sortq=$sort+1;
if ($delno!=null) {
	if ($sort=='50'){
	echo "{$name[0]}($id)님이";
	}else{
	echo "{$name[0]}($id)님이";}
	}
	
	}
	
	
	
	
else {

for ($i=0;$i<$cnt;$i++)
{

mysql_query("update g_$user_id set sort='$sort' where fr_id='$id[$i]'");

}

}

mysql_close($connect);
?>

