<?php
//declare our variables
$name = $_POST['name'];
$email = $_POST['email'];
$message = nl2br($_POST['message']);
//get todays date
date_default_timezone_set('America/Los_Angeles');
$date = date("l, F j, Y, g:i a") ;
//set a title for the message
$subject = "Contact: League of Legend Question";
$body = "From $name, \n\n$message";
$headers = 'From: '.$email.'' . "\r\n" .
    'Reply-To: '.$email.'' . "\r\n" .
	'Content-type: text/html; charset=utf-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

//put your email address here
mail("uclackipillowfight@gmail.com", $subject, $body, $headers);
?>
<!--Display a thankyou message in the callback -->
<div id="mail_response">
    <h3>Thank you <?php echo $name ?>!</h3><br />
    <contactfontp>We will answer your message as soon as possible.</contactfontp><br /><br /><br />
    <h5>Message sent on: </h5>
    <contactfontp><?php echo $date ?></contactfontp>
</div>    