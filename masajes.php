<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';
?>

<div class="jumbotron text-center container" style="color: #97d700;
    font-size: 16pt; margin-top:50px;">
    <h1>Masajes Corporales</h1>
    <p>Bienvenidos a REJUVENESPA, donde te ofrecemos una amplia variedad de tratamientos de masaje para mejorar tu salud física y mental. En nuestro spa, podrás disfrutar de tratamientos como el Masaje Relajante, Masaje con Aromaterapia, Masaje Reductivo, Masaje de Moldeo Corporal (Lipoescultura sin bisturí), Masaje con Presoterapia, Masaje de Piedras Calientes, Masaje Sport, Masaje de Piernas Cansadas y Masaje Descontracturante.</p>
    <p style="color:gray; font-size:10pt;">
        Con el Masaje Relajante y el Masaje con Aromaterapia podrás aliviar la tensión muscular, reducir el estrés y mejorar la circulación sanguínea. Si buscas reducir medidas y moldear tu figura, el Masaje Reductivo y el Masaje de Moldeo Corporal son perfectos para eliminar la celulitis y reducir la grasa localizada. El Masaje con Presoterapia combina la presión de aire y el masaje para mejorar la circulación sanguínea y reducir la retención de líquidos.
    </p>    

    <p style="color:gray; font-size:10pt;">
        Para aquellos que necesitan aliviar la tensión muscular y las contracturas, ofrecemos el Masaje Descontracturante y el Masaje Sport. El Masaje de Piernas Cansadas es ideal para aquellos que pasan muchas horas de pie o sentados, mientras que el Masaje de Piedras Calientes combina el masaje relajante con el uso de piedras calientes para una experiencia de bienestar completa.
    </p>
    <p style="color:gray; font-size:10pt;">
        En REJUVENESPA, nos preocupamos por tu bienestar y queremos ayudarte a sentirte mejor que nunca. ¡Contáctanos para reservar tu cita hoy mismo y comienza a disfrutar de los beneficios de nuestros tratamientos de masaje!
    </p>
</div>
<div class="container">
<?php
// Lee el contenido del archivo JSON
$json = file_get_contents('masajes.json');

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
          <a href="buy.php?c=faciales&id=<?php echo $item['IdServicio']; ?>" class="btn btn-primary btn-block"><b>Mas Informacion</b>... <img src="img/paypal.fw.png" style="width:50%;"></a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>




</div>



    <?php include("_footer.php"); ?>