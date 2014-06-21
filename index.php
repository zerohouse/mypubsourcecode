<meta charset="utf-8" />
<script type="text/javascript">
var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
for (var word in mobileKeyWords){
    if (navigator.userAgent.match(mobileKeyWords[word]) != null){
        location.href = "m/";
        break;
    }


}
</script>
<?
include "php/connect_db.php";
$ffs = mysql_query("SELECT * FROM user_db  WHERE `userid` = '$user_id'");
$srnn = mysql_fetch_array($ffs,MYSQL_NUM);
mysql_close($connect);
if (strlen($user_id)>1)
{

echo "<script>location.replace('main.html')</script>";}
else{
echo "<script>location.replace('login.html')</script>";}
?>