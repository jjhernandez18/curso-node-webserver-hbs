import "dotenv/config";
import path from 'path';
import express from "express";
import hbs from "hbs";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT;
const __dirname = path.dirname( fileURLToPath( import.meta.url ) );


hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.set('view engine', 'hbs');

app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic');
});

app.get('/elements', (req, res) => {
    res.render('elements');
});

app.get('*', (req, res) => {
    res.send('404 | NOT FOUND PAGE');
});

app.listen(port, () => {
    console.log(`Corriendo en el puerto [${ port }]`);
});