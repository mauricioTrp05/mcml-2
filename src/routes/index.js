const express = require ('express');
const router = express.Router();
const app=express();
const bodyParser = require('body-parser');
const fs = require('fs');
var jsonParser = bodyParser.json();

//routes
router.get('/', (req,res)=>{
    res.setHeader('Content-type', 'text/html');
    res.render('index.html');
});

/*app.route('/new-comentario')
.get(function(req,res){
    const file = fs.readFileSync('./comentario.json', 'UTF-8');
    res.setHeader('Content-type', 'text/json');
    res.send(file);
})
.post(function(req,res){
    res.send(req.body.txtNombre);
})*/

router.get('/get-comentario', (req,res)=>{
    const file = fs.readFileSync('./comentario.json', 'UTF-8');
    res.setHeader('Content-type', 'text/json');
    res.send(file);
    //console.log(file);
});

router.post('/new-comentario', jsonParser, (req,res)=>{
    console.log(JSON.stringify(req.body));

    //res.setHeader('Content-type', 'text/json');
    
    var nombre=req.body.nombre;
    var comentario=req.body.comentario;
    var rating= req.body.rating;
    
    //abrir archivo
    let file = fs.readFileSync('./comentario.json', 'UTF-8');
    //convertir arreglo
    const json=JSON.parse(file);
    //insertar nuevo elemento
    json.comentario.push({"nombre": nombre, "comentario": comentario,"rating": parseInt(rating)});
    //guardar json
    file= fs.writeFileSync('./comentario.json', JSON.stringify(json));
    //enviar resultados
    res.send(nombre,comentario,rating);
    
    
});

module.exports = router;