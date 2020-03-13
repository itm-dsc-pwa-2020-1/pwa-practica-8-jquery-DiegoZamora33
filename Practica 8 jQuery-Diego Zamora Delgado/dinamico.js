$(document).ready(function(){

  $('.dropdown-trigger').dropdown({
    hover: true,
    inDuration: 500,
    outDuration: 500,
    constrainWidth: true
  });

// Pagina Ajena Local
  $("#cargar").click(function() {

      

      $.ajax({
        url: "PaginaExterna.html" ,

        success: function(data){
          setTimeout(function(){
            $("#contenido").html(data);
          }
        );
      }

      });

  });

  // Saludo de otro dominio
  $("#cargarAjax").click(function() 
  {

      
        $.ajax({
          url: 'http://laboratoriolilab.com/pwa/externo.php' ,
          dataType: 'html',
        })
        .done(function(respuesta){
          $("#contenidoAjax").html(respuesta);
        })
        .fail(function(){
          console.log("error");
        });
      

  });

  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 4000);


  $('.materialboxed').materialbox();

  $("#btn_fade").click(function(){
    $("#div1").fadeToggle(1000);
  });


});