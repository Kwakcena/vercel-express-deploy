const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "hello world!" });
})

router.get('/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = router;