$(document).ready(function(){

  var sliderSettings = {
    arrows: false,
    dots: true,
    width: 750,
  }

  console.log("test");

  $(".right").click(function(){
    let curPos = $(".slide-first").css("margin-left");

    curPos = curPos.substring(0, curPos.length - 2);
    curPos = Number(curPos);

    let num = $(this).parent().children(".slide-container").children().length;

    if(Math.abs(curPos / sliderSettings.width) < num - 1){

    curPos = curPos - sliderSettings.width + "px";

    console.log(curPos);

    $(".slide-first").css("margin-left", curPos);

  }

  });

    $(".left").click(function(){
    let curPos = $(".slide-first").css("margin-left");

    curPos = curPos.substring(0, curPos.length - 2);
    curPos = Number(curPos);

    if(curPos < 0){

    curPos = curPos + sliderSettings.width + "px";

    $(".slide-first").css("margin-left", curPos);

  }

  });

});
