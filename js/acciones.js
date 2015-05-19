// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	if ($('#divjuego'))
	{
		$('#colorrosa').on('click', function(){
			$('#resultado').append('1')
		});
		$('#colorrojo').on('click', function(){
			$('#resultado').append('2')
		});
		$('#colorazul').on('click', function(){
			$('#resultado').append('3')
		});
		$('#colormorado').on('click', function(){
			$('#resultado').append('4')
		});
	}
	
//}); 
});

