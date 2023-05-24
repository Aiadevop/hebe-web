import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export const Registration = () => {

  const [nameInput, setNameInput] = useState('');
  const [dniInput, setDniInput] = useState('');
  const [telefonoInput, setTelefonoInput] = useState('');
  const [correoInput, setCorreoInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [actividadInput, setActividadInput] = useState([]);
  const url =  'http://localhost:8080/'
  async function onSubmitRegistration(event) {
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

      const response = await fetch(`${url}api/usuarios`, {
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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="\resources\img\logos\HNegro.png" alt="Hebe Web" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Regístrate</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitRegistration}>
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Nombre y apellidos:</label>
              <div className="mt-2">
                <input id="text" name="nombre" type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}/>
              </div>
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">DNI:</label>
              <div className="mt-2">
                <input id="text" name="dni" type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={dniInput}
                  onChange={(e) => setDniInput(e.target.value)}/>
              </div>
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">Teléfono:</label>
              <div className="mt-2">
                <input id="text" name="telefono" type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={telefonoInput}
                     onChange={(e) => setTelefonoInput(e.target.value)}/>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo electrónico:</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={correoInput}
                  onChange={(e) => setCorreoInput(e.target.value)} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div className="text-sm">
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)} />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-grisHebe px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-grisHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grisHebe">Registrarse</button>
            </div>
          </form>
          <NavLink to="/login">
            <p className="mt-10 text-center text-sm text-gray-500">
              Ya tengo cuenta
            </p>
          </NavLink>
        </div>
      </div>
    </>
  )
}