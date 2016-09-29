$(document).ready(function(){

var suneet = '<h1> Suneet Singal</h1><p style="width: 400px; color: white; float: left;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus eget sem eget egestas. Quisque a porta est. Vivamus libero lorem, pellentesque sit amet egestas eu, ullamcorper eu nunc. Vivamus commodo facilisis arcu nec bibendum. Integer tincidunt rutrum magna vitae vehicula. Integer urna quam, elementum sed massa vitae, bibendum blandit sem. Vestibulum ut scelerisque lacus, at ultrices tortor. Praesent luctus viverra est, nec consequat massa. Integer placerat nisi purus, eget blandit ligula imperdiet eget.</p><div style="outline: 1px solid white; width: 200px; height: 300px; float: left; margin-left: 20px; background-image: url(images/1.jpeg); background-size: cover; background-position: 350px center;"></div>';

var ramesh = '<h1> Ramesh Prasad</h1><p style="width: 400px; color: white; float: left;"> Nullam sollicitudin mollis neque, sed volutpat risus suscipit vel. Aenean posuere tortor sit amet porttitor porta. Aenean et eros ut est viverra tempus a ut diam. Etiam imperdiet nisi blandit leo maximus, et scelerisque justo consectetur. Aenean hendrerit iaculis orci id euismod. Sed vitae arcu placerat nibh semper semper. In mattis elementum pharetra.  Integer urna quam, elementum sed massa vitae, bibendum blandit sem. Vestibulum ut scelerisque lacus, at ultrices tortor.</p><div style="outline: 1px solid white; width: 200px; height: 300px; float: left; margin-left: 20px; background-image: url(images/ramesh.jpg); background-size: cover; background-position: -80px center;"></div>';

        $(".name").click(function(){

          console.log("hello");

             $(".name").removeClass("name-active");
             $(this).addClass("name-active");

             $(".team-names li").css("color", "white");
             $(this).css("color","#3863ba");

             if($(this).hasClass("suneet-tab")){
               $(".team-content").html(suneet);
             } else if ($(this).hasClass("ramesh-tab")) {
               $(".team-content").html(ramesh);
             } else if ($(this).hasClass("name3-tab")) {
               $(".board-info-container").html(name3);
             } else if ($(this).hasClass("name4-tab")) {
               $(".board-info-container").html(name4);
             } else if ($(this).hasClass("name5-tab")) {
               $(".board-info-container").html(name5);
             }
        });

});
