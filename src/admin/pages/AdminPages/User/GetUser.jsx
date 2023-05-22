import { useState } from 'react';
import '../../../../ui/css/admin.css'

export const GetUser = () => {

  //Mostrar usuarios
  const [users, setUsers] = useState([])
  const url = 'http://localhost:8080/'


  //Función obtener usuarios.
  async function onSubmitGetUsers(event) {

    event.preventDefault();
    try {

      const response = await fetch(`${url}api/usuarios/auth/?limite=100`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`${response.message}`);
      }
      setUsers(data.usuarios);

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No se han podido obtener los usuarios.");
    }
  }

  return (
    <>
      <br />
      <form onSubmit={onSubmitGetUsers} >
        <input className="boton" type="submit" value="Mostrar usuarios" />
        {/* <input onClick={() => setMenuOpened(!menuOpened)} className={ menuOpened ? 'users_visible' : 'users'} type="submit" value="Ocultar usuarios" />            */}

      </form>
      <div >
        <ol className='botonol'>
          {
            users.map(({ uid, nombre, correo, dni, telefono, actividad, horario }) => (
              <li key={uid} className='boton'>
                id={uid}
                <br />
                {nombre}
                <br />
                {telefono}
                <br />
                {correo}
                <br />
                {dni}
                <br />
                {actividad}
                <br />
                {horario}
                <br />
              </li>
            ))

          }
        </ol>
      </div>
    </>
  )
}
