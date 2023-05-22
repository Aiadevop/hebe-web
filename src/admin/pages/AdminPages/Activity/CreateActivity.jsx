import { useState } from 'react';

export const CreateActivity = () => {

  const [actividadInput, setActividadInput] = useState('');
  const [precioInput, setPrecioInput] = useState(0);
  const url = 'http://localhost:8080/'

  //Función crearUsuario
  async function onSubmitCreateActivity(event) {

    event.preventDefault();
    try {
      let _datos = {
        actividad: actividadInput,
        precio: precioInput
      }

      if (precioInput === 0) {
        alert("La actividad no puede ser gratuita")
        return;
      }

      const response = await fetch(`${url}api/actividades/auth/`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`${data.message}`);
      }
      alert(`Actividad ${actividadInput} creada`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No se podido crear la actividad");
    }
  }



  return (
    <>
      <br />
      <form className='formAdmin' onSubmit={onSubmitCreateActivity} >
        <h1>Nueva Actividad</h1>
        <br />

        <label>Nombre Actividad </label>
        <input
          type="text"
          name="actividad"
          placeholder="Taekwondo, Tricking, FunCore, Pilates"
          value={actividadInput}
          onChange={(e) => setActividadInput(e.target.value)}
        />
        <br />
        <label>Precio </label>
        <input
          type="text"
          name="precio"
          placeholder="0.00"
          value={precioInput}
          onChange={(e) => setPrecioInput(e.target.value)}
        />

        <input className='botonForm' type="submit" value="Crear actividad" />


      </form>
      <br />
    </>
  )
}
