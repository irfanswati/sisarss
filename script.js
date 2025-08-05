document.addEventListener('DOMContentLoaded', function() {
    // Function to animate counters
    function animateCounters() {
        const skillItems = document.querySelectorAll('.single_skill .progress');
        
        skillItems.forEach(item => {
            const targetValue = item.getAttribute('data-value');
            const progressBar = item.querySelector('.progress-bar');
            const counter = item.querySelector('.counter');
            const progressPercent = item.querySelector('.progress_parcent');
            
            // Set initial values
            counter.textContent = '0';
            
            // Animate progress bar
            progressBar.style.width = targetValue + '%';
            
            // Add class to show percentage
            item.classList.add('animated');
            
            // Animate counter
            let current = 0;
            const increment = targetValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                    clearInterval(timer);
                    current = targetValue;
                }
                counter.textContent = Math.floor(current);
            }, 20);
        });
    }
    
    // Initialize animation when element is in viewport
    const skillSection = document.querySelector('.company_skill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillSection) {
        observer.observe(skillSection);
    }
});








// circuller//
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.circle_progress').forEach(element => {
    const canvas = element.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const percent = parseFloat(element.dataset.percentage);
    const size = 175;
    const thickness = 5;
    const radius = (size / 2) - thickness;
    const center = size / 2;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    // Background circle
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = thickness;
    ctx.stroke();

    // Gradient for foreground
    const gradient = ctx.createLinearGradient(0, 0, size, 0);
    gradient.addColorStop(0, '#987dff');
    gradient.addColorStop(1, '#7acaff');

    // Progress arc
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (2 * Math.PI * percent / 100);

    ctx.beginPath();
    ctx.arc(center, center, radius, startAngle, endAngle);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Dot position
    const dot = element.querySelector('.percentage');
    const angle = endAngle;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
  });
});




 // Initialize Bootstrap collapse
        var collapses = document.querySelectorAll('.collapse');
        collapses.forEach(function(collapse) {
            collapse.addEventListener('show.bs.collapse', function() {
                this.parentElement.querySelector('.card-header h5 a').setAttribute('aria-expanded', 'true');
            });
            collapse.addEventListener('hide.bs.collapse', function() {
                this.parentElement.querySelector('.card-header h5 a').setAttribute('aria-expanded', 'false');
            });
        });















           
      function initMap() {
    // Map coordinates
    var myLatLng = {lat: 40.701083, lng: -74.1522848};
    
    // Create map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });
    
    // Add marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Columbia Container'
    });
    
    // Add info window
    var infowindow = new google.maps.InfoWindow({
        content: '<div style="width:200px;"><strong>Columbia Container</strong><br>333-379 Marsh St<br>Newark, NJ 07114</div>'
    });
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

// Load the map API
function loadMapScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

// Load the map when the page loads
window.onload = loadMapScript;




// circular









document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.new_circle_progress').forEach(element => {
    const canvas = element.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const percent = parseFloat(element.dataset.percentage);
    const size = 175;
    const thickness = 5;
    const radius = (size / 2) - thickness;
    const center = size / 2;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    // Background circle
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = thickness;
    ctx.stroke();

    // Gradient for foreground
    const gradient = ctx.createLinearGradient(0, 0, size, 0);
    gradient.addColorStop(0, '#987dff');
    gradient.addColorStop(1, '#7acaff');

    // Progress arc
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (2 * Math.PI * percent / 100);

    ctx.beginPath();
    ctx.arc(center, center, radius, startAngle, endAngle);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Dot position
    const dot = element.querySelector('.new_percentage');
    const angle = endAngle;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
  });
});








document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (el) => {
    const target = +el.innerText;
    let count = 0;
    const speed = 200;

    const update = () => {
      const step = Math.ceil(target / speed);
      if (count < target) {
        count += step;
        el.innerText = count > target ? target : count;
        requestAnimationFrame(update);
      } else {
        el.innerText = target;
      }
    };

    update();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });

  counters.forEach(counter => observer.observe(counter));
});



