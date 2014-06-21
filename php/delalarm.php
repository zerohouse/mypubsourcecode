<?
include "connect_db.php";
$delno = $_POST['no'];


mysql_query("delete from alarm where delno='$delno'"); //내꺼 지우기.
mysql_close($connect);
?>
