import { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';


export const Login = () => {

  const [correoInput, setCorreoInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const url = 'http://localhost:8080/'
  const urlFront = 'http://localhost:5173'


  async function onSubmitLogin(event) {
    event.preventDefault();
    try {
      let _datos = {
        correo: correoInput,
        password: passwordInput
      }

      if (!correoInput || !passwordInput) {
        alert("Introduzca un correo válido")
        return;
      }


      const response = await fetch(`${url}api/auth/login`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });

      sessionStorage.clear()
      const data = await response.json();
      console.log(data)

      if (response.status !== 200) {
        console.log(response)
        throw data.error || new Error(`${response.message}`);
      }
      if (data.token) {
        if (data.usuario.rol === "ADMIN_ROLE") {
          sessionStorage.setItem('token', JSON.stringify(data.token))
          sessionStorage.setItem('user', JSON.stringify(data.usuario))
          sessionStorage.setItem('nombre', JSON.stringify(data.nombre))
          sessionStorage.setItem('rol', JSON.stringify(data.rol))   
          window.location.href = `${urlFront}/auth/adminpanel`
        } else {
          sessionStorage.setItem('token', JSON.stringify(data.token))
          sessionStorage.setItem('user', JSON.stringify(data.usuario))
          sessionStorage.setItem('nombre', JSON.stringify(data.nombre))
          sessionStorage.setItem('dni', JSON.stringify(data.dni))
          sessionStorage.setItem('telefono', JSON.stringify(data.telefono))
          sessionStorage.setItem('correo', JSON.stringify(data.correo))
          sessionStorage.setItem('horarioUsuario', JSON.stringify(data.horarioUsuario))
          sessionStorage.setItem('totalPrecio', JSON.stringify(data.totalPrecio))
          sessionStorage.setItem('rol', JSON.stringify(data.rol))

          window.location.href = `${urlFront}/auth/userpanel`
          // alert("Tenemos token")
        }
      }
      alert(`Login ok`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No hemos podido acceder a su cuenta.");
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="\resources\img\logos\HNegro.png" alt="Hebe Web" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Accede a tu cuenta</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo electrónico:</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={correoInput}
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
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)} />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-grisHebe px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-grisHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grisHebe">Acceder</button>
            </div>
          </form>
          <NavLink to="/registration">
            <p className="mt-10 text-center text-sm text-gray-500">
              No tengo cuenta
            </p>
          </NavLink>
        </div>
      </div>
    </>
  )
}