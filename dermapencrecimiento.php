<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';

//Configuracion de PayPal del  Articulo:
$value          =   '1';
$name           =   'Dermapen con factores de crecimiento de placenta';
$description    =   'Faciales y Corporales';
$quantity       =   '1';
// -------------------------------------
?>

<div id="servicio_container">    
    <div id="elarticulo">
    <div class="container">
  <h3 class="text-center">Dermapen con factores de crecimiento de placenta</h3>
  
  <div class="row">
  <img src="img/3922026_s-ogp.png" alt="Dermapen con factores de crecimiento de placenta" class="img-fluid">    
    <div class="col-md-6">
      <p style="text-align:justify;">Los factores de crecimiento de placenta son proteínas que se encuentran en la sangre del cordón umbilical y la placenta.</p>
      <p style="text-align:justify;">El Dermapen es un dispositivo de belleza que utiliza agujas muy finas para perforar la piel y estimular la producción de colágeno y elastina. La combinación de Dermapen y factores de crecimiento de placenta es una técnica que ha ganado popularidad en los últimos años debido a sus beneficios para la piel.</p>
      <p style="text-align:justify;">La aplicación de factores de crecimiento de placenta mediante Dermapen se realiza en varias sesiones que se programan en función del objetivo del tratamiento y las necesidades de la piel del paciente. Durante la sesión, el Dermapen perfora la piel en pequeñas áreas y los factores de crecimiento se aplican en la piel. La combinación de ambas técnicas permite que los factores de crecimiento penetren en la piel y lleguen a las capas más profundas, donde pueden actuar en las células y tejidos que necesitan ser reparados.</p>
      <p style="text-align:justify;"Los beneficios de la combinación de Dermapen y factores de crecimiento de placenta son varios, entre ellos:</p>
</div>  
    <div class="col-md-6">
      <ul>
        <li style="text-align:left;">Mejora la apariencia de la piel: al promover la producción de colágeno y elastina, se reduce la apariencia de arrugas, líneas finas y cicatrices.</li>
        <li style="text-align:left;">Estimula la regeneración celular: los factores de crecimiento promueven la regeneración celular y la renovación de la piel, lo que puede mejorar su apariencia general.</li>
        <li style="text-align:left;">Reduce el daño solar: los factores de crecimiento pueden ayudar a reducir los efectos del daño solar en la piel, como manchas y arrugas prematuras.</li>
        <li style="text-align:left;">Mejora la textura de la piel: la combinación de Dermapen y factores de crecimiento puede mejorar la textura de la piel, haciéndola más suave y luminosa.</li>
        <p style="text-align:left;">Reducción de cicatrices y estrías: el Dermapen puede mejorar la apariencia de cicatrices y estrías al estimular la producción de colágeno y elastina en la piel.</li>
      </ul>
      <p style="text-align:justify;">En resumen, la combinación de Dermapen y factores de crecimiento de placenta es una técnica efectiva para mejorar la apariencia y la salud de la piel. Sin embargo, es importante que este tipo de tratamientos sean realizados por profesionales capacitados y en instalaciones seguras y acreditadas para garantizar la seguridad del paciente.</p>
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
