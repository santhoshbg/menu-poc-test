$(document).ready(function() {

    $.ajax({
        url: "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            console.log('result.................', result);
            var ul_main = $("<ul class='depth-0'></ul>");

            $.each(result, function(key, val) {
                console.log('key.................', key);
                console.log('val.................', val);
                var li = $("<li>", { id: 'li' + key, text: key });
                console.log('key.................', key);

                // $("ul.menu-main-item").append('<li class="menu-sub-item"><a href="#" alt="1">' + key + '</a></li>');

                var ul = $("<ul>", { class: 'depth-1' });
                for (var k = 0; k < val.length; k++) {

                    // console.log('kkkkkkkkkk.................', k);
                    console.log('val[k].title .................', val[k].title);
                    console.log('item[0]["sub-title"] .................', val[0]["sub-title"]);
                    // $("li.menu-sub-item").append('<ul class="ddFadeSlow"><li class="itemsss"><div class="itemsss"><h3 class = "linkTitle" >' + val[k].title + ' <p class = "linkSub" >' + val[0]["sub-title"] + ' </div></li></ul>');
                    ul.append('<li class="">' + val[k].title + '</li>');
                    ul.append("<p>" + val[0]["sub-title"] + "</p>");


                }

                ul.appendTo(li);
                // $.each(val.title, function(key, title) {
                //     console.log('kkkkkkkkkk.................', val.title);
                //     ul.append("<li>" + val[title].title + "</li>");
                // });


                if (val.title != null) {
                    var ul = $("<ul>", { class: 'depth-1' });

                    $.each(val.title, function(key, title) {
                        ul.append("<li>" + val[title].title + "</li>");
                    });

                    ul.appendTo(li);
                }
                li.appendTo(ul_main);
            });

            $("<nav></nav>").append(ul_main).appendTo('#menu');

        }
    });
});