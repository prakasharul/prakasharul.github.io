

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

    $('.carousel').carousel();


    $("#wordslider").wordsrotator({
					stopOnHover: true,
					words: ['Reliability ','Security','Quality','Satisfaction','Support'],
					animationIn: "rotateInDownLeft",
					animationOut: "rotateOutDownLeft"
				});
});