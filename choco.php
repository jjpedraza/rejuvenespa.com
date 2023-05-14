<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';
//Configuracion de PayPal del  Articulo:
$value          =  1;
$name           =   "Depilacion con Cera Española de Chocolate";
$description    =   "";
$quantity       =   '1';
// -------------------------------------
?>

<div class="jumbotron text-center container" style="
    font-size: 16pt; margin-top:50px;">
    <h1>DEPILACION CON CERA ESPAÑOLA DE CHOCOLATE</h1>
    
   
<p>Este tipo de depilación con chocolate, al dejar la piel mucho más suave, hidratada y bella, puede realizarse en distintas zonas del cuerpo. Permite extraer el vello de raíz tanto en áreas delicadas de cuerpo y rostro, así que además de las piernas o los brazos, es posible aplicarla sobre ingles, axilas y labio superior. La cera se aplica a una temperatura tibia por lo que no hay ningún riesgo de causar quemaduras o irritaciones en la piel.Adelgaza el vello y con el uso deja de salir vello.</p>


</div>



<div id="servicio_container">    
    <div id="elarticulo">'    
    <!-- <img src="img/choco2.webp" style="height:100%; margin:10px; border-radius:5px;"> -->
    <img src="img/choco1.png" style="height:100%; margin:10px; border-radius:5px;">
        <p>La cera al chocolate contiene cera de abejas y extracto de cacao, principal componente del chocolate.
Sobre nuestra piel tienen efectos:</p>
<ul style="text-align:left">
<li>Lenitivos o calmantes.</li>
<li>Hidratantes ya que nutre en profundidad nuestra epidermis.</li>
<li>Suavidad y delicadeza durante la depilación.</li>
<li>Ayuda a la nutrición de pieles secas o muy secas.</li>
<li>Arranque del vello de raíz completamente seguro y nada agresivo.</li>

<li>Fácil manejo.</li>

<li>Propiedades calmantes.</li>

<li>Propiedades hidratantes.</li>

<li>Apta para pieles muy secas.</li>

<li>Deja un agradable aroma en la piel.</li>
</ul>
    </div>
        <?php
            if ($value>0){
                include("_formulariodepago.php"); 
            }
        ?>
    
</div>






</div>



    <?php include("_footer.php"); ?>