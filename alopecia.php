<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';

//Configuracion de PayPal del  Articulo:
$value          =   '1';
$name           =   'Alopecia';
$description    =   'Faciales y Corporales';
$quantity       =   '1';
// -------------------------------------
?>

<div id="servicio_container">    
<div id="elarticulo">
<div class="container">
  <h2 class="text-center">Alopecia: causas y factores</h2>
  <p>La alopecia es una condición médica que se caracteriza por la pérdida anormal de cabello en diferentes partes del cuerpo. Es comúnmente asociada con la pérdida del cabello en el cuero cabelludo, pero también puede afectar a otras áreas como la barba, cejas, pestañas, entre otras. La alopecia puede afectar tanto a hombres como a mujeres, y puede ser causada por una variedad de factores.</p>
  <img src="img/alopecia.jpg" alt="Hilos magicos" class="img-fluid">  
</div>
</div>

    <?php  //Si tiene precio se escribe el Formullario de PAgo
    if ($value>0){
      include("_formulariodepago.php"); 
    } 
    ?>
</div>
















<?php include("_footer.php"); ?>
