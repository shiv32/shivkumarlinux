
    //for browser name
  var browserName = (function (agent) {        switch (true) {
            case agent.indexOf("edge") > -1: return "MS Edge";
            case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
            case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
            case agent.indexOf("trident") > -1: return "MS IE";
            case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
            case agent.indexOf("safari") > -1: return "Safari";
            default: return "other";
        }
    })(window.navigator.userAgent.toLowerCase());
    
    //for IP Address
    	$.getJSON("https://api.ipify.org?format=json", function(data) {
		//$("#mip").html("Browser : "+ browserName+", Your IP : "+data.ip);
		$("#mip").html("Browser : "+ window.navigator.userAgent+", Your IP : "+data.ip);
    $.get("header.html", function (data) {
      $("#navigation").replaceWith(data);
    });
	})

  function myTimer() {
  //document.getElementById('mdatetime').innerHTML = Date()
   if(navigator.onLine){
             document.getElementById('mdatetime').innerHTML = Date()+", Internate Status : Connected"   	  
    } else {
    	     document.getElementById('mdatetime').innerHTML = Date()+", Internate Status : Disconnected"
    }
}

setInterval(myTimer, 1000);

//========================= IP Data=====================================
/*const http = new XMLHttpRequest()

http.open("GET", "http://ip-api.com/json")
http.send()

http.onload = function() {  
  const obj = JSON.parse(http.responseText);
 //console.log(obj)
document.getElementById('country').innerHTML = "Country : "+obj.country
document.getElementById('regionName').innerHTML = "RegionName  : "+obj.regionName
document.getElementById('city').innerHTML = "City : "+obj.city
document.getElementById('zip').innerHTML = "Zip : "+obj.zip
document.getElementById('lat').innerHTML = "Lat : "+obj.lat
document.getElementById('lon').innerHTML = "Lon : "+obj.lon
document.getElementById('query').innerHTML = "IP : "+obj.query
document.getElementById('isp').innerHTML = "Isp : "+obj.isp
document.getElementById('org').innerHTML = "Org : "+obj.org
document.getElementById('as').innerHTML = "As : "+obj.as
}*/


	//$.getJSON("//ip-api.com/json", function(obj) {

$.getJSON("https://ipapi.co/json/", function(obj) {
		
		console.log(obj)
		/*
document.getElementById('country').innerHTML = "Country : "+obj.country
document.getElementById('regionName').innerHTML = "RegionName  : "+obj.regionName
document.getElementById('city').innerHTML = "City : "+obj.city
document.getElementById('zip').innerHTML = "Zip : "+obj.zip
document.getElementById('lat').innerHTML = "Lat : "+obj.lat
document.getElementById('lon').innerHTML = "Lon : "+obj.lon
document.getElementById('query').innerHTML = "IP : "+obj.query
document.getElementById('isp').innerHTML = "Isp : "+obj.isp
document.getElementById('org').innerHTML = "Org : "+obj.org
document.getElementById('as').innerHTML = "As : "+obj.as
*/
	
document.getElementById('country').innerHTML = "Country : "+obj.country_name
document.getElementById('regionName').innerHTML = "RegionName  : "+obj.region
document.getElementById('city').innerHTML = "City : "+obj.city
document.getElementById('zip').innerHTML = "Zip : "+obj.postal
document.getElementById('lat').innerHTML = "Lat : "+obj.latitude
document.getElementById('lon').innerHTML = "Lon : "+obj.longitude
document.getElementById('query').innerHTML = "IP : "+obj.ip
document.getElementById('org').innerHTML = "Org : "+obj.org
	
	})
//==============================================================


$(function () {
  var bar = '';
  bar += '<li><a href="index.html">Home</a></li>';
  bar += '<li><a href="About.html">About</a></li>';
  bar += '<li><a href="Contact.html">Contact</a></li>';
  bar += '<li><a href="https://www.youtube.com/@ShivMLinux" target="_blank">YouTube</a></li>';
  bar += '<li><a href="https://github.com/shiv32" target="_blank">GitHub</a></li>  ';
  bar += '<li><a href="https://www.qt.io/" target="_blank">Qt</a></li>';
  bar += '<li><a href="https://en.cppreference.com/w/" target="_blank">Cppreference</a></li>';
  bar += '<li><a href="http://www.google.com" target="_blank"><span  style="font-size:20px; color:#FFFFFF">G</span></a></li>';
  $("#mnav").html(bar);
});
