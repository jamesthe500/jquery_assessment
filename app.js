$(document).ready(function(){

var clickNum=0;

	$("#firstButton").on('click', function(){
		clickNum ++;
		$(".buttonBox").append().html("<div class='newButtons'><p>Here are the number of clicks: " + clickNum + "</p><input id='secondButton' type='button' value='Change Color'> <input id='thirdButton' type='button' value='Remove'>");
		$("body").addClass("greenClass");
		$("#secondButton").on('click', function(){
			/*console.log("What's in there? "+ ($("#firstButton").data()).buttonToggle);*/
			if (($("#firstButton").data().buttonToggle) == 2){
				/*console.log("running a"+ $("#firstButton").data());*/
				$(this).closest("div").removeClass("redClass");
				$("#firstButton").data("buttonToggle", 1);
			} else {
				/*console.log("running b"+ $("#firstButton").data());*/
				$(this).closest("div").addClass("redClass");
				$("#firstButton").data("buttonToggle", 2);
			}
		});
		$("#thirdButton").on('click', function(){
			$(this).closest("div").remove();
		});
	});
});
/*
console.log($("#firstButton").data());*/