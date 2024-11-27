(function ($) {
    "use strict";

    // Preloader (if the #preloader div exists)
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    var scrolltoOffset = $('#header').outerHeight() - 21;
    if (window.matchMedia("(max-width: 991px)").matches) {
        scrolltoOffset += 20;
    }
    $(document).on('click', '.main-nav a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.main-nav, .mobile-nav').length) {
                    $('.main-nav .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.main-nav, .mobile-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Mobile Navigation
    if ($('.main-nav').length) {
        var $mobile_nav = $('.main-nav').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);

// Netflify forms: https://gist.github.com/juanbrujo/c97afee62975bddc0ab9e4428a39f474
function sendFormData() {

    function postForm(form) {

        var URL = "https://docs.google.com/forms/d/19xLCeYSAt8ic1ZOSy8LGr_6hQMKYgemImvX2RLOJfGs/formResponse";
        var thanks = "Gracias, pronto te contáctaremos de vuelta.";
    
        var email = $("input#email", form).val();
        var name = $("input#nombre", form).val();
        var message = $("#message", form).val();
    
        if (email == "") {
            alert("Ingresa tu email antes de enviar el formulario.");
    
            return false;
        }
        if (!ValidateEmail(email)) return false;
        if (URL == "") {
            alert("Hubo problemas para enviar el formulario, por favor intenta más tarde,");
            return false;
        }
    
        $('.fa-inactive', form).addClass('fa-active');
        $('button[type=submit]', form).disabled = true;
        $.ajax({
            url: URL,
            data: {
                "entry.1155430950": email,
                "entry.545860963": name,
                "entry.1997542075": message
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $("#contact .form").html('<p class="nea-form-sent">' + thanks + '</p>');
                    console.warn("statusCode: 0");
                    $('button[type=submit]', form).disabled = false;
                    $('.fa-inactive', form).removeClass('fa-active');
                    // console.trace();
                },
                200: function () {
                    $("#contact .form").html('<p class="nea-form-sent">' + thanks + '</p>');
                    $('button[type=submit]', form).disabled = false;
                    $('.fa-inactive', form).removeClass('fa-active');
                    // console.trace();
                }
            }
        });
    }

    var form = document.querySelectorAll('.php-email-form')[0]
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        postForm();
    })

}
sendFormData();

function ValidateEmail(email) {
	if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
		return (true)
	}
	alert("Por favor ingresar un email válido. \'" + email + "\' no es válido.");

	return false;
}
