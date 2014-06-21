<?php
// 검색결과를 호출하고/파싱할 수 있는 파일은 Include 한다. 
class ApiManager {
        
        private $key = "4e91a82a85f0e174272b2d3ef39e9448"; // 사용자가 발급받은 오픈API 키 
        private $searchUrl = "http://openapi.naver.com/search"; // 오픈API 호출URL
        private $target = "local";

        /**
         * API 결과를 받아오기 위하여 오픈API 서버에 Request 를 하고 결과를 XML Object 로 반환하는 메소드
         * @return object
         */
        private function query($query)
        {
                $url = sprintf("%s?query=%s&target=%s&key=%s&display=10", $this->searchUrl, $query, $this->target, $this->key);
                $data =file_get_contents($url);
                $xml = simplexml_load_string($data);
                
                return $xml;
        }

        /**
         * API의 결과를 Array 형태로 반환하는 사용자 커스터마이징 메소드
         * XML을 직접 parsing 하여 Array형태로 변환한다  
         */
        public function getData($query)
        {
                $xml = $this->query($query);

                $result = array();
                $webkr = array();
                
                foreach($xml->channel->item as $data){

                        $result['title'] = (string)$data->title;
                        $result['description'] = (string)$data->description;
                        $result['link'] = (string)$data->link;
						$result['telephone'] = (string)$data->telephone;
						$result['address'] = (string)$data->address;
						$result['roadAddress'] = (string)$data->roadAddress;
						$result['mapx'] = (int)$data->mapx;
						$result['mapy'] = (int)$data->mapy;
                        $webkr[] = $result;
                }
                
                return $webkr;
        }
}

// 호출을 위한 ShopApiManager 객체를 초기화 한다. 
$webkr = new ApiManager();

// 검색어가 입력된 경우 호출 객체로 전달하여 결과를 가져 온다. 
        $result = $webkr->getData($_POST['query']);

?>

<?php
 // 결과를 반복문(foreach)를 사용하여 페이지에 표현한다. 
 $id=0;
 foreach ($result as $data){
 $id++;
 $ida = "id$$".$id;
?>


      <div class=moviewrap id=<?echo $ida?> onclick="moveToWrite('<?echo $ida?>')">
	  	  <div class=removethis onclick=removeID('<?echo $ida?>')></div>

		<div class=moviewords>
		<div id ="map<?echo "place{$data['mapx']}{$data['mapy']}";?>" class=map></div>
		<center><a class=movielink href="wall.html?id=<?echo "place{$data['mapx']}{$data['mapy']}";?>&name=<?php echo $data['title'];?>" target="_blank"><?php echo $data['title'];?></a><br>
		<?php
		if ($data['description']){
		echo "{$data['description']}<br>";}
		if ($data['telephone']){
		echo "{$data['telephone']}<br>";}
		?></center>
		</div>

		
		
		           <div id=removescript> <script type="text/javascript">
                        var oPoint = new nhn.api.map.TM128(<?echo $data['mapx']?>, <?echo $data['mapy']?>);
						//var width = $(window).width()*0.6;
                        nhn.api.map.setDefaultPoint('TM128');
                        oMap = new nhn.api.map.Map('map<?echo "place{$data['mapx']}{$data['mapy']}";?>' ,{
                                                point : oPoint,
                                                zoom : 10,
                                                enableWheelZoom : true,
                                                enableDragPan : true,
                                                enableDblClickZoom : true,
                                                mapMode : 0,
                                                activateTrafficMap : false,
                                                activateBicycleMap : false,
                                                minMaxLevel : [ 1, 14 ],
                                        });
						var oSize = new nhn.api.map.Size(28, 37);
                        var oOffset = new nhn.api.map.Size(14, 37);
                        var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);	
							
				        var oMarker = new nhn.api.map.Marker(oIcon, { title : '낙서하기' });
                                oMarker.setPoint(oPoint);
                                oMap.addOverlay(oMarker);
								
                        var oLabel = new nhn.api.map.MarkerLabel(); // - 마커 라벨 선언.
                        oMap.addOverlay(oLabel); // - 마커 라벨 지도에 추가. 기본은 라벨이 보이지 않는 상태로 추가됨.
						
                        /*var mapZoom = new nhn.api.map.ZoomControl(); // - 줌 컨트롤 선언
                        mapZoom.setPosition({left:20, bottom:20}); // - 줌 컨트롤 위치 지정
                        oMap.addControl(mapZoom); // - 줌 컨트롤 추가.	*/					
						
						oMarker.attach("click",clickEvent);
						//oMarker.attach("mouseenter",clickEvent); 호버이벤트
						//oMarker.attach("mouseleave",clickEvent); 

						
								
								
								function clickEvent(){
								
								location.replace('wall.html?id=<?echo "place{$data['mapx']}{$data['mapy']}";?>&name=<?php echo $data['title'];?>');
								
								}
                </script></div>
		
		
		
      </div>

                        <?php } ?>
						