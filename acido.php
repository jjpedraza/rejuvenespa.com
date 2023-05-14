<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';

//Configuracion de PayPal del  Articulo:
$value          =   '1';
$name           =   'Ácido hialurónico como relleno o como hidratación';
$description    =   'Faciales y Corporales';
$quantity       =   '1';
// -------------------------------------
?>

<div id="servicio_container">    
    <div id="elarticulo">
    <div class="container">
  <div class="row">
    <div class="col-md-6 text-left">
      <h3>Ácido hialurónico como relleno</h3>
      <p style="text-align:left">El ácido hialurónico se ha convertido en uno de los rellenos más populares en la medicina estética debido a su capacidad para suavizar arrugas y líneas finas, así como para restaurar el volumen y la firmeza de la piel.</p>
      <p style="text-align:left">Se puede utilizar para:</p>
      <ul>
        <li style="text-align:left">Rellenar las arrugas alrededor de la boca y de los ojos.</li>
        <li style="text-align:left">Corregir las líneas de expresión en la frente y entre las cejas.</li>
        <li style="text-align:left">Mejorar la apariencia de los pómulos y la mandíbula.</li>
      </ul>
      <p style="text-align:left">El ácido hialurónico se inyecta debajo de la piel en pequeñas cantidades utilizando una aguja fina. Los resultados son inmediatos y pueden durar de seis meses a un año, dependiendo del tipo de ácido hialurónico utilizado y de la zona tratada.</p>
    </div>
    <div class="col-md-6 text-left">
      <h3>Ácido hialurónico como hidratación</h3>
      <p style="text-align:left">Además de su uso como relleno, el ácido hialurónico también se puede utilizar para hidratar la piel y mejorar su aspecto y textura. A medida que envejecemos, nuestra piel pierde gradualmente su capacidad de retener la humedad, lo que puede provocar sequedad, opacidad y arrugas.</p>
      <p style="text-align:left">Al inyectar ácido hialurónico en la piel, se puede restaurar su capacidad de retener la humedad, lo que le da una apariencia más radiante y juvenil. También puede ayudar a reducir la apariencia de las líneas finas y las arrugas.</p>
      <p style="text-align:left">Este tipo de tratamiento se conoce como mesoterapia y se realiza inyectando pequeñas cantidades de ácido hialurónico en la piel utilizando una aguja fina. Los resultados son inmediatos y pueden durar de tres a seis meses.</p>
    </div>
  </div>
</div>
<div class="text-left">
  <img src="img/acido.jpg" alt="Ácido hialurónico como relleno o como hidratación" class="img-fluid">
</div>    

</div>

    <?php  //Si tiene precio se escribe el Formullario de PAgo
    if ($value>0){
      include("_formulariodepago.php"); 
    } 
    ?>
</div>
















<?php include("_footer.php"); ?>
