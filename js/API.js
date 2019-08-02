
class API {
     async obtenerDatos() {

          const total = 1000;
          // Obtener desde la API
          const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

          // Retornar como JSON
          const respuestaJSON = await datos.json();

          // Retornar el objeto
          return {
               respuestaJSON
          }
     }
}