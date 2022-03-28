const express = require('express');
const app = express();
const port = 3000;
app.get('/sumar-numeros/:n1&:n2', (req, res) => {
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`La suma de ${n1} + ${n2} es igual a: ${parseInt(n1) + parseInt(n2)}`);
});
app.get('/restar-numeros/:n1&:n2', (req, res) => {
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    if(n1 == 0 || n2 == 0){
    res.send(`Uno de los valores ingresados es 0, no se puede restar`);
    }else{
    res.send(`La resta de ${n1} - ${n2} es igual a: ${n1-n2}`);
    }
});
app.get('/nombre-apellido/',(req, res) => {
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    res.send(`Tu nombre es: ${nombre}. Tu apellido es: ${apellido}`);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
