
<?php
include "connect_db.php";

if(!isset($_POST['find_id'])) {mysql_close($connect);exit;}
$find_id = $_POST['find_id'];
$pubids = $_POST['pubids'];
$pubcnt = count($pubids);


if($user_id!="non-logged"){
/*카운트*/
$sql = mysql_query("select count(name) from user_data where `id` LIKE '%$find_id%' or `name` LIKE '%$find_id%' or `email` LIKE '%$find_id%' or `phone` LIKE '%$find_id%' and `id` != '$user_id'");
$cnt = mysql_fetch_array($sql,MYSQL_NUM);


echo "<ul id='reqwrap' style='margin-left: -350;'><li class='line'>친구 검색 결과</li>";
if($cnt[0]==0){
echo "<li>&nbsp;&nbsp; 검색결과가 없습니다.</li>";}
else{
	//ID
	for ($i=0;$i<$cnt[0];$i++)
	{
	$sql = mysql_query("select * from user_data where `id` LIKE '%$find_id%' or `name` LIKE '%$find_id%' or `email` LIKE '%$find_id%' or `phone` LIKE '%$find_id%' and `id` != '$user_id' LIMIT $i,1");
	$data = mysql_fetch_array($sql,MYSQL_NUM);
	if ($data[5]!=null){
	$data[5] = "<font size=1>(".$data[5].")</font>";
	}
	if ($data[10]!=null){
	$data[10] = "<img style='max-width:30;max-height:30;margin:0 10 10 0' align=middle src='".$data[10]."'>";
	}
	echo "<li class='frname'><div class='reqbtn' onclick=\"friendReq('{$data[1]}');\">친구요청</div><a style=cursor:hand onclick=\"swipeLetter(100, 0, '$data[1]','$data[2]')\">$data[10]$data[2] $data[5]</a></a></li>";}
}
}

$sql = mysql_query("select count(no) from t_$user_id where `talk` LIKE '%$find_id%'");
$cnt = mysql_fetch_array($sql,MYSQL_NUM);

$k = 0;
	for ($i=0;$i<10;$i++){
		if ($pubids[$i]!=''){
			$sql = mysql_query("select count(no) from pub_$pubids[$i] where `talk` LIKE '%$find_id%' and not `id`= $user_id");
			$pbcnt = mysql_fetch_array($sql,MYSQL_NUM);
				if ($pbcnt[0]>0){
					$respbids[$k] = $pubids[$i];
					$pbeachcnt[$k] = $pbcnt[0];
					$k++;
				}
		}
	}





echo "<li class='line'>글 검색 결과</li>";
if($cnt[0]==0 && $k==0){
echo "<li>&nbsp;&nbsp; 검색결과가 없습니다.</li>";}
else{
	//ID
	for ($i=0;$i<$cnt[0];$i++)
	{
	$sql = mysql_query("select * from t_$user_id where `talk` LIKE '%$find_id%' LIMIT $i,1");
	$data = mysql_fetch_array($sql,MYSQL_NUM);
	$talknbody = explode('|||',$data[4]);

	if ($data[3]!=null){
	$photo = explode('|+|',$data[3]);
	$photo = "<img style='max-width:30;max-height:30;margin:0 10 10 0' align=middle src='".$photo[0]."'>";
	}
	echo "<li onclick=viewLetter($data[8]) class='frname' style='cursor:hand;'>{$photo}<strong>{$talknbody[0]}</strong> <font size=1>$talknbody[1] $data[9]</font></li>";}
	for ($i=0;$i<$k;$i++){
		for ($j=0;$j<$pbeachcnt[$i];$j++){
				
				$sql = mysql_query("select * from pub_$respbids[$i] where `talk` LIKE '%$find_id%' and not `id`= $user_id LIMIT $j,1");
				$data = mysql_fetch_array($sql,MYSQL_NUM);
				$talknbody = explode('|||',$data[4]);

				if ($data[3]!=null){
				$photo = explode('|+|',$data[3]);
				$photo = "<img style='max-width:30;max-height:30;margin:0 10 10 0' align=middle src='".$photo[0]."'>";
				}
				echo "<li onclick=\"viewLetter($data[8], '$respbids[$i]')\" class='frname' style='cursor:hand;'>{$photo}<strong>{$talknbody[0]}</strong> <font size=1>$talknbody[1] $data[9]</font></li>";
		
		}
	}
}
mysql_close($connect);
?>