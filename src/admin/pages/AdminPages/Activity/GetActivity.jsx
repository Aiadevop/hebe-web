import { useState } from 'react';
import '../../../../ui/css/admin.css'

export const GetActivity = () => {

  //Mostrar actividades
  const [actividad, setActividad] = useState([])
  const url =  'http://localhost:8080/'


  //Función obtener actividades.
  async function onSubmitGetActividad(event) {

    event.preventDefault();
    try {

      const response = await fetch(`${url}api/actividades/auth/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });



      const data = await response.json();


      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${data.message}`);
      }
      setActividad(data.act);

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No se han podido obtener las actividades");
    }
  }

  return (
    <>
      <br />
      <form onSubmit={onSubmitGetActividad} >
        <input className="boton" type="submit" value="Mostrar actividades" />
      </form>
      <div >
        <ol>
          {
            actividad.map(({ _id, actividad, precio }) => {
              return (
                <li key={_id} className='boton'>
                  id={_id}
                  <br />
                  {actividad}
                  <br />
                  {precio}€
                  <br />
                </li>
              );
            })

          }
        </ol>
      </div>
    </>
  )
}
