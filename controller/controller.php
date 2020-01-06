<?php
//*******************************************************
//Pour récupérer son mot de passe(envoie de mail à l'utilisateur)
function sendMail($userMail, $userMess, $userName)
{

	$errorMail = "";
	$errorName = "";
	$errorMess = "";

	if($userMail == '')
	{
		$errorMail = "Cela va être compliqué de vous répondre...";
	}
	if(($userMess == '')||($userMess == 'Pas de Sindarin, ni de Klingon ni de Dothraki...'))
	{
		$errorMess = "On aurait pas oublié le petit message?";
	}
	if($userName == '')
	{
		$errorName = "Votre nom?";
	}

	if(($errorMail == '') && ($errorName == '') && ($errorMess == ''))
	{
		//require('model/mail.php');
		$confirmation = "Votre e-mail a bien été envoyé !";
		sendMessage($userMail, $userMess, $userName);
	}

	$aError=array( 
		"errorMail" => $errorMail,
		"errorName" => $errorName,
		"errorMess" => $errorMess);

	echo json_encode($aError);
}
//*******************************************************************
function home()
{
	$confirmation = "";
	require('view/home.php');
}
//******************************************************************
 function sendMessage($userMail, $userMess, $userName)
 {
//echo "coucou";
 	ini_set( 'display_errors', 1 );

	error_reporting( E_ALL );

	$from = $userMail;

	$to = 'uimcaniia@gmail.com';

	$subject = $userName;

	$message = $userMess;

	$headers = "From:" . $from;

	mail($to,$subject,$message, $headers);
}