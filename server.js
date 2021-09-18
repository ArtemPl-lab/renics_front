const express = require('express')
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 8081;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(
        '/api',
        createProxyMiddleware({
            target: "http://localhost:4000",
            changeOrigin: true,
              pathRewrite: {
                    '/api': '/', 
                }
        }),
    );

    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
