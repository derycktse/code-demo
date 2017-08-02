import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config'
import Express from 'express'
import path  from 'path'

const compiler = webpack(config)
const app = new Express()
const port = 3000
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    );
  }
  /* eslint-enable no-console */
});


