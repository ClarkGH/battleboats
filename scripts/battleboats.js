$(document).ready(function(){
	bindEvents();
	setBattlefieldHeight();
})

function bindEvents(){
	$(window).resize(setBattlefieldHeight)
}

function setBattlefieldHeight(){
	var newHeight = $('#battlefield').width()
	$('#battlefield').css('height', newHeight)
}