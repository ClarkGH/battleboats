$(document).ready(function(){
	bindEvents();
	setBattlefieldHeight();
	drawGameGrid();
})

function bindEvents(){
	$(window).resize(setBattlefieldHeight)
}

function setBattlefieldHeight(){
	var newHeight = $('#battlefield').width()
	$('#battlefield').css('height', newHeight)
}

function drawGameGrid(){
	$('#battlefield').append("<table class='game_grid'></table>")
	for(var row = 1; row <= 10; row++){
		$('.game_grid').append("<tr class='row'></tr>")
	}
	for(var cell = 1; cell <= 10; cell++){
		$('.row').append("<td class='cell'></td>")
	}
}