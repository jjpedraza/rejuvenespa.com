<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';
?>
<div class="container" style="margin-top:50px;">
<h1>Medicina Regnerativa</h1>
<p>La medicina regenerativa es una rama de la medicina que busca restaurar y regenerar tejidos y órganos dañados o enfermos, en lugar de simplemente tratar los síntomas. Se basa en la idea de que el cuerpo tiene la capacidad de curarse a sí mismo y que, a través de ciertas técnicas, se puede estimular y acelerar este proceso de curación.</p>
<!-- 
<p>Uno de los enfoques más prometedores en la medicina regenerativa es el uso de células madre mesenquimales. Estas células se encuentran en diferentes tejidos del cuerpo, como la médula ósea, el tejido adiposo y el cordón umbilical, y tienen la capacidad de diferenciarse en una variedad de tipos de células diferentes, como células óseas, cartilaginosas y musculares.</p>

<p>La terapia con células madre mesenquimales se ha utilizado con éxito para tratar una amplia variedad de enfermedades y afecciones, como lesiones en la médula espinal, enfermedades autoinmunitarias y trastornos neurodegenerativos como el Alzheimer y el Parkinson. La terapia se realiza mediante la extracción de células madre del propio cuerpo del paciente o de un donante, que luego se procesan y se inyectan en el área dañada.</p>

<p>Otra técnica utilizada en la medicina regenerativa es la sueroterapia, también conocida como terapia intravenosa de nutrientes. Esta técnica implica la administración intravenosa de una solución que contiene una combinación de vitaminas, minerales y otros nutrientes esenciales para el cuerpo. La sueroterapia se ha utilizado para tratar una variedad de afecciones, como la fatiga crónica, la depresión y la ansiedad, así como para mejorar el rendimiento deportivo y la recuperación después del ejercicio.</p>

<p>La quelación es otra técnica utilizada en la medicina regenerativa para tratar enfermedades y afecciones crónicas. La quelación implica la administración de un agente quelante, que es una sustancia que se une a metales pesados y otras toxinas en el cuerpo, eliminándolos del sistema. La quelación se ha utilizado para tratar enfermedades cardiovasculares, enfermedades neurodegenerativas y otras afecciones crónicas relacionadas con la acumulación de metales pesados y toxinas en el cuerpo.</p>

<p>En conclusión, la medicina regenerativa ofrece una variedad de enfoques innovadores para tratar enfermedades y afecciones crónicas, que van más allá del enfoque tradicional de la medicina. A través del uso de técnicas como la terapia con células madre mesenquimales, la sueroterapia y la quelación, se puede estimular y acelerar el proceso natural de curación del cuerpo, y ayudar a los pacientes a recuperar su salud y bienestar.</p> -->
</div>



<div class="container">
<?php
// Lee el contenido del archivo JSON
$json = file_get_contents('medicinaregenerativa.json');

// Convierte la cadena JSON en un array asociativo de PHP
$data = json_decode($json, true);

// Verifica si se ha producido un error al decodificar el JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    echo 'Error al decodificar el archivo JSON';
    exit;
}

?>
<div class="row">
  <?php foreach ($data as $item) { ?>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="<?php echo $item['Imagen1']; ?>" class="card-img-top" alt="Imagen del servicio">
        <div class="card-body">
          <h5 class="card-title"><?php echo $item['Nombre']; ?></h5>
          <p class="card-text"><?php echo $item['Recomendacion']; ?></p>
          
          <p class="card-text font-weight-bold">$<?php echo $item['Precio']; ?></p>
        </div>
        <div class="card-footer">
          <a href="buy.php?c=medicinaregenerativa&id=<?php echo $item['IdServicio']; ?>" class="btn btn-primary btn-block"><b>Mas Informacion</b>... <img src="img/paypal.fw.png" style="width:50%;"></a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>



</div>




    <?php include("_footer.php"); ?>