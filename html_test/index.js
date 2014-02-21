$(document).ready(function(){
	$("p1").hide();
	$("button").click(function(){		
		if ($("p1").is(":hidden")){
			$("p1").show();
			$("p1").css("background-color", "red");
			$(this).css("background-color", "pink");
		} else{
			$("p1").hide();
			$(this).css("background-color", "green");
		}

		
	});
});
