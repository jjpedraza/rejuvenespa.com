<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';

//Configuracion de PayPal del  Articulo:
$value          =   '1';
$name           =   'Hilos tensores';
$description    =   'Faciales y Corporales';
$quantity       =   '1';
// -------------------------------------
?>

<div id="servicio_container">    
<div id="elarticulo">
<h3>¿Qué son los hilos tensores y cómo funcionan?</h3>
<div class="row align-items-center">
  <div class="col-md-6">
    <img src="img/hilos.jpg" alt="Hilos tensores" class="img-fluid">
  </div>
  <div class="col-md-6">
    <p style="text-align:left;">Los hilos tensores son una técnica de rejuvenecimiento facial no quirúrgica que se ha popularizado en los últimos años. Consiste en la colocación de hilos finos en la piel a través de pequeñas incisiones con el objetivo de tensar y levantar la piel.</p>
    <p style="text-align:left;">Estos hilos están hechos de material reabsorbible, por lo que con el tiempo se descomponen en el cuerpo sin dejar residuos. Estos hilos tienen pequeños "anclajes" que se adhieren a la piel, permitiendo que se realice la elevación y el tensado. Al tensar los tejidos, los hilos pueden mejorar la flacidez y la pérdida de firmeza en el rostro, el cuello y otras áreas del cuerpo.</p>
    <p style="text-align:left;">La colocación de los hilos tensores se realiza bajo anestesia local y no suele durar más de una hora. El proceso de recuperación es rápido, aunque se pueden presentar algunos efectos secundarios leves, como enrojecimiento, inflamación y hematomas.</p>
    <p style="text-align:left;">Es importante tener en cuenta que los hilos tensores no son una solución permanente y los resultados pueden durar entre 6 y 18 meses, dependiendo de cada caso. Sin embargo, esta técnica ofrece una alternativa menos invasiva a la cirugía plástica para aquellas personas que buscan mejorar la apariencia de su piel y reducir los signos del envejecimiento.</p>
  </div>
</div>

</div>

    <?php  //Si tiene precio se escribe el Formullario de PAgo
    if ($value>0){
      include("_formulariodepago.php"); 
    } 
    ?>
</div>
















<?php include("_footer.php"); ?>
