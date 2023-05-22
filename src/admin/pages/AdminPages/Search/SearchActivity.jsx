import { useState } from 'react'

export const SearchActivity = () => {
  const [activityInput, setActivityInput] = useState('')
  const [activityResult, setActivityResult] = useState('')
  const [priceResult, setPriceResult] = useState('')
  const url = 'http://localhost:8080/'


  //Función obtener Actividads.
  async function onSubmitGetActivity(event) {

    event.preventDefault();
    try {
      
      let _datos = {
        activityInput
      }

      const response = await fetch(`${url}api/buscar/auth/actividades/${activityInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });



      const data = await response.json();
      console.log(data)
      setActivityInput(data.results[0])
      setActivityResult(data.results[0].actividad)
      setPriceResult(data.results[0].precio)
      if (response.status !== 200) {
        if (response.status === 400) {
          alert('Hay un error en los datos')
          return;
        }
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
      <form className='formAdmin' onSubmit={onSubmitGetActivity} >
        <label>Búsqueda Actividad </label>
        <br />
        <input
          type="text"
          name="actividad"
          placeholder="actividad, precio, id"
          value={activityInput}
          onChange={(e) => setActivityInput(e.target.value)}
        />
        <br />
        <input className='botonForm' type="submit" value="Buscar Actividad" />
        <label>La actividad es {activityResult} y su precio {priceResult} €
        </label>
      </form>
      <div >
        {/* {
          activityInput.map(({ _id, actividad, precio }) => (
            <li key={_id} className='boton'>
              id={_id}
              <br />
              {actividad}
              <br />
              {precio}
              <br />
            </li>
          ))

        } */}

      </div>
    </>
  )
}
