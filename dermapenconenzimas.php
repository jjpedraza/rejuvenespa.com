<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';

//Configuracion de PayPal del  Articulo:
$value          =   '1';
$name           =   'Dermapen con Enzimas';
$description    =   'Faciales y Corporales';
$quantity       =   '1';
// -------------------------------------
?>

<div id="servicio_container">    
    <div id="elarticulo">
    <div class="container my-5">
  <div class="row">
    <div class="col-md-6">
      <h3 class="mb-4">Dermapen con enzimas</h3>
      <p>El Dermapen es un dispositivo que se utiliza para realizar microperforaciones en la piel con el objetivo de mejorar su aspecto y textura. En combinación con enzimas, se puede potenciar su efecto y lograr resultados más efectivos.</p>
    </div>
    <div class="col-md-6">
      <img src="img/dermapen-micropuncion.jpg" alt="Dermapen con enzimas" class="img-fluid">
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-12">
      <h2 class="text-center mb-4">Razones para considerar el Dermapen con enzimas</h2>
      <ul>
        <li style="text-align:left;">Mejora la textura y el tono de la piel: El Dermapen utiliza microperforaciones para estimular la producción de colágeno, lo que puede ayudar a mejorar la textura y el tono de la piel, haciéndola lucir más suave y radiante.</li>
        <li style="text-align:left;">Trata diferentes problemas de la piel: El Dermapen con enzimas puede ser utilizado para tratar una variedad de problemas de la piel, incluyendo acné, arrugas, líneas finas, cicatrices y manchas oscuras. Las enzimas que se aplican en combinación con el Dermapen pueden ayudar a mejorar la efectividad del tratamiento.</li>
        <li style="text-align:left;">Resultados duraderos: A diferencia de otros tratamientos faciales que pueden requerir una serie de sesiones, los resultados del Dermapen con enzimas pueden ser duraderos y mejorar con el tiempo, ya que la producción de colágeno se estimula gradualmente en la piel.</li>
        <li style="text-align:left;">Sin tiempo de inactividad: Una de las mejores cosas del Dermapen con enzimas es que no hay tiempo de inactividad, lo que significa que puedes volver a tus actividades cotidianas inmediatamente después del tratamiento. Aunque se recomienda evitar la exposición al sol y aplicar protector solar durante algunos días después del tratamiento.</li>
        <li style="text-align:left;">Mejora la absorción de productos para el cuidado de la piel: Al utilizar microperforaciones en la piel, el Dermapen ayuda a aumentar la absorción de productos para el cuidado de la piel, lo que significa que los productos que uses después del tratamiento serán más efectivos.</li>
      </ul>
      <p>Si deseas tener una piel más saludable, radiante y joven, el Dermapen con enzimas es una excelente opción para considerar. No dudes en adquirirlo y disfrutar de todos los beneficios que puede ofrecerte. ¡Te aseguro que no te arrepentirás!</p>
    </div>
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
