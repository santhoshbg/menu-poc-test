$(document).ready(function() {

    // ThingsToDo url link appending for device with resize
    $(window).resize(function() {
        if ($(window).width() <= 768) {
            $(".thingsrow .float-right").appendTo(".mobiletag-see-all-ThingsToDo");

        } else if ($(window).width() > 768) {
            $(".mobiletag-see-all-ThingsToDo .float-right").appendTo(".thingstodo .thingsrow");
        }
    });

    if ($(window).width() <= 768) {
        $(".thingsrow .float-right").appendTo(".mobiletag-see-all-ThingsToDo");

    } else if ($(window).width() > 768) {
        $(".mobiletag-see-all-ThingsToDo .float-right").appendTo(".thingstodo .thingsrow");
    }

    //   plus dropdown-toggle
    $('.mobile-plus').click(function(e) {
        e.preventDefault();
        if ($(this).parent().hasClass("open")) {
            $(this).parent().removeClass('open');
            $(this).attr('aria-expanded', false);
        } else {
            $(this).parent().addClass('open');
            $(this).attr('aria-expanded', true);
        }
        e.stopPropagation();
    });

    // signup start

    var validateEmail = function(elementValue) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }
    $(document).on('focusout', "#email", function() {
        if ($("#email").val() != '') {
            $("#email").prop('required', false);
        }
        $(".email-error, .error-node").hide();
    });
    $(document).on('focusout', "#firstname", function() {
        if ($("#firstname").val() != '') {
            $("#firstname").prop('required', false);
        }
        $(".error-fname").hide();
    });
    $(document).on('focusout', "#lastname", function() {
        if ($("#lastname").val() != '') {
            $("#lastname").prop('required', false);
        }
        $(".error-lname").hide();
    });

    $("select#countries").on('change', function() {
        if ($("#countries").val() != '') {
            $("#countries").prop('required', false);
            $("button.app-selectpicker-button").removeClass('red-border');
        }
        $(".error-country").hide();
    });

    // for select
    // $(document).on('focusout, keyup, keydown, mouseup, mousedown', ".app-selectpicker-button", function() {
    //     // alert('app-selectpicker_container');
    //     if ($(".app-selectpicker_container").val() != '') {
    //         $(".app-selectpicker_container").prop('required', false);
    //     }
    //     $(".error-country").hide();
    // });



    $("#signup-button").click(function() {
        var isValid = true;
        var inputs = $("#email, #firstname, #lastname, #datepicker-dateofbirth, #countries");
        var value = $('#email').val();
        var valid = validateEmail(value);
        // if((!valid) && $.trim($("#email").val()).length != 0) {
        //         $('.sign-up-form-wrapper .app-form-control .error-node').hide();
        //     $('.sign-up-form-wrapper .app-form-control .email-error').show();
        //     isValid = false;
        // }
        // else {
        //     $('sign-up-form-wrapper .app-form-control .error-node, .sign-up-form-wrapper .app-form-control .email-error').hide();
        //     isValid = true;
        // }
        $(inputs).each(function() {
            var element = $(this);
            if (element.val() == "" || element.val() == null || element.val() == "undefined") {
                $(element).prop('required', true);
                isValid = false;
            }

        });
        if ($("#countries").val() == null) {
            $("button.app-selectpicker-button").addClass('red-border');
        }
        if ($("#email").val() == '') {
            $("#email").prop('required', true);
            $(".error-node").show();
            isValid = false;
            $('html,body').animate({
                scrollTop: $("#email").offset().top - 120 + 'px'
            });
        }
        if ((!valid) && $.trim($("#email").val()).length != 0) {
            $('.sign-up-form-wrapper .app-form-control .error-node').hide();
            $('.sign-up-form-wrapper .app-form-control .email-error').show();
            isValid = false;
            $('html,body').animate({
                scrollTop: $("#email").offset().top - 120 + 'px'
            });
        }
        if ($("#email").val() != '' && (valid) && $("#firstname").val() == '') {
            $(".email-error, .error-node").hide();
            $(".error-fname").show();
            $("#email").prop('required', false);
            $("#firstname").prop('required', true);
            isValid = false;
            $('html,body').animate({
                scrollTop: $("#firstname").offset().top - 120 + 'px'
            });
        }
        if ($("#email").val() != '' && (valid) && $("#firstname").val() != '' && $("#lastname").val() == '') {
            $(".email-error, .error-node, .error-fname").hide();
            $(".error-lname").show();
            $("#email, #firstname").prop('required', false);
            $("#lastname").prop('required', true);
            isValid = false;
            $('html,body').animate({
                scrollTop: $("#lastname").offset().top - 120 + 'px'
            });
        }
        if ($("#email").val() != '' && (valid) && $("#firstname").val() != '' && $("#lastname").val() != '' && $("#datepicker-dateofbirth").val() == '') {
            $(".email-error, .error-node, .error-fname, .error-lname").hide();
            $(".error-dob").show();
            $("#email, #firstname, #lastname").prop('required', false);
            $("#datepicker-dateofbirth").prop('required', true);
            isValid = false;
            $('html,body').animate({
                scrollTop: $("#datepicker-dateofbirth").offset().top - 120 + 'px'
            });
        }
        if ($("#email").val() != '' && (valid) && $("#firstname").val() != '' && $("#lastname").val() != '' && $("#datepicker-dateofbirth").val() != '' && $("#countries").val() == null) {
            $(".email-error, .error-node, .error-fname, .error-lname, .error-dob").hide();
            $(".error-country").show();
            $("#email, #firstname, #lastname, #datepicker-dateofbirth").prop('required', false);
            $("#countries").prop('required', true);
            $("button.app-selectpicker-button").addClass('red-border');
            isValid = false;
            $('html,body').animate({
                scrollTop: $("button.app-selectpicker-button").offset().top - 120 + 'px'
            });
        }

        if ($("#email").val() != '' && (valid) && $("#firstname").val() != '' && $("#lastname").val() != '' && $("#datepicker-dateofbirth").val() != '' && $("#countries").val() != '' && $("#countries").val() != null) {
            //$('.app-form').hide();
            //$(".success-msg").show();
            // $('form.app-form').trigger("reset");
            return true;
        }
        return isValid;

    });


    // $('#signup-button').click(function(){
    //     // alert('btn clicked');
    //     //check if empty
    //     if (
    //         $('#email').val() === "" ||
    //         $('#firstname').val() === "" ||
    //         $('#lastname').val() === "" ||
    //         $('#datepicker').val() === "" ||
    //         $('#countries').val() === ""
    //     ) {
    //         alert("Please fill in all the requried field");
    //         //return false;
    //     }

    //     // var submit = true;
    //     $("#signupform .app-form-control").each(function(){

    //             if($(this).find('.validation-field') == '') {
    //                 console.log(this);
    //                     $(this).addClass('.error-node');
    //                     // submit = false;
    //                     return false;
    //             }else {
    //                     $(this).removeClass('error-node');
    //             }
    //     });

    //     // check email
    //     var emailPattern = /^[a-zA-Z0-9-_+]+@[a-zA-Z0-9-_]+\.[a-zA-Z.]+$/;
    //     if ($('#email').val().match(emailPattern) === null) {
    //         $(this).addClass('.error-node');
    //         alert("Wrong email format");
    //         return false;
    //     }


    // });
    // signup end

    //Gallery Sections

    $('.property-collection-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10
    });

    $('.hotel-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10
    });

    // $('.property-collection-carousel').owlCarousel({
    //     items: 1,
    //     nav: true,
    //     loop: true,
    //     margin: 10
    // });

    $('.amenities-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    var owlcarouselamenities = $('.amenities-carousel-sub').owlCarousel({
        nav: true,
        loop: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            1000: {
                items: 6,
                nav: true
            }
        }
    });
    owlcarouselamenities.on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = (event.item.index + 1) * event.page.size;

        if (event.item.index == 0) {
            $('.amenities-carousel-sub .owl-nav .owl-next').show();
            $('.amenities-carousel-sub .owl-nav .owl-prev').hide();
        } else if (item >= items) {
            $('.amenities-carousel-sub .owl-nav .owl-next').hide();
            $('.amenities-carousel-sub .owl-nav .owl-prev').show();
        } else {
            $('.amenities-carousel-sub .owl-nav .owl-next').show();
            $('.amenities-carousel-sub .owl-nav .owl-prev').show();
        }
    });


    $('.deals-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    // Rooming Listing
    $('.room-listing-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
    $('.live-likelocal-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10
    });

    $('.gallery-next-prev .lSPrev').click(function() {
        $('.lSSlideWrapper .lSPrev').click();
    });

    $('.gallery-next-prev .lSNext').click(function() {
        $('.lSSlideWrapper .lSNext').click();
    });

    $('.gallery-next-prev .lSPrev').hover(function() {
        setTimeout(function() {
            $('.lSSlideWrapper .lSPrev').click();
        }, 1000);
    });

    $('.gallery-next-prev .lSNext').hover(function() {
        setTimeout(function() {
            $('.lSSlideWrapper .lSNext').click();
        }, 1000);
    });

    $('.viewGallery').click(function() {
        $('.image-gallery-compinent').css({ 'opacity': '1', 'z-index': '999' });
    });
    $('.location-info').click(function() {
        $('.locationinfo-overlay').css({ 'opacity': '1', 'z-index': '999' });
        $('.locationinfo-overlay').show();
        $('.location-info-wrapper').show();
        $('#submenu-selec ul').toggle("slow");
        $("body").addClass("noscroll");
        $("html").addClass("noscroll");
    });

    // dropdown menu Hover script
    $(".desktop .dropdown").hover(
        function() {
            if (!$(this).hasClass('open')) {
                $(this).find(".dropdown-menu").show();
                $(this).addClass('open');
            }
        },
        function() {
            if ($(this).hasClass("open")) {
                $(this).find(".dropdown-menu").hide();
                $(this).removeClass('open');
            }
        }
    );

    // dropdown menu Click script
    $(document).on('click', '.dropdown.mega-dropdown .caret', function(e) {
        if (!$(this).parent().parent().hasClass('open')) {
            $(this).parent().parent().find(".dropdown-menu").show();
            $(this).parent().parent().addClass('open');
        } else {
            $(this).parent().parent().find(".dropdown-menu").hide();
            $(this).parent().parent().removeClass('open');
        }

        e.stopPropagation();
    });


    $(document).on('click', '.extra-off', function() {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $(this).animate({ 'width': '72px' });
        } else {
            $(this).addClass('opened');
            $(this).animate({ 'width': '361px' });
        }

    });

    $(window).scroll(function() {
        if ($('.extra-off').hasClass('opened')) {
            $('.extra-off').removeClass('opened');
            $('.extra-off').animate({ 'width': '72px' });
        }
    });


    $("#hotels .hotel-content-hide").addClass('hotel-section');
    $("#hotels .collapse-expand").click(function() {
        if ($("#hotels .collapse-expand").hasClass('collapse-collapse-img')) {
            $(this).removeClass("collapse-collapse-img");
            $("#hotels .hotel-section").addClass("hotel-content-hide");
        } else {
            $("#hotels .hotel-section").removeClass("hotel-content-hide");
            $(this).addClass("collapse-collapse-img");
        }
    });

    $("#residences .hotel-content-hide").addClass('flag');
    $("#residences .collapse-expand").click(function() {
        if ($("#residences .collapse-expand").hasClass('flag-remove')) {
            $(this).removeClass("flag-remove");
            $("#residences .flag").addClass("hotel-content-hide");
            $(this).addClass("collapse-collapse-img-two");
        } else {
            $("#residences .flag").removeClass("hotel-content-hide");
            $(this).addClass("flag-remove");
        }
    });

    // scroll
    // $('#submenu-selec ul li a:first-child').addClass('active');
    $("#stickyheader ul li a").first().addClass("active");

    $(document).on('click', '#stickyheader a', function(e) {
        // $('#stickyheader a[data-href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        //var target = this.hash,
        //    $target = $(target);

        //$target = $(target);
        var target = $(this).attr('data-href');

        $('#submenu-selec ul li a').removeClass('active');
        $('#stickyheader a').removeClass('active');
        $('#stickyheader a[data-href^="' + target + '"]').addClass('active');
        $('#submenu-selec ul li a[data-href^="' + target + '"]').addClass('active');

        var activeSubnav = $('#submenu-selec a.active').text();
        $('.active-sub-navication .sub').text(activeSubnav);

        var offsetTopPosition = $('#' + target).offset().top - $("#stickyheader").outerHeight();
        $('html, body').stop().animate({
            'scrollTop': offsetTopPosition
        }, 1000);
    });

    // mobile Menu
    var activeSubnav = $('#submenu-selec ul li a:first').text();
    $('.active-sub-navication .sub').text(activeSubnav);

    $('#submenu-selec ul li a').on("click", function(e) {
        $('#submenu-selec ul li a').removeClass('active');
        $(this).addClass('active');

        $('#submenu-selec ul').hide();

        var activeSubnav = $('#submenu-selec ul li a.active').text();
        $('.active-sub-navication .sub').text(activeSubnav);
        // e.stopPropagation();
    });


    $('#submenu-selec ul li a').on("click", function(e) {
        e.preventDefault();
        var target = $(this).attr('data-href');

        var offsetTopPosition = $('#' + target).offset().top - $("#submenu-selec").height();
        $('html, body').stop().animate({
            'scrollTop': offsetTopPosition
        }, 1000);
        // e.stopPropagation();
    });

    var locationButton = $('.location-info-content .location-info').length;
    if (locationButton < 1) {
        $('.mobile-sub-navication .location-info').hide();
        $('.mobile-sub-navication').addClass('full-width');
    }

    $(document).mouseup(function(e) {
        var container = $(".extra-off");
        var staySelection = $(".choose-your-stay-selection");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('opened');
            container.animate({ 'width': '72px' });
        }
        if (!staySelection.is(e.target) && staySelection.has(e.target).length === 0) {
            $('.choose-your-stay-selection').hide();
        }
    });

    $(document).on('click', '.banner-arrow', function() {
        $('html, body').animate({ scrollTop: $('#main-content').position().top - 40 }, 'slow');
    });


    // Accordion

    $(document).on('click', '.accordion__item', function() {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).find('.accordion__itemContent').animate({ 'height': '0' }, 500);
            // $(this).find('.faq-accordion-widget .accordion__itemContent').slideUp(300);
        } else {
            $(this).addClass('is-active');
			var height=$(this).find("accordion__itemContent").height();
            $(this).find('.accordion__itemContent').animate({ 'height': height }, 500);
            // $(this).find('.faq-accordion-widget .accordion__itemContent').slideDown(300);
            $(this).find('.accordion__itemContent').animate({ 'height': '100%' });
        }
    });

    //Pagination

    //Pagination PRESS RELEASES
    // pageSize = 10;
    var pageSize = parseInt($.trim($('.PressReleasePageSize').html()));
    var pageCount = $("#pressreleases .app-article-listitem").length / pageSize;
    for (var i = 0; i < pageCount; i++) {
        $("#pressreleases .pagination").append('<li>' + (i + 1) + '</li> ');
    }
    $("#pressreleases .pagination li").first().addClass("active")
    showPage = function(page) {
        $("#pressreleases .app-article-listitem").hide();
        $("#pressreleases .app-article-listitem").each(function(n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
        });
    }
    showPage(1);
    $("#pressreleases .pagination li").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $("#pressreleases .pagination li").removeClass("active");
        $(this).addClass("active");
        showPage(parseInt($(this).text()));
    });

    //Pagination PRESS RELEASES

    // pageSizeMedia = 10;
    var pageSizeMedia = parseInt($.trim($('.MediaMentionsPageSize').html()));
    var pageCountMedia = $("#mediamentions .app-article-mediaitem").length / pageSizeMedia;
    for (var i = 0; i < pageCountMedia; i++) {
        $("#mediamentions .pagination").append('<li>' + (i + 1) + '</li> ');
    }
    $("#mediamentions .pagination li").first().addClass("active")
    showPageMedia = function(page) {
        $("#mediamentions .app-article-mediaitem").hide();
        $("#mediamentions .app-article-mediaitem").each(function(n) {
            if (n >= pageSizeMedia * (page - 1) && n < pageSizeMedia * page)
                $(this).show();
        });
    }
    showPageMedia(1);
    $("#mediamentions .pagination li").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $("#mediamentions .pagination li").removeClass("active");
        $(this).addClass("active");
        showPageMedia(parseInt($(this).text()));
    });

    //Navigation

    var bookMyStay_popup = 0;
    $(".mobile .navbar-toggle").click(function() {
        bookMyStay_popup = 1;
        // $('.mobile-nav').fadeIn();
        // $('.popup-background').fadeIn();

        // mobile Menu

        $('.mobile-header-wrapper.mobile').addClass('open');
        $('.mobile-header-wrapper.mobile .mobile-nav').fadeIn();

        $('.logo-wrapper').hide();
        $('.mobile-header-wrapper .navbar-nav.navbar-right').hide();
        // $('.mobile-header-wrapper .navbar-toggle.navbar-right').hide();
        $('.mobile-header-wrapper .navbar-toggle').hide();
        $('.popup-background').fadeIn();
    });
    $("#stickyheader ul li:last-child a, #submenu-selec  ul li:last-child a").click(function(e) {
        e.preventDefault();
        var id = $(this).attr("data-href");
        $("#" + id).show();

        // $('.faq-accordion-widget').show();
        // $("body,html").addClass("no-scroll"); last child scrolling
    });
    $(".active-sub-navication").on("click", function(e) {
        $('#submenu-selec ul').toggle("slow");
        e.stopPropagation();
    });
    /* $("select#submenu-selec").on("change",function(){
         if(this.value=="faq"){
         $('.faq-accordion-widget').show();
     }
     });*/
    // $("#datepicker-dateofbirth").datepicker();
    $("#datepicker-dateofbirth").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-100:+0',
        maxDate: '-0'
    });

    $("#dateofbirth").datepicker();

    $(".close-icon").click(function() {
        // $('.mobile-nav').fadeOut();
        // $('.booking-widget').fadeOut();
        // $('.popup-background').fadeOut();
        // $('.image-gallery-compinent').css({ 'opacity': '0', 'z-index': '-1' });
        // $('.faq-accordion-widget').fadeOut();
        // $("body,html").removeClass("no-scroll");
        // $("body").removeClass("noscroll");
        // $("html").removeClass("noscroll");
        bookMyStay_popup = 0;

        $('.mobile-header-wrapper.mobile').removeClass('open');
        $('.mobile-header-wrapper.mobile .mobile-nav').fadeOut();
        $('.logo-wrapper').show();
        // $('.mobile-header-wrapper .navbar-nav').show();
        $('.mobile-header-wrapper .navbar-nav.navbar-right').show();
        $('.mobile-header-wrapper .navbar-toggle').show();
        $('.booking-widget').fadeOut();
        $('.popup-background').fadeOut();
        $('.image-gallery-compinent').css({ 'opacity': '0', 'z-index': '-1' });
        $('.faq-accordion-widget').fadeOut();
        $("body,html").removeClass("no-scroll");
        $("body").removeClass("noscroll");
        $("html").removeClass("noscroll");


    });
    $(".locationinfo-overlay-close-icon").click(function() {
        $('.locationinfo-overlay').css({ 'opacity': '0', 'z-index': '-1' });
        $('.location-info-wrapper').hide();
        $("body").removeClass("noscroll");
        $("html").removeClass("noscroll");
    });


    //Booking Widget
    $('.choose-your-stay-selection ul').eq(0).addClass('hotels');
    $('.choose-your-stay-selection ul').eq(1).addClass('residences');

    $('.bookMyStay').click(function(e) {
        e.preventDefault();
        $('.booking-widget').fadeIn();
        // $('.popup-background').fadeIn();
        $("body").addClass("noscroll");
        $("html").addClass("noscroll");
    });

    $('.choose-your-stay').click(function() {
        $('.choose-your-stay-selection').toggle("slow");
        $('.hasDatepicker').hide();
        // $('.checkout-wrapper, .checkin-wrapper').removeClass('active');
        // $('.checkout-wrapper, .checkin-wrapper').removeClass('selected');
        if ($(".choose-your-stay-selection ul li").hasClass('active')) {
            $('.checkout-wrapper, .checkin-wrapper').addClass('selected');
        } else {
            $('.checkout-wrapper, .checkin-wrapper').removeClass('active');
            $('.checkout-wrapper, .checkin-wrapper').removeClass('selected');
        }
    });

    var dataList = '';

    if ($(".choose-your-stay-selection ul li").hasClass('active')) {
        $('.minimum-stay').show();
        var selectedResidences = $(".choose-your-stay-selection ul li.active").attr('data-minnighttext');
        $('.minimum-stay').html(selectedResidences);
        $(".checkin-wrapper").addClass('selected');
        $(".checkout-wrapper").addClass('selected');

        var listSelect = $('.choose-your-stay-selection ul li.active').text();
        $('.choose-your-stay-title').text(listSelect);
        dataList = listSelect;

        setTimeout(function() {
            var selectedStayindex = $('.choose-your-stay-selection ul li.active').index(this);
            $("#property option").eq(selectedStayindex).click();
            $('#datepicker .ui-state-active').click();
        }, 100);
        setTimeout(function() {
            $('.checkin-wrapper').click();
        }, 2000);
    }


    $(".choose-your-stay-selection ul li").on("click", function() {
        var listSelect = $(this).text();
        $('.choose-your-stay-title').text(listSelect);
        dataList = listSelect;
        $(".choose-your-stay-selection ul li").removeClass('active');
        $(this).addClass('active');
        $('.error-placement').hide();

        // setTimeout(function() {
        //     $('.checkin-wrapper').click();
        //     var selectedStayindex = $('.choose-your-stay-selection ul li').index(this);
        //     $("#property option").eq(selectedStayindex).click();
        // }, 100);

        var selectedStayindex = $('.choose-your-stay-selection ul li').index(this);
        $("#property option").removeAttr("selected");
        $("#property option").eq(selectedStayindex).prop("selected", "selected");

        setTimeout(function() {
            $('.checkin-wrapper').click();
        }, 100);


        $('.minimum-stay').show();
        var selectedResidences = $(this).attr('data-minnighttext');
        $('.minimum-stay').html(selectedResidences);

        /* if ($(this).parent().hasClass('residences')) {
             $('.choose-your-stay').removeClass('hotelstay');
             $('.choose-your-stay').addClass('residencesstay');
         } else {
             $('.choose-your-stay').removeClass('residencesstay');
             $('.choose-your-stay').addClass('hotelstay');
         }*/
        if ($(".choose-your-stay-selection ul li").hasClass('active')) {
            $('.choose-your-stay').removeClass('hotelstay');
            $('.choose-your-stay').addClass('residencesstay');
            $(".checkin-wrapper").addClass('selected');
            $(".checkout-wrapper").addClass('selected');
        }

        $('.choose-your-stay').addClass('staySelected');
        $('#datepicker .ui-datepicker-today').click();
    });

    $('#book-now-btn-sub').click(function() {
        if (dataList == '') {
            $('.error-placement').show();
            return false;
        } else {

        }
    });

    $(".checkin-wrapper").click(function() {
        $('#to').hide();
        $(".checkout-wrapper").removeClass('active');
        $(this).addClass('active');
        $(this).addClass('selected');
        $('#datepicker').fadeIn();
    });
    $(".checkout-wrapper").click(function() {
        $('#datepicker').hide();
        $(".checkin-wrapper").removeClass('active');
        $(this).addClass('active');
        $(this).addClass('selected');
        $('#to').fadeIn();
    });

    var windowWidth = $(window).width();
    if (windowWidth < 767) {
        var numberMonths = 1;
    } else {
        var numberMonths = 2;
    }
    var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
    var dateFormat = "mm/dd/yy",
        from = $("#datepicker")
        .datepicker({
            defaultDate: "0",
            minDate: 0,
            altField: "#alternate",
            altFormat: "DD,d,MM,yy",
            numberOfMonths: numberMonths
        })
        .on("change", function() {
            getcheckInDate();
            var from = getDate(this);
            var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
            var dataMindays = $(".choose-your-stay-selection ul li.active").attr('data-mindays');
            if ($('.choose-your-stay').hasClass('residencesstay')) {
                dataMindays = parseInt(dataMindays);
                var minDate_d = date_diff + dataMindays + 'd';
            } else {
                dataMindays = parseInt(dataMindays);
                var minDate_d = date_diff + dataMindays + 'd';
            }
            //$.datepicker._clearDate(to);
            to.datepicker('setDate', null);
            to.datepicker("option", "minDate", minDate_d);
            if ($('.choose-your-stay').hasClass('staySelected')) {
                setTimeout(function() {
                    $('.checkin-wrapper').click();
                    $('.choose-your-stay').removeClass('staySelected');
                    $('.checkout-wrapper').addClass('selected');
                    $(".hasDatepicker#to .ui-state-active").click();
                    // $(".hasDatepicker#to tr a.ui-state-default").eq(0).click();
                }, 100);
            } else {
                setTimeout(function() {

                    //$(".hasDatepicker#to .ui-state-active").click();
                    //$('.checkout-wrapper').removeClass('selected');
                    // $('.checkout-wrapper').addClass('active');
                    // $('.checkout-wrapper').addClass('selected');
                    // $(".hasDatepicker#to tr a.ui-state-default").eq(0).click();
                    $(".hasDatepicker#to .ui-state-active").click();
                    $('.checkout-wrapper').click();
                }, 100);
            }
        }),
        to = $("#to").datepicker({
            defaultDate: "+1d",
            altField: "#alternateto",
            altFormat: "DD,d,MM,yy",
            numberOfMonths: numberMonths
        })
        .on("change", function() {
            getcheckOutDate();
            from.datepicker("option", "maxDate", getDate(this) + 1);
            $('.hasDatepicker').hide();
            $(".checkout-wrapper").removeClass('active');
            $(".checkout-wrapper").addClass('selected');
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }

    getcheckInDate();
    getcheckOutDate();

    function getcheckInDate() {
        var checkInDate = $("#alternate").val().split(",");
        $('.checkin-wrapper .checkin-checkout-date').text(checkInDate[1]);
        $('.checkin-wrapper .month-and-year').text(checkInDate[2] + " " + checkInDate[3]);
        $('.checkin-wrapper .checkin-checkout-day').text(checkInDate[0]);
    }

    function getcheckOutDate() {
        var checkOutDate = $("#alternateto").val().split(",");
        $('.checkout-wrapper .checkin-checkout-date').text(checkOutDate[1]);
        $('.checkout-wrapper .month-and-year').text(checkOutDate[2] + " " + checkOutDate[3]);
        $('.checkout-wrapper .checkin-checkout-day').text(checkOutDate[0]);
    }

    /*
        $( "#from, #to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            onSelect: function( selectedDate ) {
                if(this.id == 'from'){
                var dateMin = $('#from').datepicker("getDate");
                var rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 1);
                var rMax = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 31);
                $('#to').datepicker("option","minDate",rMin);
                $('#to').datepicker("option","maxDate",rMax);
                }

            }
        });
    */


    // Sticky Second menu

    var mobileHeight = $('.mobile-header-wrapper').height();
    var stickyHeaderTop = $('#stickyheader').offset().top;
    if ($(window).width() < 1024) {
        stickyHeaderTop = stickyHeaderTop - mobileHeight;
    }

    var stickyHeaderMobile = $('.mobile-sub-navication').offset().top;

    $(window).resize(function() {
        mobileHeight = $('.mobile-header-wrapper').height();
        if ($(window).width() < 1024) {
            stickyHeaderTop = stickyHeaderTop - mobileHeight;
        }
    });


    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyHeaderTop) {

            if ($(window).width() > 1024) {
                $('#stickyheader').css({ position: 'fixed', top: '0px', background: '#fff', width: '65%', margin: '0 auto', left: '48%', transform: 'translateX(-50%)' });

            } else if ($(window).width() >= 768 && $(window).width() <= 1024) {
                if ($("body").hasClass("hotel") || $("body").hasClass("residence") || $('.submenu-center').length == 1) {
                    if (!bookMyStay_popup) {
                        $('.mobile-header-wrapper').css({ position: 'fixed', top: '0px', right: '0', left: '0' });
                        $('#stickyheader').addClass('stickyheader-mobile-header');
                        $('#stickyheader').css("top", mobileHeight + "px");
                    }
                }

            }

            // $('#stickyheader').css({ position: 'fixed', top: '0px', background: '#fff', width: '65%', margin: '0 auto', left: '48%', transform: 'translateX(-50%)' });
            // $('#submenu-selec').css({position: 'fixed', top: '0px'});

            // $('#stickyheader ul li').css({position: 'fixed', top: '0px', background: 'none', width: '150px', display: 'inline-block', float: 'right'});
            $('#stickyalias').css('display', 'block');
        } else {
            $('#stickyheader').removeAttr('style');
            $('#stickyheader').removeClass('stickyheader-mobile-header');
            // $('#stickyalias').css('display', 'none');
        }

        if ($(window).scrollTop() > stickyHeaderMobile) {
            $('.mobile-sub-navication').css({ position: 'fixed', top: '0px' });
        } else {
            $('.mobile-sub-navication').removeAttr('style');
        }

    });

    // room details popup start

    var roomdetailslider;

    var imageslidermarkup = "<li data-thumb='${Url}'><img src='${Url}'/></li>";
    $.template("imagesliderTemplate", imageslidermarkup);

    var roomdetailsmarkup = "<li>${Value}</li>";
    $.template("roomdetailsTemplate", roomdetailsmarkup);

    var amentiesmarkup = "<li><div class='icon'><img src='${Icon.Src}'/></span><p>${Name}</p></div></li>";
    $.template("amenitiesdetailsTemplate", amentiesmarkup);

    var othertemplate = "<div class='parent-wrapper-other-details'><p class='room-appartment-additional-info room-appartment-additional-info-other'>${Name}</p><div class='room-appartment-additional-info-details room-appartment-additional-info-details-other'>{{html Description}}</div></div>";
    $.template("otherdetailsTemplate", othertemplate);

    $('.details-button-popup').click(function() {

        var roompropertydetails = [];
        $(".room-appartment-detail-popup-background").fadeIn();
        $(".room-appartment-detail-popup-widget").fadeIn();
        var index = $(this).data("index") - 1;
        var roomdetails = JSON.parse($("input[name=info-details-json]").val());
        $("#room-appartment-detail-gallery-popup").html("");
        // console.log(roomdetails[index]);
        $.tmpl("imagesliderTemplate", roomdetails[index].PreviewImages).appendTo("#room-appartment-detail-gallery-popup");
        $("body").addClass("noscroll");
        $("html").addClass("noscroll");
        roomdetailslider = $('#room-appartment-detail-gallery-popup').lightSlider({
            gallery: false,
            item: 1,
            slideMargin: 0,
            speed: 500,
            pause: 10000,
            auto: true,
            loop: true,
            onSliderLoad: function() {
                $('#room-appartment-detail-gallery-popup').removeClass('cS-hidden');
                $('#room-appartment-detail-gallery-popup li').each(function() {
                    var backround = $(this).attr("data-thumb");
                    $(this).css('background-image', 'url(' + backround + ')');
                })
                //$('#room-appartment-detail-gallery-popup').css("height", "auto");
                //$('#room-detail-gallery-popup li img').css('opacity',0);

            }
        });
        $(".room-apartment-detail-popup-widget-content .view-three-sixty").appendTo(".room-appartment-detail-popup-widget .lSSlideOuter");
        $(".room-appartment-detail-popup-widget .slide-type").html(roomdetails[index].Title);
        if (roomdetails[index].RoomFeatureOne) {
            var roomareaobj = { "Value": roomdetails[index].RoomFeatureOne };
            roompropertydetails.push(roomareaobj);
        }
        if (roomdetails[index].RoomFeatureTwo) {
            var bedsizeobj = { "Value": roomdetails[index].RoomFeatureTwo };
            roompropertydetails.push(bedsizeobj);
        }
        if (roomdetails[index].RoomFeatureThree) {
            var guestcapacityobj = { "Value": roomdetails[index].RoomFeatureThree };
            roompropertydetails.push(guestcapacityobj);
        }
        $("#room-appartment-properties").html("");
        $.tmpl("roomdetailsTemplate", roompropertydetails).appendTo("#room-appartment-properties");
        /*var roomfeatures = roomdetails[index].Features;
        $("#room-properties").html(roomfeatures);*/
        if ($("body").hasClass("residence")) {
            $(".room-appartment-detail-summary").html(roomdetails[index].MainContent);
        } else if ($("body").hasClass("hotel")) {
            $(".room-appartment-detail-summary").html(roomdetails[index].Description);
        }



        if ($("body").hasClass("residence")) {
            if (roomdetails[index].AssetsSummary) {
                $(".room-appartment-additional-info").show();
                $(".room-appartment-additional-info-details").html(roomdetails[index].AssetsSummary);
            }
        }

        if ($("body").hasClass("hotel")) {
            if (roomdetails[index].AdditionalInfo) {
                $(".room-appartment-additional-info").show();
                $(".room-appartment-additional-info-details").html(roomdetails[index].AdditionalInfo);
            }
        }

        if ($("body").hasClass("residence")) {
            if (roomdetails[index].Rooms) {
                $.tmpl("otherdetailsTemplate", roomdetails[index].Rooms).appendTo(".room-appartment-additional-info-details-wrapper-row");
                $(".room-appartment-additional-info-other").show();

                $(".room-appartment-additional-info-details-other").each(function() {
                    var classname = $(this).find("ul").attr("class");
                    $(this).parent().addClass(classname);
                    $(this).find("ul").removeClass();
                })


            }
        }

        if ($("body").hasClass("residence") || $("body").hasClass("hotel")) {
            if (roomdetails[index].Services) {
                $(".room-appartment-amenities").show();
                $(".room-appartment-amenities-details").html("<ul></ul>");
                $.tmpl("amenitiesdetailsTemplate", roomdetails[index].Services).appendTo(".room-appartment-amenities-details ul");
            }
        }



        $(".app-threesixty-panoframe").attr("src", roomdetails[index].TourUrl);

        if ($("body").hasClass("residence")) {
            if (roomdetails[index].FloorplanImage) {
                $(".room-appartment-floorplan").show();
                $(".floorplan-image").attr("src", roomdetails[index].FloorplanImage.Src);
            }
            if (roomdetails[index].FloorPlan) {
                $(".download-fllorplan-pdf").attr("href", roomdetails[index].FloorPlan.Src);
            } else {
                $(".download-fllorplan-pdf").hide();
            }
            $(".foot-notes").html(roomdetails[index].FootNotes);
        }
    });

    $(".room-appartment-detail-popup-widget .close-icon").click(function() {
        $(".room-appartment-detail-popup-background").fadeOut();
        $(".room-appartment-detail-popup-widget").fadeOut();
        roomdetailslider.destroy();
        $("body").removeClass("noscroll");
        $("html").removeClass("noscroll");
    });

    $(".room-apartment-detail-popup-widget-content .view-three-sixty").click(function() {
        var height = $(".room-appartment-detail-popup-widget .lSSlideOuter").height();
        $(".room-appartment-detail-popup-widget .lSSlideOuter").hide();
        $(".panel-threesixty iframe").css("height", height + "px");
        $(".panel-threesixty").show();
        $(".room-appartment-detail-popup-widget-content .close-icon").hide();
        $(".room-appartment-detail-popup-widget-content .gallery-logo").hide();
    });

    $(".room-apartment-detail-popup-widget-content .close-three-sixty").click(function() {

        $(".room-appartment-detail-popup-widget .lSSlideOuter").show();
        $(".panel-threesixty").hide();
        $(".room-appartment-detail-popup-widget-content .close-icon").show();
        $(".room-appartment-detail-popup-widget-content .gallery-logo").show();
    });

    function adjustcampaignheight() {


        var height = $(".campaign-page .inner-wrapper").outerHeight() + 100;

        $(".campaign-page .outer-wrapper").css("height", height + "px");
        $(".campaign-page .grey-background-layer").css("top", "100px");

        var collapseheight = $(".collapse-expand").height() / 2;
        $(".collapse-expand").css("bottom", "-" + collapseheight + "px");

        var verticallineheight = $(".vertical-line").height() / 2;
        var outerwrappercampaignwidth = $(".campaign-page .outer-wrapper .inner-wrapper").width() / 2;
        $(".vertical-line").css("top", "-" + verticallineheight + "px");
        $(".vertical-line").css("margin-left", outerwrappercampaignwidth + "px");

        if ($(window).width() < 768) {
            var bannersrc = $(".campaign-page .main-banner .image-background img").attr("src");
            $(".campaign-page .main-banner .image-background").css('background-image', 'url(' + bannersrc + ')');
            var bannerheight = $(".campaign-page .main-banner .image-background").height();
            $(".campaign-page .main-banner").css("min-height", bannerheight + "px");
            $(".campaign-page .main-banner").css("height", "auto");
        } else {
            var bannerheight = $(".campaign-page .main-banner .image-background img").height();
            $(".campaign-page .main-banner").css("min-height", bannerheight + "px");
            $(".campaign-page .main-banner").css("height", "auto");
        }


    }




    $('#campaign-highlights').lightSlider({
        gallery: false,
        item: 1,
        slideMargin: 0,
        speed: 500,
        pause: 10000,
        auto: true,
        loop: false,
        onSliderLoad: function() {
            adjustcampaignheight();
            $('#campaign-highlights').removeClass('cS-hidden');
            $('.campaign-page .lSSlideOuter .lSAction .lSPrev').hide();
        },
        onBeforeSlide: function(el, scene) {
            var length = $(".campaign-page .inner-wrapper .lSSlideOuter .lSSlideWrapper .gallery .lslide").length - 1;
            if (scene == 0) {
                $('.campaign-page .inner-wrapper .lSSlideOuter .lSAction .lSPrev').hide();
                $('.campaign-page .inner-wrapper .lSSlideOuter .lSAction .lSNext').show();
            } else if (scene == length) {
                $('.campaign-page .inner-wrapper .lSSlideOuter .lSAction .lSPrev').show();
                $('.campaign-page .inner-wrapper .lSSlideOuter .lSAction .lSNext').hide();
            } else {
                $('.campaign-page .inner-wrapper .lSSlideOuter .lSAction .lSPrev').show();
                $('.campaign-page .inner-wrapper .lSSlideOuter .lSAction .lSNext').show();
            }
        }
    });

    $(window).resize(function() {
        var collapseheight = $(".collapse-expand").height() / 2;
        $(".collapse-expand").css("bottom", "-" + collapseheight + "px");
        var verticallineheight = $(".vertical-line").height() / 2;
        var outerwrappercampaignwidth = $(".campaign-page .outer-wrapper .inner-wrapper").width() / 2;
        $(".vertical-line").css("top", "-" + verticallineheight + "px");
        $(".vertical-line").css("margin-left", outerwrappercampaignwidth + "px");
        if ($(window).width() < 768) {
            var bannersrc = $(".campaign-page .main-banner .image-background img").attr("src");
            $(".campaign-page .main-banner .image-background").css('background-image', 'url(' + bannersrc + ')');
            var bannerheight = $(".campaign-page .main-banner .image-background").height();
            $(".campaign-page .main-banner").css("min-height", bannerheight + "px");
            $(".campaign-page .main-banner").css("height", "auto");
        } else {
            var bannerheight = $(".campaign-page .main-banner .image-background img").height();
            $(".campaign-page .main-banner").css("min-height", bannerheight + "px");
            $(".campaign-page .main-banner").css("height", "auto");
        }
        setTimeout(function() {
            var height = $(".campaign-page .inner-wrapper").outerHeight() + 100;
            $(".campaign-page .outer-wrapper").css("height", height + "px");
            $(".campaign-page .grey-background-layer").css("top", "100px");
        }, 500);
    });






    function _GTMSignUpLayerPush(GTMEvent, GTMCat, GTMAction, GTMLabel) {
        dataLayer.push({
            'event': GTMEvent,
            'eventDetails.category': GTMCat,
            'eventDetails.action': GTMAction,
            'eventDetails.label': GTMLabel
        });
    }

    function updateMinNightsRestriction(widget, selectedDate, checkin, checkout) {
        var sr = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        var mindays = !sr ? widget.find('.mindays').val() || 0 : 7,
            mindaysTotal = 86400000 * mindays,
            getDate = new Date(selectedDate).getTime() + mindaysTotal,
            getNewDate = new Date(getDate);
        //console.log(widget);
        //console.log(mindays);
        //console.log(sr);
        // console.log('mindays', checkout);

        checkout.datepicker("option", "minDate", getNewDate);
        if (selectedDate) {
            checkout.datepicker("setDate", getNewDate);
        }
    }

    var appForm = $('.contact-us-form-wrapper .app-form-validate');
    if (appForm && appForm.length !== 0) {
        var _validateEmail = function _validateEmail(email) {
            var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,17}$/;

            if (pattern.test(email)) {
                return 'successful';
            } else {
                return 'unsuccessful';
            }
        };

        var _validateEmailForm = function _validateEmail(email) {
            var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,17}$/;

            if (pattern.test(email)) {
                return 1;
            } else {
                return 0;
            }
        };



        var _validateCurrency = function _validateCurrency(val) {
            var pattern = /^[+-]?[0-9]{1,}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/;

            if (pattern.test(val)) {
                return true;
            } else {
                return false;
            }
        };


        function checkphonenumber(inputtxt) {
            var phoneno = /^\d*$/;
            //   var phoneno = /^\d{10}$/;
            if (inputtxt.match(phoneno)) {
                return 1;
            } else {

                return 0;
            }
        }

        function checkforcountrycode(inputtxt) {
            var countrycode = /^\d{6}$/;
            if (inputtxt >= 0 && inputtxt <= 999999) {
                return 1;
            } else {

                return 0;
            }
        }
        var appFormControlInputs = appForm.find('.app-form-control input,.app-form-control select ');
        var appFormControlTextarea = appForm.find('.app-form-control textarea');
        // console.log('appFormControlInputs' , appFormControlInputs.length)
        appFormControlInputs.each(function(i, input) {

            var inp = $(input);

            if (inp.attr('isrequired')) {
                // console.log('appFormControlInputs with required' , inp)
                // console.log('inp has required', inp);

                //var placeholderTextReq = inp.attr('placeholder') + '*';
                //inp.attr('placeholder', placeholderTextReq);

                //if ((inp.attr('id') == 'lowerrateoffered') || (inp.attr('id') == 'oasiarate') || (inp.attr('id') == 'rateplanbooked')) {
                //wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_2__Value      Rate Plan booked
                //wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_6__Value      Oasia.com's Rate
                //wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_2__Fields_2__Value      Lower Rate Offered
                if (inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_6__Value' || inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_2__Fields_2__Value') {
                    inp.after('<span class="error-node"> Field contains an invalid number </span>');
                } else if (inp.hasClass('email')) {
                    inp.after('<span class="error-node"> Please input a valid email (eg. abc@gmail.com) </span>');
                } else if (inp.attr('id') == 'emailAddress_blade') {
                    inp.after('<span class="error-node"> Please input a valid email (eg. abc@gmail.com) </span>');
                } else {
                    var html = inp.attr("data-val-required-error");
                    inp.after('<span class="error-node">' + html + '</span>');
                }
            }
        });

        appFormControlTextarea.each(function(i, area) {
            var txtarea = $(area);

            if (txtarea.attr('isrequired')) {
                // console.log('txtarea has required', txtarea);
                //var placeholderTextReq = txtarea.attr('placeholder') + '*';
                //txtarea.attr('placeholder', placeholderTextReq);
                var html = txtarea.attr("data-val-required-error");
                txtarea.after('<span class="error-node">' + html + ' </span>');
            }
        });

        appForm.find('input, .app-selectpicker select, textarea').on('change', function() {

            var field = $(this);
            // console.log('field >>', field.val() );
            field.closest('.app-form-control').removeClass('has-error show-error-tooltip');
        });

        //newsletter signup FOOTER form only
        appForm.find('#tag-emailaddress-submit').on('click', function() {
            // TO DO: uncomment _GTMSignUpLayerPush
            // Comment: did not use on submit for emailnewsletter as validation is a bit funny
            var emailAddress = $('#emailAddress_blade').val();
            var GTMLabel = void 0;
            GTMLabel = _validateEmail(emailAddress);

            _GTMSignUpLayerPush('trackEvent', 'email signup', 'click', GTMLabel);
            //console.log('trackEvent --- email signup --- click --- ' + GTMLabel);
        });

        //SR, Best Rate, Contact us and Newsletter form
        appForm.find('button.app-button').on('click', function() {
            // TO DO: uncomment _GTMSignUpLayerPush
            // Comment: did not use on submit for emailnewsletter as validation is a bit funny
            var emailAddress = $(this).closest('form').find('input[id^=wffm][type=email]').val(); //$('#email').val();
            var GTMLabel = void 0;
            var GTMCat = $(this).attr('id');
            GTMLabel = _validateEmail(emailAddress);

            _GTMSignUpLayerPush('trackEvent', GTMCat, 'submit', GTMLabel);
            //console.log('trackEvent --- ' + GTMCat +  ' --- submit --- ' + GTMLabel);
        });

        appForm.on('submit', function(e) {
            e.preventDefault();
            // console.log('form submitting... with validation');
            var form = $(this);
            var inputs = form.find('.app-form-control input[isrequired], .app-form-control select[isrequired], .app-form-control textarea[isrequired]');
            var inputsWithErrors = [];
            inputs.each(function(i, input) {
                var inp = $(input);

                // console.log('inp has required', inp);
                if (inp.hasClass("email")) {
                    var emailAddress = inp.val();
                    if ($.trim(inp.val()) === "") {
                        inp.closest('.app-form-control').addClass('has-error');
                        var html = inp.attr("data-val-required-error");
                        inp.next().html(html);
                        inputsWithErrors.push(inp);
                    } else {
                        var returnval = _validateEmailForm(emailAddress);
                        if (!returnval) {
                            inp.closest('.app-form-control').addClass('has-error');
                            var emailvalidationmsg = inp.attr("data-val-required");
                            inp.next().html(emailvalidationmsg);
                            inputsWithErrors.push(inp);
                        }
                    }
                } else if (inp.parent().hasClass("contact-number")) {
                    var phonenumber = inp.val();
                    if ($.trim(inp.val()) === "") {
                        inp.closest('.app-form-control').addClass('has-error');
                        var html = inp.attr("data-val-required-error");
                        inp.next().html(html);
                        inputsWithErrors.push(inp);
                    } else {
                        var returnval = checkphonenumber(phonenumber);
                        if (!returnval) {
                            inp.closest('.app-form-control').addClass('has-error');
                            var emailvalidationmsg = inp.attr("data-val-required");
                            inp.next().html(emailvalidationmsg);
                            inputsWithErrors.push(inp);
                        }
                    }

                } else if (inp.parent().hasClass("country-code")) {
                    var countrycode = inp.val();
                    if ($.trim(inp.val()) === "") {
                        inp.closest('.app-form-control').addClass('has-error');
                        var html = inp.attr("data-val-required-error");
                        inp.next().html(html);
                        inputsWithErrors.push(inp);
                    } else {
                        var returnval = checkforcountrycode(countrycode);
                        if (!returnval) {
                            inp.closest('.app-form-control').addClass('has-error');
                            var emailvalidationmsg = inp.attr("data-val-required");
                            inp.next().html(emailvalidationmsg);
                            inputsWithErrors.push(inp);
                        }
                    }

                } else if (inp.parent().parent().parent().hasClass("col-2")) {

                    if ($.trim(inp.val()) === "") {
                        inp.parent().find(".app-selectpicker-button").addClass("red-border");
                        inp.closest('.app-form-control').addClass('has-error');
                        inputsWithErrors.push(inp);
                    }


                } else if (inp.parent().parent().hasClass("hotels")) {

                    if ($.trim(inp.val()) === "") {
                        inp.parent().find(".app-selectpicker-button").addClass("red-border");
                        inp.closest('.app-form-control').addClass('has-error');
                        inputsWithErrors.push(inp);

                    }

                } else if ($.trim(inp.val()) === "") {
                    // console.log('trim >>', $.trim(inp.val()));
                    inp.closest('.app-form-control').addClass('has-error');
                    inputsWithErrors.push(inp);
                }



                //if ((inp.attr('id') == 'lowerrateoffered') || (inp.attr('id') == 'oasiarate') || (inp.attr('id') == 'rateplanbooked')) {
                //wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_2__Value      Rate Plan booked
                //wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_6__Value      Oasia.com's Rate
                //wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_2__Fields_2__Value      Lower Rate Offered
                if (inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_6__Value' || inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_2__Fields_2__Value') {
                    var currencyVal = _validateCurrency($.trim(inp.val()));

                    if (!currencyVal) {
                        inp.closest('.app-form-control').addClass('has-error');
                        inputsWithErrors.push(inp);
                    }
                } else if (inp.hasClass('email')) {
                    var emailVal = _validateEmail($.trim(inp.val()));

                    if (emailVal == 'unsuccessful') {
                        inp.closest('.app-form-control').addClass('has-error');
                        inputsWithErrors.push(inp);
                    }
                } else if (inp.attr('id') == 'emailAddress_blade') {
                    var _emailVal = _validateEmail($.trim(inp.val()));

                    if (_emailVal == 'unsuccessful') {
                        inp.closest('.app-form-control').addClass('has-error');
                        inputsWithErrors.push(inp);
                    }
                }
            });
            // console.log('inputs with errors >>', inputsWithErrors[0]);"
            if (inputsWithErrors.length > 0) {
                e.preventDefault();
                inputsWithErrors[0].closest('.app-form-control').addClass('show-error-tooltip');
                $('html,body').animate({
                    scrollTop: inputsWithErrors[0].offset().top - 120 + 'px'
                });
            } else {




                var url = appForm.attr("action");


                var headersList = {
                    "X-RequestVerificationToken": appForm.find('[name=__RequestVerificationToken]').val(),
                    "X-Requested-With": "XMLHttpRequest"
                };
                $.ajax({
                    url: url,
                    type: "POST",
                    processData: false,
                    contentType: false,
                    headers: headersList,
                    data: new FormData(appForm.get(0)),
                    success: function(response) {
                        // self.formSubmitSuccess(form, res);
                        appForm.remove();
                        $(".contact-us-form").html(response);
                        $(".contact-us-title").remove();
                        $('html, body').animate({
                            'scrollTop': $(".contact-us-component").offset().top
                        }, 900);

                    },
                    error: function(xhr, status, exception) {
                        //self.formSubmitError(form, xhr, status, exception);
                    }
                });

                $('#emailAddress_blade').show();


            }
            //console.log(inputsWithErrors.length);
        });

        $('#tag-for-media-enquiries').on('click', function() {
            _GTMSignUpLayerPush('trackEvent', 'media inquiry', 'click', 'media inquiry email');
        });

        $('#tag-for-media-enquiries-phone').on('click', function() {
            _GTMSignUpLayerPush('trackEvent', 'media inquiry', 'click', 'media inquiry phone');
        });
    }





    var serviceResidenceDatepick = $('.servicedresidence-datepick');

    if (serviceResidenceDatepick.length !== 0) {
        serviceResidenceDatepick.each(function() {

            var serviceResDateControl = $(this);
            var theForm = serviceResDateControl.closest('form');
            var sr_in = serviceResDateControl.find('.sr-in');
            var sr_out = serviceResDateControl.find('.sr-out');
            var mindays = serviceResidenceDatepick.find('.mindays');

            sr_in.on('change', function() {
                setTimeout(function() {
                    sr_out.focus();
                }, 100);
            });

            var srIn = sr_in.datepicker({
                minDate: 0,
                numberOfMonths: 1,
                autoSize: true,
                prevText: " ",
                nextText: " ",
                dateFormat: "d M yy",
                changeFirstDay: false,
                beforeShowDay: function beforeShowDay(date) {
                    var checkin = void 0,
                        checkout = void 0,
                        classes = "";
                    try {
                        checkin = $.datepicker.parseDate("d M yy", sr_in.val());
                        checkout = $.datepicker.parseDate("d M yy", sr_out.val());
                    } catch (ex) {
                        return [true];
                    }

                    if (checkin && (date.getTime() == checkin.getTime() || checkout && date >= checkin && date <= checkout)) {
                        classes += "date-highlight";
                    }

                    if (checkin && date.getTime() == checkin.getTime() || checkout && date.getTime() == checkout.getTime()) {
                        classes += " active";
                    }

                    return [true, classes];
                },
                onClose: function onClose(selectedDate) {
                    //console.log(mindays.val());
                    updateMinNightsRestriction(theForm, selectedDate, sr_in, sr_out);
                }
            });
            var srOut = sr_out.datepicker({
                numberOfMonths: 1,
                autoSize: true,
                prevText: " ",
                nextText: " ",
                dateFormat: "d M yy",
                beforeShowDay: function beforeShowDay(date) {
                    var checkin = void 0,
                        checkout = void 0,
                        classes = "";
                    try {
                        checkin = $.datepicker.parseDate("d M yy", sr_in.val());
                        checkout = $.datepicker.parseDate("d M yy", sr_out.val());
                    } catch (ex) {
                        return [true];
                    }

                    if (checkin && (date.getTime() == checkin.getTime() || checkout && date >= checkin && date <= checkout)) {
                        classes += "date-highlight";
                    }
                    if (checkin && date.getTime() == checkin.getTime() || checkout && date.getTime() == checkout.getTime()) {
                        classes += " active";
                    }

                    return [true, classes];
                }
            });
        });
    }

    $(".country-code input").attr("maxlength", 6);
    // $(".contact-number input").attr("maxlength",10);

    $(".contact-number input,.country-code input").keydown(function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });





    var element = $(".app-form-control.hotels .app-select-control");
    var html = "";

    var selectedfield = element.find(".bs-title-option").html();
    html += "<button class='app-selectpicker-button'>" + selectedfield + "</button>";


    html += "<section class='app-selectpicker_container box-shadow-right-bottom'><div class='app-selectpicker_wrap'>";



    $.map(element.find("optgroup"), function(val, i) {

        html += "<div class='app-selectpicker-group'><h3>" + $(val).attr("label") + "</h3><ul>";
        $.map($(val).find("option"), function(val, i) {
            var mindays = $(val).attr("data-mindays");
            var value = $(val).attr("value");
            var htmlnew = $(val).html();
            html += "<li data-mindays='" + mindays + "' value='" + value + "'>" + htmlnew + "</li>";
        });
        html += "</ul></div>";
    });

    html += "</div></section>";

    $(".app-form-control.hotels .app-select-control").after(html);

    element.parent().find(".app-selectpicker_container").width(element.outerWidth() + 'px');
    $(window).resize(function() {
        element.parent().find(".app-selectpicker_container").width(element.outerWidth() + 'px');
    })

    element.parent().find(".app-selectpicker-button").on("click", function(e) {
        e.preventDefault();

        element.parent().find(".app-selectpicker_container").toggleClass('active');
        e.stopPropagation();
    })

    element.parent().find(".app-selectpicker_container ul li").on("click", function(e) {

        var htmlnewone = $(this).html();
        var requestid = $(this).attr("value");
        element.parent().find(".app-selectpicker-button").html(htmlnewone);
        element.find("option[value='" + requestid + "']").prop('selected', true);
        element.parent().find(".app-selectpicker_container").toggleClass('active');

        element.parent().find(".app-selectpicker-button").removeClass('red-border');
        element.parent().parent().removeClass("has-error show-error-tooltip");
        e.stopPropagation();
    })

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var requestid = getParameterByName('id');
    if (requestid != null && requestid != "" && requestid != "undefined") {
        $(".hotels .app-select-control option[value='" + requestid + "']").prop('selected', true);
        var datadefaultvalue = $(".hotels select.app-select-control").attr("data-defaultvalue");
        $(".hotels .app-selectpicker-button").html(datadefaultvalue);
    }



    $(".app-form-controls-col.col-2 .app-form-control").each(function() {



        var element = $(this);
        var html = "";

        var selectedfield = element.find(".bs-title-option").html();
        html += "<button class='app-selectpicker-button'>" + selectedfield + "</button>";


        html += "<section class='app-selectpicker_container box-shadow-right-bottom'><div class='app-selectpicker_wrap'>";


        html += "<div class='app-selectpicker-group'><h3>" + selectedfield + "</h3><ul>";
        $.map(element.find("option:not(.bs-title-option)"), function(val, i) {



            var value = $(val).attr("value");
            var htmlnew = $(val).html();
            html += "<li value='" + value + "'>" + htmlnew + "</li>";


        });
        html += "</ul></div>";
        html += "</div></section>";

        var newone = element.find(".app-select-control");

        newone.after(html);

        newone.parent().find(".app-selectpicker_container").width(newone.outerWidth() + 'px');
        $(window).resize(function() {
            newone.parent().find(".app-selectpicker_container").width(newone.outerWidth() + 'px');
        })

        newone.parent().find(".app-selectpicker-button").on("click", function(e) {
            e.preventDefault();

            newone.parent().find(".app-selectpicker_container").toggleClass('active');
            e.stopPropagation();
        });

        newone.parent().find(".app-selectpicker_container ul li").on("click", function(e) {

            var htmlnewone = $(this).html();
            var requestid = $(this).attr("value");
            newone.parent().find(".app-selectpicker-button").html(htmlnewone);
            newone.find("option[value='" + requestid + "']").prop('selected', true);
            newone.parent().find(".app-selectpicker_container").toggleClass('active');


            newone.parent().find(".app-selectpicker-button").removeClass('red-border');
            newone.parent().parent().removeClass("has-error show-error-tooltip");
            e.stopPropagation();
        });







    });

    $(".countryofresidence-control").each(function() {



        var element = $(this);
        var html = "";

        var selectedfield = element.find(".bs-title-option").attr("label");
        html += "<button class='app-selectpicker-button'>" + selectedfield + "</button>";


        html += "<section class='app-selectpicker_container box-shadow-right-bottom'><div class='app-selectpicker_wrap'>";


        html += "<div class='app-selectpicker-group'><h3>" + selectedfield + "</h3><ul>";
        $.map(element.find("option:not(.bs-title-option)"), function(val, i) {



            var value = $(val).attr("value");
            var htmlnew = $(val).html();
            html += "<li value='" + value + "'>" + htmlnew + "</li>";


        });
        html += "</ul></div>";
        html += "</div></section>";

        var newone = element.find(".app-select-control");

        newone.after(html);
        var widthnew = newone.outerWidth() - 15;
        // newone.parent().find(".app-selectpicker_container").width(widthnew+'px');
        // newone.parent().find(".app-selectpicker-button").width(widthnew+'px');


        newone.parent().find(".app-selectpicker-button").on("click", function(e) {
            e.preventDefault();

            newone.parent().find(".app-selectpicker_container").toggleClass('active');
            e.stopPropagation();
        });

        newone.parent().find(".app-selectpicker_container ul li").on("click", function(e) {

            var htmlnewone = $(this).html();
            var requestid = $(this).attr("value");
            newone.parent().find(".app-selectpicker-button").html(htmlnewone);
            newone.find("option[value='" + requestid + "']").prop('selected', true);
            newone.parent().find(".app-selectpicker_container").toggleClass('active');

            $("#countries").prop('required', false);
            $("button.app-selectpicker-button").removeClass('red-border');

            $(".error-country").hide();
            e.stopPropagation();
        });

    });

    $(window).resize(function() {
        // $(".village-exclusive-section .village-exclusive").width($(".detail-overview-content .long-description").outerWidth())
    })

    if ($("#countries").val() != "" && $("#countries").val() != null && $("#countries").val() != "undefined") {
        var htmlnewone = $(".app-selectpicker_container ul li[value=" + $("#countries").val() + "]").html();
        $(".app-selectpicker-button").html(htmlnewone);
    }

    // $(".village-exclusive-section .village-exclusive").width($(".detail-overview-content .long-description").outerWidth())
    if ($('#countryofresidence').length) {
        var inputnewcheck = "";
        $(".app-selectpicker-button").keyup(function(e) {
            var filter, ul, li, a, i;
            if (e.keyCode == 16 || e.keycode == 17 || e.keycode == 18) {

            } else {
                inputnewcheck += String.fromCharCode(e.keyCode);
            }
            filter = inputnewcheck.toUpperCase();
            ul = $(".app-selectpicker_container .app-selectpicker-group ul");
            li = $(".app-selectpicker_container .app-selectpicker-group ul li");
            li.removeClass("gold");
            // Loop through all list items, and hide those who don't match the search query
            li.each(function() {
                a = $(this);
                if (a.html().toUpperCase().indexOf(filter) == 0) {
                    $(".app-selectpicker_container .app-selectpicker-group").scrollTop($(this).position().top);
                    $(this).addClass("gold");
                    return false;
                }
            });
        });
        setInterval(function() { inputnewcheck = ""; }, 2000);
    }


    //

    $("html,body").on("click", function() {
        $(".app-selectpicker_container").removeClass('active');
        $('#submenu-selec ul').hide();
    })

    if ($(window).width() > 1024) {
        var maxheight = 0;
        $(".discount.section.container .row > div").each(function() {
            var height = $(this).outerHeight();
            if (height > maxheight) { maxheight = height; }
        })
        $(".discount.section.container .row .col-xs-offset-1").css("height", maxheight + "px")
        $(".discount.section.container .row .col-xs-offset-1").css("line-height", maxheight + "px")

    }


    //  things to to


    $('.things-do-section-features-new').on('click', function(e) {
        //  $('.thingsToDoPopup').show();
        // $('.thingsToDoPopup').css({ 'opacity': '1', 'z-index': '999' });
        e.preventDefault();
        $('.thingsToDoPopup').show();
        $('.popup-background').show();
        $('.thingsToDoPopup').css({ 'opacity': '1', 'z-index': '999' });

        // $('.thingsToDoPopup').append(thingstodoURL);
        //console.log('thingstodoURL...........',thingstodoURL);
        //$(".thingsToDoPopup").load("" + +thingstodoURL'+ div.things-to-do-wrapper");
        //$('.thingsToDoPopup').append(thingstodoURL);

        // var url = pagelink + "index.html";
        $("body").addClass("noscroll");
        $("html").addClass("noscroll");
        var thingstodoURL = $(this).find('a').attr('href');
        $.ajax({
            url: thingstodoURL,
            type: "GET",
            dataType: "html"
        }).done(function(data) {
            // $(".thingsToDoPopup").html($(data).find('.things-to-do-wrapper'));
            $(".things-to-do-page-wrapper").html($(data).find('.things-to-do-wrapper'));
        });

        // $('html, body').animate({ scrollTop: $('.thingsToDoPopup').position().top - 40 }, 'slow');

    });
    $('.thingstoDo-popupsection').on('click', function(e) {
        //  $('.thingsToDoPopup').show();
        // $('.thingsToDoPopup').css({ 'opacity': '1', 'z-index': '999' });
        e.preventDefault();
        $('.thingsToDoPopup').show();
        $('.popup-background').show();
        $('.thingsToDoPopup').css({ 'opacity': '1', 'z-index': '999' });

        // $('.thingsToDoPopup').append(thingstodoURL);
        //console.log('thingstodoURL...........',thingstodoURL);
        //$(".thingsToDoPopup").load("" + +thingstodoURL'+ div.things-to-do-wrapper");
        //$( '.thingsToDoPopup').append(thingstodoURL);
        $("body").addClass("noscroll");
        $("html").addClass("noscroll");
        // var url = pagelink + "index.html";
        if ($(".thingstoDo-popupsection").attr('data-href') != null && $(".thingstoDo-popupsection").attr('data-href') != "" && $(".thingstoDo-popupsection").attr('data-href') != "undefined") {
            var thingstodoURL = $(".thingstoDo-popupsection").attr('data-href');
        } else {
            var thingstodoURL = $(".thingstoDo-popupsection").attr('href');
        }

        $.ajax({
            url: thingstodoURL,
            type: "GET",
            dataType: "html"
        }).done(function(data) {
            // $(".thingsToDoPopup").html($(data).find('.things-to-do-wrapper'));
            $(".things-to-do-page-wrapper").html($(data).find('.things-to-do-wrapper'));
        });

        // $('html, body').animate({ scrollTop: $('.thingsToDoPopup').position().top - 40 }, 'slow');

    });
    $('.things-to-do-overlay-close-icon').click(function() {
        $('.thingsToDoPopup').hide();
        $('.popup-background').hide();
        $("body").removeClass("noscroll");
        $("html").removeClass("noscroll");
    });

    // subnavigation on scroll active menu items
    var $sections = $('.submenu-stick-header-scroll');
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        var $currentSection;
        $sections.each(function() {
            var divPosition = $(this).offset().top;

            if (divPosition - 101 < currentScroll) {
                $currentSection = $(this);

                var id = $currentSection.attr('id');
                $('.submenu-compinent ul li a').removeClass('active');
                $("[data-href=" + id + "]").addClass('active');

                var valueText = $("[data-href=" + id + "]").html();
                $('#submenu-selec .active-sub-navication .sub').html(valueText);
				
				$("#submenu-selec .active-sub-navication").addClass("active");   
            }
        })
    });

    $(".amenities-carousel .view-three-sixty").on("click", function() {

        if ($(window).width() >= 768) {
            var width = $(".amenities-carousel .owl-item.active .amenities-img").width() + $(".amenities-carousel .owl-item.active .amenities-carousel-description").outerWidth();
            var height = $(".amenities-carousel .owl-item.active .amenities-img").height();
        }


        if ($(window).width() >= 768) {
            $(".amenities-carousel .owl-item.active .panel-threesixty iframe").width(width + "px");
            $(".amenities-carousel .owl-item.active .panel-threesixty iframe").height(height + "px");
            $(".amenities-carousel .owl-item.active .panel-threesixty").show();
        } else {

            $(".amenities-tour-url-detail-popup-widget iframe").height("100%");
            $(".amenities-tour-url-detail-popup-widget iframe").width("100%");
            var src = $(".amenities-carousel .owl-item.active .panel-threesixty iframe").attr("src");
            $(".amenities-tour-url-detail-popup-widget iframe").attr("src", src);
            $(".amenities-tour-url-detail-popup-widget").fadeIn();
            $("body").addClass("noscroll");
            $("html").addClass("noscroll");
        }


        if ($(window).width() >= 768) {
            $(".amenities-carousel .owl-item.active .amenities-img").hide();
            $(".amenities-carousel .owl-item.active .amenities-carousel-description").hide();
        }
    });


    $(".amenities-carousel .close-three-sixty,.amenities-tour-url-detail-popup-widget .close-three-sixty").click(function() {

        if ($(window).width() >= 768) {
            $(".amenities-carousel .owl-item.active .amenities-img").show();
            $(".amenities-carousel .owl-item.active .amenities-carousel-description").show();
            $(".amenities-carousel .owl-item.active .panel-threesixty").hide();
        } else {
            $(".amenities-tour-url-detail-popup-widget").fadeOut();
            $("body").removeClass("noscroll");
            $("html").removeClass("noscroll");

            // amenities-carousel.owl-carousel view 360 
            $('html,body').animate({
                scrollTop: $(".amenities-carousel.owl-carousel ").offset().top - 120 + 'px'
            });

        }


    });

});


