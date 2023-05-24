import { useState } from 'react';

export const DeleteUsertoSchedule = () => {
  const [idInput, setIdInput] = useState('');
  const [usuarioInput, setUsuarioInput] = useState('');


  const url =  'http://localhost:8080/'
  //Función actualizar usuario
  async function onSubmitDeleteUseronSchedule(event) {

    event.preventDefault();
    try {

      if (usuarioInput === "" || undefined) {
        alert(`Todos los campos son obligatorios`)
        return;
      }

      if (idInput === "" || undefined) {
        alert(`Todos los campos son obligatorios`)
        return;
      }

      let _datos = {
        usuario: usuarioInput,
        rol: "USER_ROLE"
      }

      const response = await fetch(`${url}api/agendas/auth/agenda/${idInput}`, {
        method: "DELETE",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });  

      const data = await response.json();
  
      if (response.status !== 200) {
        if (response.status === 400) {
          alert(`El usuario no existe en este horario.`)
          return;
        } else {          
          throw data.error || new Error(`Request failed with status ${response.message}`);
        }
      }      
      alert(`Usuario ${usuarioInput} borrado`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No se ha podido borrar al usuario del horario.");
    }
  }



  return (
    <>
      <br />
      <form className='formAdmin' onSubmit={onSubmitDeleteUseronSchedule} >
        <h1>Borrar usuario del horario</h1>
        <br />
        <label>Id horario </label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br />
        <label>Id usuario </label>
        <input
          type="text"
          name="usuario"
          placeholder="Id usuario"
          value={usuarioInput}
          onChange={(e) => setUsuarioInput(e.target.value)}
        />
        <input className='botonForm' type="submit" value="Borrar usuario" />
      </form>


    </>
  )
}
