<?php
require("fun_varclean.php");
require ("config_paypal.php");

$correo = VarClean($_POST['correo']);
$asunto = VarClean($_POST['asunto']);
$contenido = $_POST['contenido']."<br>".$footer_correo;
// $contenido = htmlspecialchars($_POST['correo_contenido'], ENT_QUOTES, 'UTF-8');
// $contenido ="test de contendo<br>otra linea";


// echo "Contenido procesado: ".$contenido;
// El mensaje

$cabeceras = "MIME-Version: 1.0" . "\r\n"; 
$cabeceras .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

$cabeceras.= 'From: Rejuvene Spa <noreply@rejuvenespa.com>' . "\r\n" .
    'Reply-To:'.$correo . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$success = mail($correo, $asunto, $contenido, $cabeceras);

if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo "ERROR al enviar el correo a ".$correo.": ".$errorMessage;   
    
} else {
    echo "Se notifico por correo a ".$correo."<br>";

}






?>