const express = require('express'),
    app = express(),
    PORT = 4000;

// TODO: golan
// app.use(express.json())
// app.use(require('cors')())

app.listen(PORT, () => console.log("SERVER : connection success!"))
require('./DL/db').myConnect();

// TODO: golan
app.use('/', require('./Routes/mainRouter'))