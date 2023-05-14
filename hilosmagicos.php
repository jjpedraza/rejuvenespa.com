<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';

//Configuracion de PayPal del  Articulo:
$value          =   '1';
$name           =   'Hilos magicos';
$description    =   'Faciales y Corporales';
$quantity       =   '1';
// -------------------------------------
?>

<div id="servicio_container">    
<div id="elarticulo">
<div class="container">
		<h1>Tratamientos con hilos mágicos superficiales</h1>
		<img src="img/hilosmagicos.jpg" alt="Hilos mágicos superficiales" class="img-fluid">
		<p class="text-left">Los hilos mágicos superficiales son una técnica de rejuvenecimiento facial no invasiva que consiste en la inserción de hilos en la piel para estimular la producción de colágeno y elastina. Estos hilos están hechos de polidioxanona (PDO), un material biocompatible y reabsorbible que se utiliza en cirugía desde hace años.</p>
		<p class="text-left">La colocación de los hilos se realiza mediante una aguja fina, lo que minimiza el dolor y no requiere anestesia general. La técnica es segura y efectiva para mejorar la flacidez facial, las arrugas y las líneas de expresión. Además, tiene un efecto lifting inmediato que se va acentuando con el paso de los días.</p>
		<p class="text-left">La duración del tratamiento es de aproximadamente una hora y los resultados pueden durar de 12 a 18 meses. Los hilos son reabsorbidos por el organismo y, al mismo tiempo, estimulan la producción de colágeno y elastina, lo que prolonga los efectos del tratamiento.</p>
		<p class="text-left">Los hilos mágicos superficiales son una alternativa segura y efectiva a la cirugía estética para aquellas personas que buscan un tratamiento antienvejecimiento no invasivo y con resultados naturales. Si estás interesado en conocer más sobre esta técnica, no dudes en consultar con un especialista en medicina estética.</p>
	</div>

</div>

    <?php  //Si tiene precio se escribe el Formullario de PAgo
    if ($value>0){
      include("_formulariodepago.php"); 
    } 
    ?>
</div>
















<?php include("_footer.php"); ?>
