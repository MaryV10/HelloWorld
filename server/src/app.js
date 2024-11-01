const { configureApp, PORT } = require('./configs/serverConfig');
const apiRouter = require('./routers/api.router');
const path = require('path');

const staticFolder = path.join(__dirname, '..', 'public', 'dist');

const app = configureApp();

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(staticFolder, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
 