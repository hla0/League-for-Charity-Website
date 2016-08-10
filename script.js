$(function(){
	
	var notetimer = $('#notetimer'),
		ts = new Date(2014, 0, 11, 14),
		newYear = true;
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			message += "left until Pillow Fight!!!! GET READY!";
			
			notetimer.html(message);
		}
	});
	
});
