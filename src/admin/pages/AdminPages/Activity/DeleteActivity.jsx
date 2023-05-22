import { useState } from 'react';

export const DeleteActivity = () => {
  const [actividadInput, setActividadInput] = useState('');
  const [idInput, setIdInput] = useState('');
  const url = 'http://localhost:8080/'

  //Función borrar usuario
  async function onSubmitDeleteActivity(event) {

    event.preventDefault();
    try {

      const response = await fetch(`${url}api/actividades/auth/${idInput}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }

      });

      const data = await response.json();
  
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.message}`);
      }
      alert(`Actividad ${actividadInput} borrada`)

    } catch (error) {
      console.error(error);
      alert("No se podido borrar la actividad");
    }
  }
  return (
<>
      <br />
      <form className='formAdmin' onSubmit={onSubmitDeleteActivity} >
        <h1>Borrar Actividad</h1>
        <br/>
        <label>Id actividad </label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br />
        <input className='botonForm' type="submit" value="Borrar actividad" />


      </form>


    </>
  )
}
