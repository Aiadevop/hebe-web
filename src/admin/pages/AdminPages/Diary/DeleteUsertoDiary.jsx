import { useState } from 'react';

export const DeleteUsertoDiary = () => {

  const [usuarioInput, setUsuarioInput] = useState('');


  const url = 'http://localhost:8080/'

  //Función actualizar usuario
  async function onSubmitDeleteUseronSchedule(event) {

    event.preventDefault();
    try {
      
      if (usuarioInput === "" || undefined) {
        alert(`Es obligatorio el id de usuario`)
        return;
      } 

      let _datos = {
        usuario: usuarioInput,
        rol: "USER_ROLE"
      }

      const response = await fetch(`${url}api/agendas/auth/agenda/`, {
        method: "DELETE",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });
      const data = await response.json();
  
      if (response.status !== 200) {
        if (response.status === 400) {
          alert(`El usuario no existe en la agenda.`)
          return;
        } else {          
          throw data.error || new Error(`Request failed with status ${response.message}`);
        }
      }      
      alert(`Usuario ${usuarioInput} borrado`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No se ha podido borrar al usuario");
    }
  }



  return (
    <>
      <br />
      <form className='formAdmin' onSubmit={onSubmitDeleteUseronSchedule} >
        <h1>Dar de baja al usuario en la agenda</h1>
        <br/>
        <label>Id usuario </label>
        <input
          type="text"
          name="usuario"
          placeholder="Id usuario"
          value={usuarioInput}
          onChange={(e) => setUsuarioInput(e.target.value)}
        />
        <input className='botonForm' type="submit" value="Dar de baja usuario" />
      </form>


    </>
  )
 
}
