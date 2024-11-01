const { configureApp, PORT } = require("./configs/serverConfig");
const apiRouter = require("./routers/api.router");
const path = require("path");
const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");

const httpApp = express();

const PORT_HTTPS = process.env.PORT_HTTPS ?? 3000;
const PORT_HTTP = process.env.PORT_HTTP ?? 3000;

const sslOptions = {
  key: fs.readFileSync(
    path.join(
      __dirname,
      "..",
      "public",
      ".well-known",
      "acme-challenge",
      "privkey.pem"
    )
  ),
  cert: fs.readFileSync(
    path.join(
      __dirname,
      "..",
      "public",
      ".well-known",
      "acme-challenge",
      "fullchain.pem"
    )
  ),
};

const app = configureApp();

app.use("/api", apiRouter);

const staticFolder = path.join(__dirname, "..", "public", "dist");

app.get("*", (req, res) => {
  res.sendFile(path.join(staticFolder, "index.html"));
});

app.use(
  "/.well-known/acme-challenge",
  express.static(
    path.join(__dirname, "..", "public/.well-known/acme-challenge")
  )
);

http.createServer(httpApp).listen(PORT_HTTP, () => {
  console.log("HTTP Server running on port 80 (redirecting to HTTPS)");
});

httpApp.get("*", (req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`);
});

const httpsServer = https.createServer(sslOptions, app);
httpsServer.listen(PORT_HTTPS, () =>
  console.log(`Мы сидим на порте ${PORT_HTTPS}`)
);

// app.listen(PORT, () => {
//   console.log(`Server started at ${PORT} port`);
// });