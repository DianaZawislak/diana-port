const express = require('express');
const next = require('next');
const { parse } = require('url');
const { register } = require('prom-client');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Enforce HTTPS
  server.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'http' && !dev) {
      res.redirect(301, `https://${req.headers.host}${req.url}`);
    } else {
      next();
    }
  });

  // Expose Prometheus metrics
  server.get('/metrics', (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
  });

  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
