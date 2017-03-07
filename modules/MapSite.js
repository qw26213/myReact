import React from 'react'
import $ from 'jquery'

export default React.createClass({
   getInitialState(){
        return { }
   },
   componentDidMount() {
     document.title = "网点导航";document.getElementById('pageTit').innerText = "网点导航";
       var map = new AMap.Map('Mapcontainer', {
            resizeEnable: true,
            center:[28.243662, 117.035544],
            zoom: 15,
            doubleClickZoom:false
        });    
        // setMap();
        function setMap(){
            AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
                var toolBar = new AMap.ToolBar();
                var scale = new AMap.Scale();
                map.addControl(toolBar);
                map.addControl(scale);
            });
        }
        var locs = [[117.035544,28.243662],[117.060223,28.274636]];
        var locText = ['鹰潭市供水营业大厅', '鹰潭市供水有限公司'];
        var locDesc = [{title:"鹰潭市供水营业大厅",address:"鹰潭市银座广场北区一层146号",tel:"0701-6257921"},{title:"鹰潭市供水有限公司",address:"鹰潭市信江区恒大绿洲旁",tel:"0701-6221620"}]
        var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        for (var i = 0, marker; i < locs.length; i++) {
            var marker = new AMap.Marker({
                position: locs[i],
                map: map
            });
            marker.content = locText[i];
            marker.desc = locDesc[i];
            marker.on('click', markerClick);
        }
        function markerClick(e) {
            infoWindow.setContent(e.target.content);
            infoWindow.open(map, e.target.getPosition());
            $('.markerInfo').show().html('<p>'+e.target.desc.title+'</p><p>'+e.target.desc.address+'</p><p>'+e.target.desc.tel+'</p>')
        }
        map.setFitView();
  },
  render() {
    return (
            <div classNameName="mt05 btc">
                   <div id="Mapcontainer"></div>
                    <div className="h90 ptb05 markerInfo uhide">
                        <div className="marker_title"></div>
                        <div className="marker_addre"></div>
                        <div className="marker_tel"></div>
                    </div>
            </div>
    );
  }
})
