
const http = require('http');

http.createServer( (request, response) => {

  // response.writeHead(200, {'Content-Type': 'application/json'})
  // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // response.writeHead(200, {'Content-Type': 'application/csv'});

  // const persona = {
  //   id: 1,
  //   nombre: 'Juan Manuel'
  // }

  // response.write('id, nombre\n');
  // response.write('1, juan\n');
  // response.write('2, jose\n');
  // response.write('3, marla\n');
  // response.write('4, emily\n');

  // response.write( JSON.stringify(persona));

  response.end();

})

.listen( 8080 );

console.log('Escuchando el puerto', 8080);
