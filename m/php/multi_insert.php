<?
$no = $_POST['no'];
$sql = $_POST['sends'];
$sends = explode('|+|',$sql);
$cnt = count($sends)-1;

include "connect_db.php";







$sql = mysql_query("SELECT *from t_$user_id where `only_no` = $no");
$data = mysql_fetch_array($sql,MYSQL_NUM);

$img=$data[3];
$talk=$data[4];
$anony=$data[6];
$cards=$data[10];

for ($s=0;$s<$cnt;$s++)
{

$type = explode('|',$sends[$s]);
$pagesort = $type[0];

$sql = mysql_query("SELECT `no`from only order by no desc limit 0, 1");
$only_no = mysql_fetch_array($sql,MYSQL_NUM); //온리넘버
mysql_query("INSERT INTO `zerohouse3`.`only` (`no`)VALUES (NULL);"); //온리넘버 증가
$where="";

if ($type[1]==0) // 그룹에 글쓸때.
{
$typeinsert = $user_id."%".$pagesort;
// 내 DB에서 지금 내가 쓰려는 글이 가야 하는 상대 고름
$sql= mysql_query("SELECT count(`fr_id`) FROM g_$user_id WHERE `sort` = '$pagesort'  and `fr_on` = '1'");
$cnt2 = mysql_fetch_array($sql,MYSQL_NUM);

for($i=0;$i<$cnt2[0];$i++){
$sql= mysql_query("SELECT `fr_id` FROM g_$user_id WHERE `sort` = '$pagesort'  and `fr_on` = '1' order by no desc limit $i, 1");
$id=mysql_fetch_array($sql,MYSQL_NUM);//아디 가져오고
$sql= mysql_query("SELECT `sort` FROM g_$id[0] WHERE `fr_id` = '$user_id' and `fr_on` = '1'");
$sort=mysql_fetch_array($sql,MYSQL_NUM);//그사람 소트값 가져오고
$where = "$where" . "|" . "$id[0]"; // 아이디 모아주고
mysql_query("INSERT INTO `zerohouse3`.`t_$id[0]` (`sort`,`id`,`img`,`talk`,`anony`,`date`,`only_no`,`cards`) values('$sort[0]','$user_id','$img',\"$talk\",'$anony',NOW(),'$only_no[0]','$cards');"); //글쓰고
}

}



else if ($type[1]==1) // pub에 작성하기
{
$typeinsert = "pub_".$type[0];
mysql_query("INSERT INTO `zerohouse3`.`pub_$type[0]` (`sort`,`id`,`img`,`talk`,`anony`,`date`,`only_no`,`cards`) values('$sort[0]','$user_id','$img',\"$talk\",'$anony',NOW(),'$only_no[0]','$cards');"); //글쓰고

$where= "!!pub|$type[0]";
}



//내꺼에도너줌 $pagesort 가 상대 솔트값이 되야 됨..
mysql_query("INSERT INTO `zerohouse3`.`my_$user_id` (`sort`,`name_id`,`date`,`only_no`) values('$pagesort','$where',NOW(),'$only_no[0]');");
mysql_query("INSERT INTO `zerohouse3`.`t_$user_id` (`sort`,`id`,`img`,`talk`,`anony`,`date`,`only_no`,`cards`) values('$pagesort','$user_id','$allfiles',\"$talk\",'$anony',NOW(),'$only_no[0]','$cards');");
mysql_query("INSERT INTO `reply` (`id`,`only_no`,`type`) values('$user_id','$only_no[0]','$typeinsert');");//리플생성

mysql_query("INSERT INTO `score` (`hum`,`sym`,`wow`,`info`,`etc`,`type`,`only_no`,`writer`) values(0,0,0,0,0,'$typeinsert','$only_no[0]','$user_id');");//스코어생성

}







$only_no = $no;

$sql = mysql_query("SELECT `sort` FROM my_$user_id  WHERE `only_no` = '$only_no'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);
$type = explode('||',$sql[0]);



if ($type[1]==1){//타입 2 는 펍 1은 상대페이지
mysql_query("delete from t_$type[0] where only_no='$only_no'");
}
if ($type[1]==2){
mysql_query("delete from pub_$type[0] where only_no='$only_no'");
}
else{

$sql = mysql_query("SELECT `name_id` FROM my_$user_id  WHERE `only_no` = '$only_no'");
$where = mysql_fetch_array($sql,MYSQL_NUM);
$id = explode('|',$where[0]);

$cnt = count($id);

for ($i=0;$i<$cnt;$i++){
mysql_query("delete from t_$id[$i] where only_no='$only_no'");
}

}

mysql_query("delete from t_$user_id where only_no='$only_no'"); //내꺼 지우기.
mysql_query("delete from reply where only_no='$only_no'");
mysql_query("delete from score where only_no='$only_no'");
mysql_query("delete from my_$user_id where only_no='$only_no'");









$dir = 'upload/'.$user_id.'/'.$only_no;
delete_all($dir);
function delete_all($name){
if(is_dir($name)){
$ch=0;
$data_list = opendir($name);
while($file = readdir($data_list)){
if ($file != "." && $file != ".."){$ch++;}
}
closedir($data_list);
if($ch){
$data_list = opendir($name);
while($file = readdir($data_list)){
if ($file != "." && $file != ".."){delete_all($name."/".$file);}
}
closedir($data_list);
}
rmdir($name);
}
else{
unlink($name);
}
}


















mysql_close($connect);
?>