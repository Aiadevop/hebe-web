import { useState } from 'react';

export const  CreateUser= () => {

  const [users, setUsers] = useState([])
  const [nameInput, setNameInput] = useState('');
  const [dniInput, setDniInput] = useState('');
  const [telefonoInput, setTelefonoInput] = useState('');
  const [correoInput, setCorreoInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [actividadInput, setActividadInput] = useState([]);
  const url =  'http://localhost:8080/'

  //Función crearUsuario
  async function onSubmitCreateUser(event) {
    event.preventDefault();
    try {
      let _datos = {
        nombre: nameInput,
        dni: dniInput,
        telefono: telefonoInput,
        correo: correoInput,
        password: passwordInput,
        rol: "USER_ROLE"
      }

      const response = await fetch(`${url}api/usuarios/auth`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });

      const data = await response.json();
  
      if (response.status !== 200) {
        console.log(response)
        throw data.error || new Error(`${response.message}`);
      }
      alert(`Usuario ${nameInput} creado`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No se ha podido crear el usuario.");
    }
  }



  return (
    <>
      <br />
      <form  className='formAdmin' onSubmit={onSubmitCreateUser} >
      <h1>Nuevo Registro</h1>
      <br/>
        <label>Nombre y Apellidos </label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Apellido1 Apellido2"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <br />
        <label>DNI </label>
        <input
          type="text"
          name="dni"
          placeholder="00000000X"
          value={dniInput}
          onChange={(e) => setDniInput(e.target.value)}
        />
        <br />
        <label>Teléfono </label>
        <input
          type="text"
          name="telefono"
          placeholder="000000000"
          value={telefonoInput}
          onChange={(e) => setTelefonoInput(e.target.value)}
        />
        <br />
        <label>Correo </label>
        <input
          type="text"
          name="correo"
          placeholder="correo@email.com"
          value={correoInput}
          onChange={(e) => setCorreoInput(e.target.value)}
        />
        <br />
        <label>Contraseña </label>
        <input
          type="password"
          name="contraseña"
          placeholder="***********"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <br />    
        <input className='botonForm' type="submit" value="Crear usuario" />


      </form>
      <br />
    </>
  )
}
