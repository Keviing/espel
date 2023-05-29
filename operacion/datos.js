  function guardarDatos() {
      var nombre = document.getElementById("username").value;
      var contrasena = document.getElementById("password").value;
    
      var datos = "Nombre: " + nombre + "\nContraseña: " + contrasena;
    
      // Crear un enlace temporal para descargar el archivo de texto
      var enlaceDescarga = document.createElement("a");
      enlaceDescarga.href = "data:text/plain;charset=utf-8," + encodeURIComponent(datos);
      enlaceDescarga.download = "datos.txt";
      enlaceDescarga.style.display = "none";
      document.body.appendChild(enlaceDescarga);
      enlaceDescarga.click();
      document.body.removeChild(enlaceDescarga);
    }