<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';
?>

<div class="jumbotron text-center" style="color: #97d700;
    font-size: 16pt; margin-top:50px;">
    <h1>Tratamientos Estéticos Avanzados</h1>
    <p>Mejora tu piel y siéntete más bella con nuestros tratamientos</p>
    <p style="color:gray; font-size:10pt;">
    Si buscas soluciones eficaces y duraderas para mejorar tu apariencia y sentirte más seguro/a de ti mismo/a, nuestros tratamientos de belleza son la solución perfecta. Desde rellenos y tensión facial hasta tratamientos para el cabello y la piel, tenemos todo lo que necesitas para lucir lo mejor posible. ¡Visítanos hoy y comienza tu transformación!
</p>
</div>
<div class="container">
<?php
// Lee el contenido del archivo JSON
$json = file_get_contents('facialesycorporales.json');

// Convierte la cadena JSON en un array asociativo de PHP
$data = json_decode($json, true);

// Verifica si se ha producido un error al decodificar el JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    echo 'Error al decodificar el archivo JSON';
    exit;
}

// // Recorre los elementos del array
// foreach ($data as $item) {
//     // Imprime los datos de cada elemento
    
//     echo "IdServicio: ". $item["IdServicio"]."<br>";
//     echo "Nombre: ". $item["Nombre"]."<br>";
//     echo "DescripcionCorta: ". $item["DescripcionCorta"]."<br>";
//     echo "DescripcionLarga: ". $item["DescripcionLarga"]."<br>";
//     echo "Imagen1: ". $item["Imagen1"]."<br>";
//     echo "Imagen2: ". $item["Imagen2"]."<br>";
//     echo "Precio: ". $item["Precio"]."<br>";
   
// }
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
          <a href="buy.php?c=facialesycorporales&id=<?php echo $item['IdServicio']; ?>" class="btn btn-primary btn-block"><b>Mas Informacion</b>... <img src="img/paypal.fw.png" style="width:50%;"></a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>




</div>



    <?php include("_footer.php"); ?>