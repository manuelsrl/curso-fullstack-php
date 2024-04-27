  function reproducirVideos() {
    var video1 = document.getElementById('trailer1');
    var video2 = document.getElementById('trailer2');
    var video3 = document.getElementById('trailer3');
  
    setTimeout(function() {
      trailer1.play();
    }, 0); // Reproduce el primer video de inmediato
  
    setTimeout(function() {
      trailer2.play();
    }, 166000); // Espera 30 segundos antes de reproducir el segundo video
  
    setTimeout(function() {
      trailer3.play();
    }, 60000); // Espera 60 segundos (1 minuto) antes de reproducir el tercer video
  }
  
  // Llama a la función para reproducir los videos cuando la página se carga completamente
  window.onload = reproducirVideos;