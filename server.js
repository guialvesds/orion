const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/dist/orion'));

app.get('/+', (req, res) => {

    res.sendFile(__dirname + '/dist/orion/index.html');
});

app.listen(PORT, () => {
    console.log("Servidor rodando na porta "+ PORT);
})