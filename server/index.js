const express = require('express'),
      authCtrl = require('./authController'),
      app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 7777
app.listen(PORT, () => console.log(`Server running on ${PORT}`));