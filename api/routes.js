const express = require('express');
const cors = require('cors');
const app = express();
const port = const port = process.env.PORT || 3000;
// Elige el puerto que desees utilizar

app.use(cors()); // Configurar CORS


app.get('/registros', (req, res) => {
  const registros = obtenerRegistros();
  res.json(registros);
});

app.get('/api/registros', (req, res) => {
    const registros = obtenerRegistros();
    res.json(registros);
  });

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

module.exports = app;


function obtenerRegistros() {
    // Aquí debes implementar la lógica para obtener los registros
    // desde tu base de datos o cualquier otra fuente de datos
    return [
      // Ejemplo de registros
      { id: 1, nombre: 'Alex', edad: 20, sexo: 'Masculino' },
      { id: 2, nombre: 'Luis', edad: 15, sexo: 'Indefinido' },
      { id: 3, nombre: 'Joyce', edad: 20, sexo: 'Femenino' }
    ];
  }





