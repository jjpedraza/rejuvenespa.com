<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';

//Configuracion de PayPal del  Articulo:
$value          =   '100.00';
$name           =   'Paquete 1';
$description    =   'Spa sencillo';
$quantity       =   '1';
// -------------------------------------
?>

<div id="servicio_container">    
    <div id="elarticulo">
        <h2>Nombre del Articulo</h2>
        <img src="" style="">
        <p>Descripcion Larga del articulo</p>

    </div>

    <?php  //Si tiene precio se escribe el Formullario de PAgo
    if ($value>0){
      include("_formulariodepago.php"); 
    } 
    ?>
</div>



















<?php include("_footer.php"); ?>
