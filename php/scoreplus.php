<?
include "connect_db.php";
$plus = $_POST['type'];
switch ($plus)
{
case 0 : 
$message = '내 글을 보고 빵터졌습니다.';
break;
case 1 : 
$message = '내 글에 공감합니다.';

break;
case 2 : 
$message = '내 글을 보고 놀랐습니다.';

break;
case 3 : 
$message = '내 글이 유용하다고 느낍니다.';

break;
case 4 : 
$message = '내 글을 보고 감동받았습니다.';

break;
}


$only_no = $_POST['onlyno'];

$sql = mysql_query("SELECT score FROM user_data WHERE `id` = '$user_id'");
$sql = mysql_fetch_array($sql,MYSQL_NUM);
$give= explode('|',$sql[0]);

$sql = mysql_query("SELECT * FROM score WHERE `only_no` = '$only_no'");
$score = mysql_fetch_array($sql,MYSQL_NUM);



$k=0;
$sql=explode("||",$score[6]);
$id = explode(';',$sql[0]);
$extype = explode(';',$sql[1]);
$cnt = count($id);
for($i=0;$i<$cnt-1;$i++){
	if ($id[$i] == $user_id && $k==0){
		$been = $i;
		$k++;
	}else if ($id[$i] == $user_id){
		$k++;
		
	}
	}

if ($k>2){
$f=0;
for($i=0;$i<$cnt-1;$i++){
	if ($id[$i] == $user_id && $f==0){
		$f++;
	}else{
		$newtype = $newtype . $extype[$i] . ";" ;
		$newid = $newid. $id[$i] . ";" ;
		}
	}
	$minu = $extype[$been];
	$score[$plus] = $score[$plus]+1;
	$give[$plus] = $give[$plus]+1;
	$score[$minu] = $score[$minu]-1;
	$give[$minu] = $give[$minu]-1;
	
}else{

$newid=$sql[0];
$newtype=$sql[1];
$score[$plus]=$score[$plus]+1;
$give[$plus]=$give[$plus]+1;
}



$newid = $newid. $user_id. ';';
$newtype = $newtype.$plus. ';';
$newdone = $newid . "||" . $newtype;

/*$sql = mysql_query("SELECT id FROM t_$user_id  WHERE `only_no` = '$only_no'");
$id = mysql_fetch_array($sql,MYSQL_NUM);
if($user_id==$id[0]){echo "자신의 점수는 올릴 수 없습니다"; exit;}*/
$scoredone = $score[0] + $score[1] + $score[2] + $score[3] + $score[4];
echo $scoredone;
mysql_query("update `zerohouse3`.`score` set `hum`='$score[0]', `sym`='$score[1]',  `wow`='$score[2]' , `info`='$score[3]' , `etc`='$score[4]', `who`='$newdone' where `only_no` = '$only_no'") ;

$give = $give[0]."|".$give[1]."|".$give[2]."|".$give[3]."|".$give[4];
mysql_query("update `zerohouse3`.`user_data` set `score`='$give' where `id` = '$user_id'") ;
$sql= mysql_query("SELECT `id` FROM reply WHERE `only_no` = '$only_no'");
$writer = mysql_fetch_array($sql,MYSQL_NUM);
$sql = mysql_query("select no from alarm order by no desc limit 0,1");
$delno = mysql_fetch_array($sql,MYSQL_NUM);


$sql= mysql_query("SELECT `delno` FROM alarm WHERE `only` = '$only_no'");
$alarm = mysql_fetch_array($sql,MYSQL_NUM);

if ($writer[0]!=$user_id){
if ($alarm[0]==null){
mysql_query("insert into alarm (id, message, date, delno, only) values ('$writer[0]',\"<li onclick='viewLetter($only_no);delAlarm($delno[0], this);'>{$user_name}님이 {$message}</li>\",now(),'$delno[0]', '$only_no')");}
else{
mysql_query("update alarm set message=\"<li onclick='viewLetter($only_no);delAlarm($alarm[0], this);'>{$user_name}님이 {$message}</li>\" where only = '$only_no'");}

}



mysql_close($connect);
?>