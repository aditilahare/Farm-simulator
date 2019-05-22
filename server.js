const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log("Port ", process.env.PORT);

app.use(express.static('out'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
