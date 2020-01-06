<?php
/*$_SERVEUR
header('Location: https://www.uimainon.com/');*/
require('controller/controller.php');
//header('Location: https://www.uimainon.com/index.php');

try { 
    if (isset($_GET['action'])) 
    {

        //*******************************************************************************
        // si on veut envoyer un mail
        //*******************************************************************************
        if ($_GET['action'] == 'sendMail')
        {
            if(isset($_POST['userMail']) && isset($_POST['userName']) && isset($_POST['userMess']))
            {

                sendMail($_POST['userMail'], $_POST['userMess'], $_POST['userName']);

            }
            else
            {
                throw new Exception('Le mail n\'a put être envoyé...');
            }
        }

    }
    else
    {
        home();
    }
}
catch(Exception $e) { // S'il y a eu une erreur, alors...
echo 'Erreur : ' . $e->getMessage();
/*$errorRouteur = 'Erreur : ' . $e->getMessage();
    spaceHome($errorRouteur);*/
}