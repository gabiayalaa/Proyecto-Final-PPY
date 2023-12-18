const ACCESS_TOKEN =
"ya29.a0AfB_byCemsbklTxn7EortLXs_Qu909f5moQX-DBRztAbAJ-2eIEOH2DYpseWhyvKnP8JL6zclP8R14haVVhckruG5kwX86DeD0RG04F-Hm03YaQbtpdAW-zlo-lUEtAk_ObmoF_FsKBcPzUNChboqUNlhsn9io63OlGnaCgYKAaoSARMSFQHGX2MiV3mbwecut0tx8Aj7SJKhlA0171" 
 
const SHEET_ID = "10MgewTIvBgKTlA_qyAqfChq5E6EQNI1hJ16WWSXRZ04"

//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();


function onRegistrar() {

  //Obtenemos los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const costo = document.getElementById('costo').value;
  
  //Creamos el JSON que espera nuestra API
  let data = {};
  
  let values = [];
  
  let fila = [nombre, servicio, fecha, hora, costo];

  values.push(fila);
  
  //Verificar que coincida con el nombre de la hoja de nuestro sheet
  data.range = "registros";
  
  data.majorDimension = "ROWS";
  data.values = values;

  //Invocamos al método POST de la API
  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/10MgewTIvBgKTlA_qyAqfChq5E6EQNI1hJ16WWSXRZ04/values/registros:append?valueInputOption=USER_ENTERED",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {

    });
  });

  //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
  document.getElementById('nombre').value = "";
  document.getElementById('servicio').value = "";
  document.getElementById('fecha').valueAsDate = new Date();
  document.getElementById('hora').value = "";
  document.getElementById('costo').value = "";
};