$(window).on("load", function() {
    if ($(window).width() <= 767) {

        var localpassportimagewidth = $("#thingstodo .localpassport-image img").width();
        $("#thingstodo .localpassport-content").width(Math.ceil(localpassportimagewidth) + "px");
        var width = $("#thingstodo .localpassport .container").width() - $("#thingstodo .localpassport-image img").width();
        $("#thingstodo .localpassport-content").css("margin-left", width / 2 + "px");


        var featuresimagewidth = $(".thingstodo.container").width() - $(".thingstodo.container .features-image img").width();
        $(".thingstodo.container .features-content ").css("padding-left", featuresimagewidth / 2 + "px");
        $(".thingstodo.container .features-content ").css("padding-right", featuresimagewidth / 2 + "px");

        var widthnewdeal = $(".deal-detail-component .deal-detail .container").width() - $(".deal-detail .deal-detail-image img").width();
        var dealimagewidth = $(".deal-detail .deal-detail-image img").width();
        $(".deal-detail .deal-detail-content").outerWidth(Math.ceil(dealimagewidth) + "px");
        $(".deal-detail-component .deal-detail .container").css("margin-left", widthnewdeal / 2 + "px");

    }

    $(".container-fluid.detail-overview").on("click", function() {

        $('#submenu-selec ul').toggle("slow");
    })

    $(".detail-overview-exclusive.village-exclusive-section").on("click", function() {
        $('#submenu-selec ul').toggle("slow");
    });

    $(".live-like-local-component.submenu-stick-header-scroll").on("click", function() {
        $('#submenu-selec ul').toggle("slow");
    });

    var width = $(".amenities-carousel .view-three-sixty").outerWidth() / 2;
    $(".amenities-carousel .view-three-sixty").css("margin-left", "-" + width + "px");



})

