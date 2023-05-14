
<div id="formulariodepago">
    <h5>
   <table width=100%>
    <tr>
        <td> Formato de Compra</td>
        <td><b style="font-size:14pt; color:red;"> $ <?php echo $value; ?></b></td>
  </tr>
  </table>

    </h5>   
        <input id="cliente" class="form-control" type="text" placeholder="Mi nombre" aria-label="default input example">
        <input id="correo" class="form-control" type="mail" placeholder="mi correo electronico" aria-label="default input example">
        <input id="telefono" class="form-control" type="tel" placeholder="Mi Telefono" aria-label="default input example">
        <label>¿Cuando quiere visitarnos?:<input id="cita" class="form-control" type="date" value="<?php echo date("Y-m-d");?>"><br>
        <br>
        <button id="btnPagar" onclick="btnPagar_click();" class="btn btn-primary">Pagar con Tarjeta o PayPal</button>

        <div id="paypal-button-container" style="width:100%; display:none;"></div>
        <br><cite>* cualquier incoveniente le avisaremos a su telefono</cite>
                  
          <script>
            function jsonToList(json) {
            let list = '';
            for (let key in json) {
                if (typeof json[key] === 'object') {
                list += `<b>${key}</b>: <br>${jsonToList(json[key])}`;
                } else {
                list += `<b>${key}</b>: ${json[key]} <br>`;
                }
            }
            return list;
            }

          paypal.Buttons({
            createOrder: function(data, actions) {
              // Configurar el objeto de la orden
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: 'MXN',
                    value: '<?php echo $value; ?>',
                    breakdown: {
                      item_total: {
                        currency_code: 'MXN',
                        value: '<?php echo $value; ?>'
                      }
                    }
                  },
                  items: [
                    {
                      name: '<?php echo $name; ?>',
                      description: '<?php echo $description; ?>',
                      unit_amount: {
                        currency_code: 'MXN',
                        value: '<?php echo $value; ?>'
                      },
                      quantity: '<?php echo $quantity; ?>'
                    }
                  ]
                }]
              });
            },
            onApprove: function(data, actions) {
              // Capturar el pago
              captura_cliente = $('#cliente').val();
              captura_telefono =  $('#telefono').val();
              captura_correo = $('#correo').val() ;
              captura_cita = $('#cita').val() ;
              return actions.order.capture().then(function(details) {
                // Mostrar mensaje de éxito con SweetAlert2
              
                //Nombre del pagador
                details.payer.name 

                //Correo electronico del pagador
                details.payer.email_address

                //Que compro
                details.purchase_units

                //Id de Transaccion
                details.id

                // console.log(details);

              // enviar un correo con los detalles
              correo_contenido = 'Estimado(a) <b>' + captura_cliente + '</b><br>';
              correo_contenido += '<br>';
              correo_contenido += '<p>Su pago  se realizo con exito.<br> su <b>Id de Transaccion es '+ details.id+'</b>              </p>';
              correo_contenido+='<br>Cliente: <b>' + captura_cliente;
              correo_contenido+='<br>Telefono: <b>' + captura_telefono;
              correo_contenido+='<br>Correo: <b>' + captura_correo;
              correo_contenido+='<br>Cita esperada: <b>' + captura_cita;
              correo_contenido += '<br><h4>Detalles de la transaccion:</h4><br>';
              correo_contenido += jsonToList(details);
              

            //   'Estimado(a) '+ captura_cliente + '. <p> <b>Su pago se ha realizado correctamente en PayPal por su articulo  <b>'
            //   + details.payer.name + '</b> ' + details.description + '</p>' + '<p>Su Id de Transaccion es: ' + details.id + '</p> <br>';

            //   + '<p> Se han enviado los siguientes datos: <br>  Nombre del Cliente: ' + captura_cliente +'<br>Telefono: '+ captura_telefono + 
            //   '<br>Correo electronico: ' + captura_correo + '<br><br>Adicionalmente de PayPal se ha obtenido: <br> Nombre: '+details.payer.name 
            //   + '<br> Correo: ' + details.payer.email_address + '<br>'+ details.purchase_units + '<br>Id de Transaccion: ' + details.id + '<br><br><br>'+
            //   'TE ESPERAMOS EN NUESTRAS INSTALACIONES EL DIA <b>'+captura_cita+'</b>, RECUERDA LLEVAR TU ID DE TRANSACCION Y TU CREDENCIAL PARA COTEJAR ESTA COMPRA';

              // console.log(correo_contenido)
              EnviarCorreo(details.payer.email_address , "Compra de "+name+" pagada correctamente ("+ details.id+")", correo_contenido);
              EnviarCorreo(captura_correo, "Compra de "+name+" pagada correctamente ("+ details.id+")", correo_contenido);
              EnviarCorreo('<?php echo $correoAdmin;?>', "Venta de "+name+" pagada correctamente ("+ details.id+")", correo_contenido);
              EnviarCorreo('printepolis@gmail.com', "[CC] Venta de "+name+" pagada correctamente ("+ details.id+")", correo_contenido);

              console.log(details)
                Swal.fire({
                  icon: 'success',
                  title: 'Pago completado con éxito',
                  text: 'Gracias por tu compra, ' + details.payer.name.given_name + '! Su ID de transacción es: ' + details.id
                });

                //Enviamos un correo con de aviso al cliente y a ventas

              });
            },
            onError: function(error) {
              // Mostrar mensaje de error con SweetAlert2
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se produjo un error al procesar el pago: ' + error.message
              });
            }
          }).render('#paypal-button-container');




          function EnviarCorreo(correo, asunto, contenido){
            $.ajax({
              url: "correo.php",
              type: "post",   
              data: {correo:correo, asunto:asunto, contenido:contenido},
              success: function(data){
                $('body').append(data+"\n");      
                // $('body').append("contenido original: "+contenido+"\n");      

              }
          });
          }
          </script>
    </div>