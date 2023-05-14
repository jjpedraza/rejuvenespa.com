<br>



<footer style="background-color: #b3d95d; color: #4e690c; padding: 17px;">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4 style="color:white;">¡CONTÁCTANOS!</h4>
        <p>(669) 668-6023</p>
        <p>(669) 196 8232</p>
        <!-- <p><a href="#">Psparejuvene@gmail.com</a></p> -->
      </div>
      <div class="col-md-4">
        <h4 style="color:white;">VÍSITANOS</h4>
        <p>Carlos Canseco 6030 P.A.
        Fracc. La Marina<br>
        Mazatlán, Sinaloa<br>
        C.P. 82103<br>
        <b>Horarios:</b>
        Lunes - Sábado - 10:00 - 19:00 Domingo - Cerrado
      </div>
      <div class="col-md-4">
        <h4 style="color:white;">MAPA</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.3084495080795!2d-106.44596418964794!3d23.27095300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698ab56c4dc0fd7%3A0x48a1c252eb4b5e47!2sAv.%20Carlos%20Canseco%206030%2C%20Marina%20Mazatl%C3%A1n%2C%2082103%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1683924863666!5m2!1ses-419!2smx" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</footer>

<div class="floating-icon" onclick="toggleForm()">
    <i class="fab fa-whatsapp"></i>
  </div>

  <!-- Creamos el formulario con las clases necesarias de Bootstrap y una clase personalizada -->
  <form id="whatsapp-form" class="card shadow p-3 mb-5 bg-white rounded d-none">
    <div class="card-header bg-success text-white">Enviar mensaje por WhatsApp</div>
    <div class="card-body">
      <!-- <div class="form-group">
        <label for="phone">Mi Telefono:</label>
        <input type="text" class="form-control" id="phone" name="phone">
      </div> -->
      <div class="form-group">
        <label for="message">En que te ayudamos?:</label>
        <textarea class="form-control" id="message" name="message"></textarea>
      </div>
      <button type="button" class="btn btn-success" onclick="sendWhatsApp()">Enviar mensaje</button>
    </div>
  </form>
<script>
// Mostrar y ocultar el formulario
function toggleForm() {
  $('#whatsapp-form').toggleClass('d-none');
}

// Enviar el mensaje por WhatsApp
function sendWhatsApp() {
  // var phone = $('#phone').val();
  var phone = "";
  var message = $('#message').val();
  // 6691968232
  // if (phone && message) {
    var url = 'https://api.whatsapp.com/send?phone=' + 6691968232 + '&text=' + encodeURIComponent(message);
    // var url = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(message);
    window.open(url);
    $('#whatsapp-form').addClass('d-none');
    $('#phone').val('');
    $('#message').val('');
  // } else {
  //   alert('Por favor, ingresa un número de teléfono y un mensaje.');
  // }
}

</script>
</body>
</html>