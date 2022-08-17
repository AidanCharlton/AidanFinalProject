const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/test', (req, res) => {
    res.json({message: 'hey it works'});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});