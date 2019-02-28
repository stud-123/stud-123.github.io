
  $(document).ready(function() {
  $('.post-module').hover(

  	function() {
  	$(".post-module .post-content").css({"position": "absolute", "bottom":"0"});
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  }, 			
	/*function () {
		window.alert("out");
    $(".post-module .post-content").css({"position": "absolute", "top": "0"});
	}*/

  );
  
});

