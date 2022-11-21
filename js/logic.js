
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


	$.getJSON("http://ip-api.com/json", function(obj) {
		
		console.log(obj)
		
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
	})
//==============================================================





