import { useState } from 'react';

export const DeleteUser = () => {

  const [nameInput, setNameInput] = useState('');
  const [idInput, setIdInput] = useState('');
  const url =  'http://localhost:8080/'

  //Función borrar usuario
  async function onSubmitDeleteUser(event) {

    event.preventDefault();
    if(!idInput){
      alert("Es obligatorio introducir el id del usuario")
      return;
    }

    try {

      const response = await fetch(`${url}api/usuarios/auth/${idInput}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }

      });

      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`${response.message}`);
      }
      alert(`Usuario ${nameInput} borrado`)

    } catch (error) {
      console.error(error);
      alert("No se ha podido borrar el usuario.");
    }
  }
  return (
<>
      <br />
      <form className='formAdmin' onSubmit={onSubmitDeleteUser} >
        <h1>Borrar Usuario</h1>
        <br/>
        <label>Id usuario </label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br />
        <input className='botonForm' type="submit" value="Borrar usuario" />


      </form>


    </>
  )
}
