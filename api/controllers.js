// Controlador de ejemplo para obtener los registros
function obtenerRegistros() {
    // Aquí puedes implementar la lógica para obtener los registros de tu base de datos
    // En este ejemplo, simplemente se devuelve un array de registros estático
    const registros = [
        { id: 1, nombre: 'Alex', edad: 20, sexo: 'Masculino' },
        { id: 2, nombre: 'Luis', edad: 15, sexo: 'Indefinido' },
        { id: 3, nombre: 'Joyce', edad: 20, sexo: 'Femenino' }
    ];
  
    return registros;
  }
  
  module.exports = {
    obtenerRegistros
  };
  