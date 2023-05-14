<!doctype html>
<html >
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Rejuvene Spa</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<link rel="icon" type="image/x-icon" href="favi.ico">
<link href="rejuvene.css?=<?php echo rand();?>" rel="stylesheet" >
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.min.css">
<script src="jquery-3.6.4.min.js"></script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" nonce="g1MZiwsN"></script>

<meta property="og:url"           content="https://rejuvenespa.com" />
<meta property="og:type"          content="website" />
<meta property="og:title"         content="Rejuvene SPA" />
<meta property="og:description"   content="Tratamientos y Medical SPA" />
<meta property="og:image"         content="https://rejuvenespa.com/img/logo_full.jpg" />
</head>
<body>
<script>
function validarCorreo(correo) {
  // Expresión regular para validar el correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Evalúa si el correo cumple con la expresión regular
  return regex.test(correo);
}


function btnPagar_click(){  
  //Validamos
  Listo = 0;
  if ($("#cliente").val() == "") {
        Swal.fire({
          icon: 'warning',
          title: 'Te falta algo',
          text: 'Escribe tu nombre!'
        });
        Listo = Listo + 1;
  }

  // if ($("#correo").val() == "") {
    if ( validarCorreo($("#correo").val())==false){
      Swal.fire({
          icon: 'warning',
          title: 'Te falta algo',
          text: 'Escribe tu correo!'
        });
        Listo = Listo + 1;
    }
      
  // }

  if ($("#telefono").val() == "") {
        Swal.fire({
          icon: 'warning',
          title: 'Te falta algo',
          text: 'Escribe tu telefono!'
        });
        Listo = Listo + 1;
  }
  console.log(Listo);
  if (Listo ==0) {
    
    $('#btnPagar').hide();
    $('#paypal-button-container').show();
  }
}


</script>
<script>
  function shareOnFacebook() {
  var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
  window.open(url, '_blank', 'width=600,height=400');
}


function compartirWhatsApp() {
  // Obtener la URL actual
  var urlActual = window.location.href;
  
  // Obtener el extracto de información (en este caso, el título de la página)
  var extracto = "Hola, mira esto: Rejuvene Medical Spa es un Centro Estético y Servicios de Spa con alta tecnología, personal Médico y Cosmeatra profesionales certificadas para ofrecerle tratamientos de vanguardia con alta calidad y calidez. ";
  
  // Crear la cadena de texto para compartir en WhatsApp
  var textoCompartir = encodeURIComponent(extracto + " " + urlActual);
  
  // Crear el enlace para compartir en WhatsApp
  var enlaceCompartir = "https://wa.me/?text=" + textoCompartir;
  
  // Abrir el enlace en una nueva pestaña
  window.open(enlaceCompartir);
}
</script>
