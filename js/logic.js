// ===== INITIALIZE WHEN DOM IS READY =====
function initializePage() {
  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('mnav');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // ===== IP ADDRESS & BROWSER INFO =====
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipElement = document.getElementById('mip');
      if (ipElement) {
        ipElement.textContent = 'Browser: ' + window.navigator.userAgent + ' | IP: ' + data.ip;
      }
    })
    .catch(error => console.log('IP fetch error:', error));

  // ===== DETAILED IP DATA (Country, City, etc.) =====
  fetch('http://ip-api.com/json')
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        const countryEl = document.getElementById('country');
        const regionEl = document.getElementById('regionName');
        const cityEl = document.getElementById('city');
        const zipEl = document.getElementById('zip');
        const latEl = document.getElementById('lat');
        const lonEl = document.getElementById('lon');
        const queryEl = document.getElementById('query');
        const orgEl = document.getElementById('org');

        if (countryEl) countryEl.textContent = 'Country: ' + data.country;
        if (regionEl) regionEl.textContent = 'Region: ' + data.regionName;
        if (cityEl) cityEl.textContent = 'City: ' + data.city;
        if (zipEl) zipEl.textContent = 'Zip: ' + data.zip;
        if (latEl) latEl.textContent = 'Latitude: ' + data.lat;
        if (lonEl) lonEl.textContent = 'Longitude: ' + data.lon;
        if (queryEl) queryEl.textContent = 'IP: ' + data.query;
        if (orgEl) orgEl.textContent = 'Organization: ' + data.org;
      }
    })
    .catch(error => console.log('IP data fetch error:', error));

  // ===== DATE & TIME & INTERNET STATUS =====
  function updateDateTime() {
    const dateTimeElement = document.getElementById('mdatetime');
    if (dateTimeElement) {
      const now = new Date();
      const dateStr = now.toString();
      const status = navigator.onLine ? 'Connected' : 'Disconnected';
      dateTimeElement.textContent = dateStr + ' | Internet Status: ' + status;
    }
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
}

// Run on DOMContentLoaded or immediately if already loaded
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initializePage);
// } else {
//   initializePage();
// }
// document.getElementById('as').innerHTML = "As : "+obj.as
// }


	//$.getJSON("//ip-api.com/json", function(obj) {

// function setIpDataVisible(show) {
//   var ipTitle = document.getElementById('ipdata');
//   var ipSection = document.querySelector('.ip-block');

//   if (ipTitle) {
//     ipTitle.classList.toggle('hidden', !show);
//   }
//   if (ipSection) {
//     ipSection.classList.toggle('hidden', !show);
//   }
// }

//setIpDataVisible(false);

// $.getJSON("https://ipapi.co/json/")
//   .done(function(obj) {
//     if (obj && obj.ip) {
//       console.log(obj);
//       document.getElementById('country').innerHTML = "Country : "+obj.country_name;
//       document.getElementById('regionName').innerHTML = "RegionName  : "+obj.region;
//       document.getElementById('city').innerHTML = "City : "+obj.city;
//       document.getElementById('zip').innerHTML = "Zip : "+obj.postal;
//       document.getElementById('lat').innerHTML = "Lat : "+obj.latitude;
//       document.getElementById('lon').innerHTML = "Lon : "+obj.longitude;
//       document.getElementById('query').innerHTML = "IP : "+obj.ip;
//       document.getElementById('org').innerHTML = "Org : "+obj.org;
//       setIpDataVisible(true);
//     } else {
//       setIpDataVisible(false);
//     }
//   })
//   .fail(function() {
//     setIpDataVisible(false);
//   });
//==============================================================

//image based menu
// $(function () {
//   var bar = '';
//   bar += '<li><a href="index.html"><img class="home"></a></li>';
//   bar += '<li><a href="About.html"><img class="about"></a></li>';
//   bar += '<li><a href="Contact.html"><img class="contact"></a></li>';
//   bar += '<li><a href="https://www.youtube.com/@CppCraft" target="_blank"><img class="youtube"></a></li>';
//   bar += '<li><a href="https://github.com/shiv32" target="_blank"><img class="github"></a></li>  ';
//   bar += '<li><a href="https://www.qt.io/" target="_blank"><img class="qt"></a></li>';
//   bar += '<li><a href="https://en.cppreference.com/w/" target="_blank"><img class="cpp"></a></a></li>';
//   bar += '<li><a href="https://www.google.com" target="_blank"><img class="google"></a></li>';
//   $("#mnav").html(bar);
// });

//text based menu
$(function () {
  var bar = '';
  bar += '<li><a href="index.html"><span  class="menu-link"><b>Home</b></span></a></li>';
  bar += '<li><a href="About.html"><span  class="menu-link"><b>About</b></span></a></li>';
  bar += '<li><a href="Contact.html"><span  class="menu-link"><b>Contact</b></span></a></li>';
  bar += '<li><a href="https://www.youtube.com/@CppCraft" target="_blank"><span  class="menu-link"><b>YouTube</b></span></a></li>';
  bar += '<li><a href="https://github.com/shiv32" target="_blank"><span  class="menu-link"><b>GitHub</b></span></a></li>  ';
  //bar += '<li><a href="https://www.qt.io/" target="_blank"><span  class="menu-link"><b>Qt</b></span></a></li>';
  bar += '<li><a href="https://en.cppreference.com/w/" target="_blank"><span  class="menu-link"><b>C++</b></span></a></li>';
  bar += '<li><a href="https://www.google.com" target="_blank"><span  class="menu-link"><b>Google</b></span></a></li>';
  $("#mnav").html(bar);
});





