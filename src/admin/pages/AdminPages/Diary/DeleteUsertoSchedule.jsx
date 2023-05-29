import { useState } from 'react';

export const DeleteUsertoSchedule = () => {
  const [idInput, setIdInput] = useState('');
  const [usuarioInput, setUsuarioInput] = useState('');
  const [users, setUsers] = useState([])
  const [menuOpened, setMenuOpened] = useState(false)
  const [menuOpened2, setMenuOpened2] = useState(false)
  const [schedule, setSchedule] = useState([])


  const url = 'http://localhost:8080/'
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

  //Función obtener horarios.
  async function onSubmitGetSchedule(event) {

    event.preventDefault();
    try {

      const response = await fetch(`${url}api/horarios/auth/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`${response.message}`);
      }
      setSchedule(data.horarios);

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No se han podido mostrar los horarios");
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
      {/* Mostrar usuarios */}
      <form onSubmit={onSubmitGetUsers} >
        <input onClick={() => setMenuOpened(!menuOpened)} className='boton' type="submit" value="Mostrar usuarios" />


      </form>
      <div className={menuOpened ? 'nav-menu_visible' : 'nav-menu_visible hidden'} >
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
      {/* Mostrar horarios */}
      <br />
      <form onSubmit={onSubmitGetSchedule} >
        <input onClick={() => setMenuOpened2(!menuOpened2)} className="boton" type="submit" value="Mostrar horarios" />

      </form>
      <div className={menuOpened2 ? 'nav-menu_visible' : 'nav-menu_visible hidden'}>
        <ol >
          {
            schedule.map(({ _id, dia, desde, hasta, sala, actividad, nombreActividad }) => (
              <li key={_id} className='boton'>
                id={_id}
                <br />
                {dia}
                <br />
                {sala}
                <br />
                {desde}
                <br />
                {hasta}
                <br />
                {nombreActividad} ({actividad})
                <br />

                <br />
              </li>
            ))

          }
        </ol>
      </div>

    </>
  )
}
