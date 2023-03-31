const express = require('express');

const apiRouter = require('./routes/api.js');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter)

app.use((err, req, res, next) => {
  console.error("err: ", err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), "번 포트에서 대기 중");
})

module.exports = app;