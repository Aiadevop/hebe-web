import { useState } from 'react';

export const DeleteSchedule = () => {
  const [nameInput, setNameInput] = useState('');
  const [idInput, setIdInput] = useState('');
  const url = 'http://localhost:8080/'

  //Función borrar horario
  async function onSubmitDeleteSchedule(event) {

    event.preventDefault();
    try {

      const response = await fetch(`${url}api/horarios/auth/${idInput}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }

      });

      const data = await response.json();
  
      if (response.status !== 200) {
        throw data.error || new Error(`${response.message}`);
      }
      alert(`Horario ${nameInput} borrado`)

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
<>
      <br />
      <form className='formAdmin' onSubmit={onSubmitDeleteSchedule} >
        <h1>Borrar horario</h1>
        <br/>
        <label>Id horario </label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br />
        <input className='botonForm' type="submit" value="Borrar horario" />


      </form>


    </>
  )
}
