const { configureApp, PORT } = require('./configs/serverConfig');
const apiRouter = require('./routers/api.router');

const app = configureApp();

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
 