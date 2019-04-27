$(document).ready(function() {

    $.ajax({
        url: "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            console.log('result.................', result);
            var counter = 0;

            var result1 = result.company;
            var result2 = result.product;
            var result3 = result.developers;




            // $.each(result, function(i) {
            //     console.log('i.................', i);
            //     $("ul.menu-main-item").append('<li class="menu-sub-item"><a href="#" alt="1">' + i + '</a></li>');
            //     // $("li.menu-sub-item").append('<ul><li><a href="#" >' + item[counter].title + '</a></ul></li>');
            //     console.log('item.................', item);
            //     for (let s = 0; s < item.length; s++) {
            //         console.log('item.ssssssss................', s);
            //         $("li.menu-sub-item").append('<ul><li><a href="#" >' + s + '</a></ul></li>');
            //     }

            //     // $("li.menu-sub-item").append('<ul><li><a href="#" >' + item[counter].title + '</a></ul></li>');
            //     // $("li.menu-sub-item").append('<ul><li><a href="#" >' + item[counter].title + '</a></ul></li>');
            //     // counter++;


            // });




            // var test = result;

            // console.log('m.................', test);

            // for (var m = 0; m < test.length; m++) {
            //     console.log('ssssssssssm.................', m);

            // };


            // new
            // $(function() {

            // function parseMenu(ul, menu) {
            //     for (var i = 0; i < menu.length; i++) {
            //         var li = $(ul).append('<li><a href="' + menu[i].link + '">' + menu[i].name + '</a></li>');
            //         if (menu[i].sub != null) {
            //             var subul = $('<ul id="submenu' + menu[i].link + '"></ul>');
            //             $(li).append(subul);
            //             parseMenu($(subul), menu[i].sub);
            //         }
            //     }
            // }

            // var menu = $('#menu');
            // parseMenu(menu, JSON.menu);


            // });




            // new

            $.each(result, function(i, item) {
                console.log('i.................', i);
                console.log('item.................', item);
                // $("ul.menu-main-item").append('li class=" li.items-product" <a>' + i + ' </a> </li>');
                // $("ul.menu-sub-item-wrap li.menu-sub-item").append('<a>' + item.title + ' </a>');

                $("ul.menu-main-item").append('<li class="menu-sub-item"><a href="#" alt="1">' + i + '</a></li>');


                // $(".testSan").append('<ul><li class="menu-sub-item"><a href="#" alt="1">' + i + '</a></li></ul>');
                for (var k = 0; k < item.length; k++) {
                    // $("li.menu-main-item").append('<ul><li class="itemsss"><a href="#" alt="1">' + item[k].title + '</a></ul></li>');


                    // $("li.menu-sub-item").append('<ul><li class="itemsss"><a href="#" alt="1">' + item[k].title + '</a></ul></li>');

                    $("li.menu-sub-item").append('<ul class="ddFadeSlow"><li class="itemsss"><div class="itemsss"><h3 class = "linkTitle" >' + item[k].title + ' <p class = "linkSub" >' + item[0]["sub-title"] + ' </div></li></ul>');
                    $("li.menu-sub-item").append('<ul class="ddFadeSlow"><li class="itemsss"><div class="itemsss"><h3 class = "linkTitle" >' + item[k].title + ' <p class = "linkSub" >' + item[0]["sub-title"] + ' </div></li></ul>');


                    console.log(item[k].title);
                    console.log('subbbbbbbbbbbbbb...', item[0]["sub-title"]);
                }



                // <
                // div class = "productLinkContent" >
                //     <h3 class = "linkTitle" > Payments < /h3> 
                // <p class = "linkSub" > < /p></p>A complete payments platform engineered
                // for & nbsp;
                // growth. < /p> <
                //     /div>



                // console.log("title==" + item[counter].title + "pppppppp" + i)
                //$("ul.menu-main-item").append('<li class="menu-sub-item"><a href="#" alt="1">' + i + '</a></li>');

                // if ("undefined" !== typeof item[counter] && typeof item[counter].title) {
                //     console.log('items..................item[counter].title ', item[counter].title);
                //     console.log("qqqq" + item[counter].title);

                //     // $("div").append('<p class="">' + item[counter].title + '</p></div>');


                //     $("li.menu-sub-item").append('<ul><li><a href="#" alt="1">' + item[counter].title + '</a></ul></li>');

                //     // $("li.menu-sub-item").append('<ul class="bgs"><li class="menu-sub-item-san"><a href="#" alt="1">' + item[counter].title + '</a></ul></li>');
                //     // $("ul.bgs").append('<li class="menu-sub-item-san"><a href="#" alt="1">' + item[0]["sub-title"] + '</a></li>');

                // }
                counter++;

            });
        },
        error: function() {
            console.log("No");
        }
    });
});