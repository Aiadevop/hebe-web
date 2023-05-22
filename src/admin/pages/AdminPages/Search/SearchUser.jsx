import { useState } from 'react'

export const SearchUser = () => {
  //Mostrar usuarios
  const [userInput, setUserInput] = useState([])
  const [result, setResult] = useState({})
  const url = 'http://localhost:8080/'


  //Función obtener usuarios.
  async function onSubmitGetuser(event) {

    event.preventDefault();
    try {
      
      let _datos = {
        userInput
      }

      const response = await fetch(`${url}api/buscar/auth/usuarios/${userInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });



      const data = await response.json();
      console.log(data)

      console.log(data.results)
      setResult(data)
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      // setResult(data);

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <>
      <br />
      <form className='formAdmin' onSubmit={onSubmitGetuser} >
        <label>Búsqueda usuario </label>
        <br />
        <input
          type="text"
          name="usuario"
          placeholder="nombre, id, dni, ..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <input className='botonForm' type="submit" value="Buscar usuario" />
      </form>

    </>
  )
}
