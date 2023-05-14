<?php include("_head.php"); ?> <?php include("_menu.php"); ?>
<?php require ("config_paypal.php"); echo '<script src="https://www.paypal.com/sdk/js?client-id='.$client_id.'&currency=MXN"></script>';
//Configuracion de PayPal del  Articulo:
$value          =  1;
$name           =   "Terapia Regenerativa Molecular";
$description    =   "";
$quantity       =   '1';
// -------------------------------------
?>

<div class="jumbotron text-center container" style="color: #97d700;
    font-size: 16pt; margin-top:50px;">
    <h1>Tratamientos con Terapia Regenerativa Molecular</h1>
    
    <p>La terapia molecular regenerativa es una técnica innovadora y prometedora que puede ayudar a tratar una amplia variedad de enfermedades y condiciones médicas. Si está interesado en explorar las opciones de tratamiento de la terapia molecular regenerativa, le invitamos a hablar con un especialista en la materia para determinar si esta técnica es adecuada para su caso específico.</p>

</div>



<div id="servicio_container">    
    <div id="elarticulo">'    
        <img src="img/celular.webp" style="height:100%; margin:10px; border-radius:5px;">
        <img src="img/celular2.jpg" style="height:230px; margin:10px; border-radius:5px;">
<p>La terapia molecular regenerativa es una técnica innovadora en la medicina que utiliza células y moléculas para promover la regeneración y la curación de diversos tejidos en el cuerpo humano. Esta técnica puede ser utilizada para tratar una amplia variedad de enfermedades y condiciones médicas, incluyendo:</p>

<p><b>Rejuvenecimiento</b>: La terapia molecular regenerativa puede ayudar a revertir los efectos del envejecimiento en la piel y otros tejidos, promoviendo la regeneración celular y mejorando la apariencia de la piel y otros tejidos.</p>

<p><b>Artritis Reumatoide</b>: La terapia molecular regenerativa puede ayudar a reducir la inflamación y promover la regeneración del tejido articular, lo que puede ayudar a aliviar los síntomas de la artritis reumatoide.</p>

<p><b>Lupus</b>: La terapia molecular regenerativa puede ayudar a reducir los síntomas del lupus y promover la regeneración del tejido dañado, lo que puede mejorar la calidad de vida de las personas con esta enfermedad autoinmune.</p>

<p><b>Diabetes</b>: La terapia molecular regenerativa puede ayudar a promover la regeneración de células productoras de insulina en el páncreas, lo que puede ser útil en el tratamiento de la diabetes.</p>

<p><b>Hipertensión</b>: La terapia molecular regenerativa puede ayudar a reducir la presión arterial y promover la regeneración de los vasos sanguíneos, lo que puede ayudar a prevenir complicaciones asociadas con la hipertensión.</p>

<p><b>Migraña</b>: La terapia molecular regenerativa puede ayudar a reducir los síntomas de la migraña, promoviendo la regeneración de los vasos sanguíneos y disminuyendo la inflamación.</p>

<p><b>Alzheimer y Parkinson</b>: La terapia molecular regenerativa puede ayudar a promover la regeneración de las células nerviosas y reducir la inflamación, lo que puede ser útil en el tratamiento de estas enfermedades neurodegenerativas.</p>

<p><b>Fibromialgia</b>: La terapia molecular regenerativa puede ayudar a reducir el dolor y la inflamación en los músculos y otros tejidos, lo que puede mejorar la calidad de vida de las personas con fibromialgia.</p>

<p><b>Esclerosis Múltiple</b>: La terapia molecular regenerativa puede ayudar a reducir los síntomas de la esclerosis múltiple y promover la regeneración del tejido nervioso dañado.</p>
    </div>
        <?php
            if ($value>0){
                include("_formulariodepago.php"); 
            }
        ?>
    
</div>






</div>



    <?php include("_footer.php"); ?>