const express = require('express');
const app = express();
app.set('view engine', 'ejs'); 

app.get('/',  (req, res) => {
   res.send('Hello World');
})

const server = app.listen(8081, () => {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})