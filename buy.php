<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';


require("fun_varclean.php");
$IdServicio = VarClean($_GET['id']);
$ArchivoJSON = VarClean($_GET['c']);


$json = file_get_contents($ArchivoJSON.".json");
$data = json_decode($json, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo 'Error al decodificar el archivo JSON';
    exit;
}

$found =0;

$Nombre="";
$DescripcionCorta="";
$DescripcionLarga="";
$Imagen1="";
$Imagen2="";
$Precio=""; $Recomendacion="";

foreach ($data as $item) {
    // Imprime los datos de cada elemento
    // echo $item['IdServicio']."==".$IdServicio."<br>";
    if ($item['IdServicio']==$IdServicio)    {
        // $IdServicio= $item["IdServicio"];
        $Nombre= $item["Nombre"];
        $DescripcionCorta= $item["DescripcionCorta"];
        $DescripcionLarga= $item["DescripcionLarga"];
        $Imagen1= $item["Imagen1"];
        $Imagen2= $item["Imagen2"];
        $Precio= $item["Precio"];
        $Recomendacion= $item["Recomendacion"];
        $found=1;
    } else {

    }
    
   
}
if ($found==1){
//Configuracion de PayPal del  Articulo:
$value          =   $Precio;
$name           =   $Nombre;
$description    =   $DescripcionCorta;
$quantity       =   '1';
// -------------------------------------
    echo '
        <div id="servicio_container">    
            <div id="elarticulo">';
            echo '<h2>'.$Nombre.'</h2>';
            echo '<img src="'.$Imagen1.'" style="width:45%; margin:10px; border-radius:5px;">';
            if ($Imagen2<>'') {
                echo '<img src="'.$Imagen2.'" style="width:45%; margin:10px; border-radius:5px;">';
            }
            echo '<p style="text-align:justify;">'.$DescripcionCorta.'</p>';
            echo '<p style="text-align:justify;">'.$DescripcionLarga.'</p>';
            echo '<p style="text-align:justify;"><b>'.$Recomendacion.'</b></p>';

            echo '</div>';
        //Si tiene precio se escribe el Formullario de PAgo
            if ($value>0){
            include("_formulariodepago.php"); 
            } 
    echo '
        </div>';

} else {
    echo "<br><br><br><br><p>SERVICIO NO ENCONTRADO</p>";
}
?>




















<?php include("_footer.php"); ?>
