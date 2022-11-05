
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
		
		// Setting text of element P with id gfg
		$("#mip").html("Browser : "+ browserName+", Your IP: "+data.ip);
	})

  function myTimer() {
  document.getElementById('mdatetime').innerHTML = Date()
}

setInterval(myTimer, 1000);
