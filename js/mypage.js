$(document).ready(function(){
  
$( '.sec-6  #owl-new').owlCarousel({
  items: 5,
  loop: true,
  nav: true,
  margin: 20,

  responsive: {
      0: {
          dotsEach: 5,
          items: 1
      },
      600: {
          dotsEach: 3,
          items: 1
      },
      1200: {
          dotsEach: 2,
          items: 5
      }
  }
})

  $('#owl-new').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    margin: 20,
  
    responsive: {
        0: {
            dotsEach: 4,
            items: 1
        },
        600: {
            dotsEach: 3,
            items: 1
        },
        1200: {
            dotsEach: 2,
            items: 4
        }
    }
})

$( '.sec-8 #owl-new').owlCarousel({
  items: 4,
  loop: true,
  nav: true,
  margin: 20,

  responsive: {
      0: {
          dotsEach: 4,
          items: 1
      },
      600: {
          dotsEach: 3,
          items: 1
      },
      1200: {
          dotsEach: 3,
          items: 4
      }
  }
})
  
$( '.sec-6  #owl-new').owlCarousel({
  items: 5,
  loop: true,
  nav: true,
  margin: 20,

  responsive: {
      0: {
          dotsEach: 5,
          items: 1
      },
      600: {
          dotsEach: 3,
          items: 1
      },
      1200: {
          dotsEach: 3,
          items: 5
      }
  }
})


    $(".navbar-header .collapsed").click(function(){
        $(this).css({
            "background-color":"#fff",
              "border":"3px solid #000",
              "border-radius":"10%",

              "color":"rgba(0, 0, 0, 0.5)"

            })

    })
   $(window).scroll(function(){
     console.log( $(window).scrollTop());
      if( $(this).scrollTop()>200){
        
        $(".navbar").css({
         "background-color":"#fff",
         "margin-top":"0",
         "box-shadow": "0 10px 59px -27px black"

        })
        $(".navbar-light .navbar-nav .nav-link .nav-link").css({
          "color":"black"
        })
        
        $(".navbar-light .navbar-nav .active .nav-link").css({
          "color":"#ff5f5f"
        })
       
        $(".navbar .con .navbar-brand").css({
          "color":"black"
        })
      }else{
        
        $(".navbar").css({
          "background":"none",
          "box-shadow":"none"
      })
    
      $(".navbar-light .navbar-nav .nav-link .nav-link").css({
        "color":"#f0f0f0"
      })
      
      $(".navbar-light .navbar-nav .active .nav-link").css({
        "color":"gray"
      })
     
      $(".navbar .con .navbar-brand").css({
        "color":"#fff"
      })
      }
      })
      $('.video').magnificPopup({
        type: 'iframe',
        
        
        iframe: {
          patterns: {
            dailymotion: {
             
              index: 'dailymotion.com',
              
              id: function(url) {        
                  var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                  if (m !== null) {
                      if(m[4] !== undefined) {
                        
                          return m[4];
                      }
                      return m[2];
                  }
                  return null;
              },
              
              src:'https://vimeo.com/45830194 '
              
            }
          }
        }
        
        
      });
  
})

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

new WOW().init();
