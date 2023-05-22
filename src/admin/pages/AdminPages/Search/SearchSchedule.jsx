import { useState } from 'react'

export const SearchSchedule = () => {
  const [diaInput, setDiaInput] = useState('');
  const [desdeInput, setDesdeInput] = useState('');
  const [hastaInput, setHastaInput] = useState();
  const [salaInput, setSalaInput] = useState('');
  const [actividadInput, setActividadInput] = useState('');
  const [scheduleInput, setScheduleInput] = useState('')
  const [dayResult, setDayResult] = useState('')
  const [fromResult, setFromResult] = useState('')
  const [toResult, setToResult] = useState('')
  const [spaceResult, setSpaceResult] = useState('')
  const [activityResult, setActivityResult] = useState('')
  const [activityNameResult, setActivityNameResult] = useState('')
  const url = 'http://localhost:8080/'


  //Función obtener Actividads.
  async function onSubmitGetSchedule(event) {

    event.preventDefault();
    try {
      let _datos = {
        scheduleInput
      }

      const response = await fetch(`${url}api/buscar/auth/horarios?nombre=lara`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      console.log(data)
      setScheduleInput(data.results[0])
      setDayResult(data.results[0].dia)
      setFromResult(data.results[0].desde)
      setToResult(data.results[0].hasta)
      setSpaceResult(data.results[0].sala)
      setActivityResult(data.results[0].actividad)
      setActivityNameResult(data.results[0].nombreActividad)

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
      <form className='formAdmin' onSubmit={onSubmitGetSchedule} >
        <label>Filtro </label>
        <br />
        <div>  
        <label>Día </label>
        <select
          name="dia"
          value={diaInput}
          onChange={(e) => setDiaInput(e.target.value)}
        >
          <option value="">Seleccione un día</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>

        <br />
        <label>Hora inicio </label>
        <select name="desde" value={desdeInput} onChange={(e) => setDesdeInput(e.target.value)}>
          {['Hora inicio',
            '0:00', '0:15', '0:30', '0:45',
            '1:00', '1:15', '1:30', '1:45',
            '2:00', '2:15', '2:30', '2:45',
            '3:00', '3:15', '3:30', '3:45',
            '4:00', '4:15', '4:30', '4:45',
            '5:00', '5:15', '5:30', '5:45',
            '6:00', '6:15', '6:30', '6:45',
            '7:00', '7:15', '7:30', '7:45',
            '8:00', '8:15', '8:30', '8:45',
            '9:00', '9:15', '9:30', '9:45',
            '10:00', '10:15', '10:30', '10:45',
            '11:00', '11:15', '11:30', '11:45',
            '12:00', '12:15', '12:30', '12:45',
            '13:00', '13:15', '13:30', '13:45',
            '14:00', '14:15', '14:30', '14:45',
            '15:00', '15:15', '15:30', '15:45',
            '16:00', '16:15', '16:30', '16:45',
            '17:00', '17:15', '17:30', '17:45',
            '18:00', '18:15', '18:30', '18:45',
            '19:00', '19:15', '19:30', '19:45',
            '20:00', '20:15', '20:30', '20:45',
            '21:00', '21:15', '21:30', '21:45',
            '22:00', '22:15', '22:30', '22:45',
            '23:00', '23:15', '23:30', '23:45',
          ].map((optionValue) => (
            <option key={optionValue} value={optionValue}>{optionValue}</option>
          ))}
        </select>

        <br />
        <label>Hora fin </label>
        <select name="hasta" value={hastaInput} onChange={(e) => setHastaInput(e.target.value)}>
          {['Hora fin',
            '0:00', '0:15', '0:30', '0:45',
            '1:00', '1:15', '1:30', '1:45',
            '2:00', '2:15', '2:30', '2:45',
            '3:00', '3:15', '3:30', '3:45',
            '4:00', '4:15', '4:30', '4:45',
            '5:00', '5:15', '5:30', '5:45',
            '6:00', '6:15', '6:30', '6:45',
            '7:00', '7:15', '7:30', '7:45',
            '8:00', '8:15', '8:30', '8:45',
            '9:00', '9:15', '9:30', '9:45',
            '10:00', '10:15', '10:30', '10:45',
            '11:00', '11:15', '11:30', '11:45',
            '12:00', '12:15', '12:30', '12:45',
            '13:00', '13:15', '13:30', '13:45',
            '14:00', '14:15', '14:30', '14:45',
            '15:00', '15:15', '15:30', '15:45',
            '16:00', '16:15', '16:30', '16:45',
            '17:00', '17:15', '17:30', '17:45',
            '18:00', '18:15', '18:30', '18:45',
            '19:00', '19:15', '19:30', '19:45',
            '20:00', '20:15', '20:30', '20:45',
            '21:00', '21:15', '21:30', '21:45',
            '22:00', '22:15', '22:30', '22:45',
            '23:00', '23:15', '23:30', '23:45',
          ].map((optionValue) => (
            <option key={optionValue} value={optionValue}>{optionValue}</option>
          ))}
        </select>
        <br />
        <label>Sala </label>
        <select
          name="sala"
          value={salaInput}
          onChange={(e) => setSalaInput(e.target.value)}
        >
          <option value="">Selecciona una sala</option>
          <option value="HEBE">HEBE</option>
          <option value="QUINTELA">QUINTELA</option>
          <option value="SALA1">SALA1</option>
          <option value="SALA2">SALA2</option>
          <option value="SALA3">SALA3</option>
          <option value="SALA4">SALA4</option>
        </select>
        </div>
        <input
          type="text"
          name="horario"
          placeholder="id horario"
          value={scheduleInput}
          onChange={(e) => setScheduleInput(e.target.value)}
        />
        <br />
        <input className='botonForm' type="submit" value="Buscar" />
        <br />
        <label>
          {dayResult} {fromResult}-{toResult} {spaceResult}
          <br />
          {activityNameResult} - {activityResult}
        </label>
      </form>
      <div >


      </div>
    </>
  )
}
