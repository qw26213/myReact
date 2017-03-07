//-------判断是否为空
function isNull(value) {
	if(value.replace(/(^s*)|(s*$)/g, "") == ""|| value=="null"||value==""||value==undefined||value==null){
		return true;
	}else{
		return false;
	}
}
//----------获取url参数值-----------	
function getQueryString(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	 var r = window.location.search.substr(1).match(reg);
	 return  r != null ? unescape(r[2]) : null;
}

//-----判断手机号--------
function telCheck(mobile){
    var myreg = /^(((12[0-9]{1})|(13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
        return false;
    }
        return true;
}
//----------邮箱验证---------
function email_check(r){
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!pattern.test(r)) {
        return false;
    }
    else {
        return true;
    }
}
//----------判断邮编---------
function postCode_check(number){
    var re=  /^[0-9][0-9]{5}$/;
    if(!re.test(number)){
        return false;
    }else{
        return true;
    }
}
// ----------打开连接----------
function openHref(str){
	window.location.href = str;
}
// ----------返回上一页----------
function back(){
  window.history.go(-1);
}
// ----------稍候返回上一页----------
function wait_back(){
  setTimeout(function(){
    window.history.go(-1);
  },1800)
}
// ----------去除空格----------
function trim(str) {
  return str.replace(/(^\s+)|(\s+$)/g, "");
}
// ----------去除连接符----------
function delLinkMark(str){
  return str.replace(/-/g,""); 
}
//----------调试log--------
function log(str){
	console.log(str);
}
//----------取消冒泡--------
function stopProp(e) {
	if (e.stopPropagation)
	e.stopPropagation();
	else
	e.cancelBubble = true;
}
//-----------刷新本页面----------
function refresh(){
	document.location.reload();
}
//------------验证数字(整数、浮点数都可以通过)----------
function isFloat(oNum){
     if(!oNum) return false;
     var strP=/^\d+(\.\d+)?$/;
     if(!strP.test(oNum)) return false;
     try{
      if(parseFloat(oNum)!=oNum) return false;
     }catch(ex){
       return false;
     }
     return true;
}
//-----------数字验证----------
function isNumber(str){
	var retel = /^[\d]+$/;
	if(retel.test(str)){
	        return true;
	}else{
	        return false;
	}
}
// -----------是否是中文---------
function isZh(str){
    if(/^[\u4e00-\u9fa5]+$/i.test(str)){
            return true;
    }else{
            return false;
    }
}
// 去除数组空元素
 function ClearNullArr(arr){
    var len=arr.length;
    for(var i=0;i<len;i++){
    if(!arr[i]||arr[i]==''||arr[i] == undefined){
	    arr.splice(i,1);
	    len--;
	    i--;
	 }
    }
    return arr;
}

// 去除数组重复元素
function uniqueArr(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

// 原生js获取id对象
function $$(id){
	return document.getElementById(id);
}

/*是否含数字*/
function hasNum(str) {
    reg = /[0-9]/g;
    return reg.test(str)
}
//是否含字母
function isEng(str) {
    reg = /^[A-Za-z]+$/;
    return reg.test(str)
}
//是否是字符串
function IsString(str){
           return (typeof str == "string" || str.constructor == String);
}

//获取当前日期
function getNowDay(){
    var d = new Date();
    var str1 = d.getFullYear()
    var str2 = d.getMonth() + 1;
    var str3 = d.getDate();
    if(str2<10){
        str2 = '0'+str2;
    }
    return str1+'-'+str2+'-'+str3;
}

//获取当前时间
function getNowTime(){
    var d = new Date();
    var str1 = d.getHours();
    var str2 = d.getMinutes();
    var str3 = d.getSeconds();
    str1 = parseInt(str1)
    str2 = parseInt(str2)
    str3 = parseInt(str3)
    if(str1<10){
        str1 = '0'+str1;
    }
    if(str2<10){
        str2 = '0'+str2;
    }
    if(str3<10){
        str3 = '0'+str3;
    }
    return str1+':'+str2+':'+str3;
}

/*******返回月剩几天*********/
function getCountDays() {
        var curDate = new Date();
        var curMonth = curDate.getMonth();
       curDate.setMonth(curMonth + 1);
       var curDay = curDate.getDate();
       curDate.setDate(0);
       return parseInt(curDate.getDate()) - parseInt(curDay);
}

//根据2000-00-00 00:00:00类型获取时间戳
function stampify(str){
    var timestamp = Date.parse(new Date(str));
     return timestamp;
}

//****获取当前时间返回20151102格式日期
function getCurDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear()+"" + month+""+ strDate;
    return currentdate;
}

// 根据时间戳格式化日期
function add0(m){return m<10?'0'+m:m }
function formatDate(stortime){
    if(stortime==undefined){
        return "0000-00-00";
    }else{
    var time = new Date(stortime);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    return y+'-'+add0(m)+'-'+add0(d);
    }
}

// 取随机数
function RndNum(MaxNum, MinNum) {
    return parseInt((MaxNum - MinNum + 1) * Math.random() + MinNum)
}


// 开启loading页
function Loading(){
    var loadingHtml = '<div class="loadingbox"><div class="loading_icon"></div><p>加载中...</p></div>';
    $$('loadinger').style.display = "block";
    $$('loadinger').innerHTML = loadingHtml;
}
// 关闭loading页
function closeLoading(){
    $$('loadinger').style.display = "";
    $$('loadinger').innerHTML = "";
}
// -------提示框------
function textTip(text){
    $$("textTips").getElementsByTagName('span')[0].innerText = text;
    $$("textTips").style.display="block";
    setTimeout(function(){
        $$("textTips").style.display="none";
    },1500);
}
