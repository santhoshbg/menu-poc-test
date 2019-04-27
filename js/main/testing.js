$(document).ready(function() {
    $.ajax({
        url: "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            // console.log('result.................', result);
            var ul_main = $("<li class='navSection'></li>");
            $.each(result, function(key, val) {
                var li = $("<li>", { id: 'li' + key, text: key });
                console.log('li......', li);
                var ul = $("<ul>", { class: 'depth-1' });
                for (var k = 0; k < val.length; k++) {
                    ul.append('<div class="menu-icons"><svg viewBox="0 0 48 48"><path fill="#87BBFD" class="hover-fillLight" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"></path><path fill="#555ABF" class="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z"></path><path fill="#FFF" d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"></path></svg><button class="item-products-link">' + val[k].title + '</button>'+ '<span class="item-sub-title">' + val[0]["sub-title"] + '</div>');
                    // ul.append('<div class="menu-text"><button class="rootLink item-products hasDropdown colorize" data-dropdown="products" aria-haspopup="true" aria-expanded="false">' + val[k].title + '</button></div>');
                    // ul.append('<span class="item-sub-title">' + val[0]["sub-title"] + '</span>');
                }
                ul.appendTo(li);
                if (val.title != null) {
                    $.each(val.title, function(key, title) {
                        ul.append("<li>" + val[title].title + "</li>");
                    });
                }
                li.appendTo(ul_main);
            });
            $('<li class="navRoot bgs">').append(ul_main).appendTo('#menu');
        }
    });


    /* On hover apply a class to the dropdown '.hov' */
    // $('li.navSection li#liproduct, li#lidevelopers, li#licompany').hover(function() {
    //     // alert('hhhhhhhhhhhhhhh');
    //     $('ul.depth-1').show();
    //     // var el = $(this).children('ul');
    //     // // check if it has a class of .hov 
    //     // if (el.hasClass('hov')) {
    //     //     $(el).removeClass('hov');
    //     // } else {
    //     //     $(el).addClass('hov');
    //     // }
    // });

    setTimeout(function() {
        $('li.navSection li#liproduct, li#lidevelopers, li#licompany').mouseenter(function() {
            $("ul.depth-1").hide(0);
            $(this).children("ul.depth-1").show(0);
        }).mouseleave(function() {
            $("ul.depth-1").hide(0);
        });
    }, 1500);

    

    // $(".popClose").click(function(){
    //     $("#menu").hide();
    //   });
     

      $(".navbar-toggle-menu").click(function(){
        $("#menuWrapper").toggle();
      });
   
});













// $(document).ready(function() {

//     $.ajax({
//         url: "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",
//         type: 'GET',
//         cache: false,
//         dataType: 'json',
//         success: function(result) {
//             console.log('result.................', result);
//             var ul_main = $("<ul class='depth-0'></ul>");

//             $.each(result, function(key, val) {
//                 console.log('key.................', key);
//                 console.log('val.................', val);
//                 var li = $("<li>", { id: 'li' + key, text: key });
//                 console.log('key.................', key);

//                 // $("ul.menu-main-item").append('<li class="menu-sub-item"><a href="#" alt="1">' + key + '</a></li>');

//                 var ul = $("<ul>", { class: 'depth-1' });
//                 for (var k = 0; k < val.length; k++) {

//                     // console.log('kkkkkkkkkk.................', k);
//                     console.log('val[k].title .................', val[k].title);
//                     console.log('item[0]["sub-title"] .................', val[0]["sub-title"]);
//                     // $("li.menu-sub-item").append('<ul class="ddFadeSlow"><li class="itemsss"><div class="itemsss"><h3 class = "linkTitle" >' + val[k].title + ' <p class = "linkSub" >' + val[0]["sub-title"] + ' </div></li></ul>');
//                     ul.append('<li class="">' + val[k].title + '</li>');
//                     ul.append("<p>" + val[0]["sub-title"] + "</p>");


//                 }

//                 ul.appendTo(li);
//                 // $.each(val.title, function(key, title) {
//                 //     console.log('kkkkkkkkkk.................', val.title);
//                 //     ul.append("<li>" + val[title].title + "</li>");
//                 // });


//                 if (val.title != null) {
//                     var ul = $("<ul>", { class: 'depth-1' });

//                     $.each(val.title, function(key, title) {
//                         ul.append("<li>" + val[title].title + "</li>");
//                     });

//                     ul.appendTo(li);
//                 }
//                 li.appendTo(ul_main);
//             });

//             $("<nav></nav>").append(ul_main).appendTo('#menu');

//         }
//     });
// });