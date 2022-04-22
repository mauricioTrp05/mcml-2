const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();


//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(require('./src/routes/index'));


//static files
app.use(express.static(path.join(__dirname,'public')));

//Escuchando el servidor
app.listen(app.get('port'), () =>{
    console.log('Servidor en puerto', app.get('port'));
});
//console.log('El Mau estuvo aqui dos veces');