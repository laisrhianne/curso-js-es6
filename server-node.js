var http = require('http');

http
  .createServer(function (req, res) {
    var body = '';

    req.on('data', function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      res.writeHead(200);
      var page =
        '<html><title>Exemplo1</title><body>Requisicao Recebida</body></html>';
      res.end(page);
    });
  })
  .listen(8124);

var http = require('http');

http
  .createServer(function (req, res) {
    var body = '';

    req.on('data', function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      var msg = JSON.parse(body);
      var numero = msg.n1 * msg.n2;
      res.writeHead(200);
      var page =
        '<html><title>Exemplo1</title><body>Requisicao Recebida</body></html>';
      res.end(page);
    });
  })
  .listen(8125);
