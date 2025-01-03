/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: bootstrap package
Version: 1.0.0
-------------------------------------------------------------------*/

$(document).ready(function(){
    $(".openMenu").click(function(){
      $(".myNav").addClass("active");
    });
    $(".hideMe").click(function(){
        $(".myNav").removeClass("active");
      });

    
  });

        $('.Testimonials_happy').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:false,
            dots:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
        // main Slider
        $(document).ready(function () {
            $('.mainslider').owlCarousel({
            items: 1,
            nav: false,
            
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
            
                },
                1000: {
                    items: 1,
            
            
                }
            }
            
            })
            })

         $(document).ready(function () {
            $('.latest').owlCarousel({
            items: 1,
            nav: false,
            
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
            
                },
                1000: {
                    items: 1,
            
            
                }
            }
            
            })
            })





            $(document).ready(function () {
                $('.travel_product_list').owlCarousel({
                nav: true,
                margin:15,
                loop: true,
                navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/icons/left_icon.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/icons/right_icon.svg'></div>"],
                autoplay: true,
                autoplayTimeout: 3000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                
                    },
                    1000: {
                        items:4,
                    }
                }               
                })
                })
        // AOS Animation
        AOS.init({
            duration: 1200,
        })

    