$(window).resize(function() {

    if ($(window).width() <= 767) {
        var localpassportimagewidth = $("#thingstodo .localpassport-image img").width();
        $("#thingstodo .localpassport-content").width(Math.floor(localpassportimagewidth) + "px");
        var width = $("#thingstodo .localpassport .container").width() - $("#thingstodo .localpassport-image img").width();
        $("#thingstodo .localpassport-content").css("margin-left", width / 2 + "px");

        var featuresimagewidth = $(".thingstodo.container").width() - $(".thingstodo.container .features-image img").width();
        $(".thingstodo.container .features-content ").css("padding-left", featuresimagewidth / 2 + "px");
        $(".thingstodo.container .features-content ").css("padding-right", featuresimagewidth / 2 + "px");

        var widthnewdeal = $(".deal-detail-component .deal-detail .container").width() - $(".deal-detail .deal-detail-image img").width();
        var dealimagewidth = $(".deal-detail .deal-detail-image img").width();
        $(".deal-detail .deal-detail-content").outerWidth(Math.ceil(dealimagewidth) + "px");
        $(".deal-detail-component .deal-detail .container").css("margin-left", widthnewdeal / 2 + "px");

    } else {
        $("#thingstodo .localpassport-content").width("auto");
        $("#thingstodo .localpassport-content").css("margin-left", 0);
        $(".thingstodo.container .features-content ").css("padding-left", "30px");
        $(".thingstodo.container .features-content ").css("padding-right", "30px");
        $(".deal-detail .deal-detail-content").outerWidth("41.6666%");
        $(".deal-detail-component .deal-detail .container").css("margin-left", 0);
    }

    var width = $(".amenities-carousel .view-three-sixty").outerWidth() / 2;
    $(".amenities-carousel .view-three-sixty").css("margin-left", "-" + width + "px");

})