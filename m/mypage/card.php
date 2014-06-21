<div class=wrapping>
<?
include "../php/connect_db.php";
$getid= $_POST[id];
$sql = mysql_query("SELECT `name`from user_data where id='$getid'");
$name = mysql_fetch_array($sql,MYSQL_NUM);
$sql = mysql_query("SELECT `cards`from cards where id='$getid'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);
if ($sql[0]==null){?>

<div id=morebtn>카드가 없습니다.</div>

<?}else{
echo $sql[0];
}
?>

</div>