const ACCESS_TOKEN =
"ya29.a0AfB_byD_1gUl8s6Ph4BQa9t2JN2M5ymYT9675j5gkRtxuZRWC7hpMAaLCzcRRfMHGxSK3svAWsetTVYgEHpMUPdBnhR7cmqe8xiiPGqWfZlIJs8aEosCOlba1VNA9Ie40ix-yU6D1TJ9CA7CdY6vZqvuYqhDKl2fvrwJaCgYKAcwSARMSFQHGX2Miu2FcUBzEvpiFwnVr58DiHg0171" 
 
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
    "https://sheets.googleapis.com/v4/spreadsheets/10MgewTIvBgKTlA_qyAqfChq5E6EQNI1hJ16WWSXRZ04/values/registros!A2:Eappend?valueInputOption=USER_ENTERED",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (_data) {

    });
  });

  //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
  document.getElementById('nombre').value = "";
  document.getElementById('servicio').value = "";
  document.getElementById('fecha').valueAsDate = new Date();
  document.getElementById('hora').value = "";
  document.getElementById('costo').value = "";
};
