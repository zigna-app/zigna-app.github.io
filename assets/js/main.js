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
        $('.header-tools').append('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a, .tool-list .drop-down > a', function (e) {
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

    // Theme Toggle Logic
    $(document).ready(function () {
        const themeToggle = $('.theme-toggle');
        const iconMoon = themeToggle.find('.theme-icon-moon');
        const iconSun = themeToggle.find('.theme-icon-sun');
        const logoImg = $('.logo img');
        const currentTheme = localStorage.getItem('theme');

        // Path detection for logo
        const currentSrc = logoImg.attr('src');
        const basePath = currentSrc ? currentSrc.substring(0, currentSrc.lastIndexOf('/')) : '';

        function setTheme(theme) {
            if (theme === 'light') {
                $('body').addClass('light-mode');
                iconSun.hide();
                iconMoon.show();
                if (logoImg.length) logoImg.attr('src', basePath + '/logo-light.svg');
            } else {
                $('body').removeClass('light-mode');
                iconMoon.hide();
                iconSun.show();
                if (logoImg.length) logoImg.attr('src', basePath + '/logo-dark.svg');
            }
        }

        if (currentTheme === 'light') {
            setTheme('light');
        }

        $(document).on('click', '.theme-toggle', function (e) {
            e.preventDefault();
            const isLight = $('body').hasClass('light-mode');
            const newTheme = isLight ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });

})(jQuery);

// Netflify forms: https://gist.github.com/juanbrujo/c97afee62975bddc0ab9e4428a39f474
function sendFormData() {
    window.recaptchaWidgetId = null;

    function restoreButtonState(form) {
        var button = $('button[type=submit]', form);
        button.prop('disabled', false);
        $('.fa-inactive', form).removeClass('fa-active');

        if (typeof grecaptcha !== 'undefined' && window.recaptchaWidgetId !== null) {
            try {
                grecaptcha.reset(window.recaptchaWidgetId);
            } catch (e) {
                console.error("reCAPTCHA reset error", e);
            }
        }
    }

    function postForm(form) {
        var URL = "https://docs.google.com/forms/d/19xLCeYSAt8ic1ZOSy8LGr_6hQMKYgemImvX2RLOJfGs/formResponse";
        var thanks = window.I18N.thanks;

        var email = $("input#email", form).val();
        var name = $("input#nombre", form).val();
        var messageInput = $("#message", form).val();
        const source = "zigna.app";
        var href = window.location.href;
        var lang = window.I18N.lang || "en";

        if (email == "") {
            alert(window.I18N.emailError);
            restoreButtonState(form);
            return false;
        }
        if (!ValidateEmail(email)) {
            restoreButtonState(form);
            return false;
        }
        if (URL == "") {
            alert(window.I18N.formError);
            restoreButtonState(form);
            return false;
        }

        var message = `
            ${messageInput}
            <br><hr>---
            <p><b>Reference</b>: ${href}</p>
            <p><b>Source</b>: ${source}</p>
            <p><b>Language</b>: ${lang}</p>
        `;

        $('.fa-inactive', form).addClass('fa-active');
        $('button[type=submit]', form).prop('disabled', true);

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
                },
                200: function () {
                    $("#contact .form").html('<p class="nea-form-sent">' + thanks + '</p>');
                }
            },
            error: function () {
                restoreButtonState(form);
            }
        });
    }

    $('.php-email-form').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        var $form = $(form);
        var sitekey = $form.data('recaptcha-sitekey');

        if (sitekey && typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(function () {
                try {
                    if (window.recaptchaWidgetId === null) {
                        window.recaptchaWidgetId = grecaptcha.render('recaptcha-container', {
                            'sitekey': sitekey,
                            'size': 'invisible',
                            'callback': function (token) {
                                $('#g-recaptcha-response', form).val(token);
                                postForm(form);
                            },
                            'error-callback': function () {
                                restoreButtonState(form);
                                alert('reCAPTCHA verification failed.');
                            }
                        });
                    }
                    grecaptcha.execute(window.recaptchaWidgetId);
                } catch (error) {
                    console.error('reCAPTCHA error', error);
                    postForm(form);
                }
            });
        } else {
            postForm(form);
        }
    });

}
sendFormData();

function ValidateEmail(email) {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return (true)
    }
    alert(window.I18N.emailError + " '" + email + "'");

    return false;
}
