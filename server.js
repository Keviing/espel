const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/guardar') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const params = new URLSearchParams(body);
      const username = params.get('username');
      const password = params.get('password');

      // Guardar los datos en un archivo
      fs.appendFile('datos.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Error al guardar los datos');
        } else {
          res.statusCode = 200;
          res.end('Datos guardados correctamente');
        }
      });
    });
  } else if (req.method === 'GET' && req.url === '/') {
    // Servir el archivo HTML
    fs.readFile('index.html', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Error al leer el archivo HTML');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Ruta no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
