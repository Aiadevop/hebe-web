import { NavLink, Navigate } from 'react-router-dom';
import '../../ui/css/admin.css'


export const AdminPanel = () => {
  let token = sessionStorage.getItem('token')
  let rol = sessionStorage.getItem('rol')
  const urlFront = 'http://localhost:5173'

  if (token && rol) {

    if (!rol.includes("ADMIN_ROLE")) {
      window.location.href = `${urlFront}/login`
    } else {
      return (
        <>
          <div className='adminPanel'>
            <h2>Búsquedas</h2>
            <ul className="adminPanelul">
              {/* <li className='adminLi'>
            <NavLink className="boton" to="/auth/SearchUser">
              <button className='botonAdmin'>Buscar usuario</button>
            </NavLink>
          </li>
          <li className='adminLi'>
            <NavLink className="boton" to="/auth/SearchActivity">
              <button className='botonAdmin'>Buscar actividad</button>
            </NavLink>
          </li> */}
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/SearchSchedule">
                  <button className='botonAdmin'>Busquedas</button>
                </NavLink>
              </li>
            </ul>

            <h2>Usuarios</h2>
            <ul className="adminPanelul">

              <li className='adminLi'>
                <NavLink className="boton" to="/auth/GetUser">
                  <button className='botonAdmin'>Mostrar usuarios</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/CreateUser">
                  <button className='botonAdmin'>Crear Usuario</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/UpdateUser">
                  <button className='botonAdmin'>Actualizar Usuario</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/DeleteUser">
                  <button className='botonAdmin'>Borrar Usuario</button>
                </NavLink>
              </li>
            </ul>

            <h2>Actividades</h2>
            <ul className="adminPanelul">

              <li className='adminLi'>
                <NavLink className="boton" to="/auth/GetActivity">
                  <button className='botonAdmin'>Mostrar Actividades</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/CreateActivity">
                  <button className='botonAdmin'>Crear Actividad</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/UpdateActivity">
                  <button className='botonAdmin'>Actualizar Actividad</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/DeleteActivity">
                  <button className='botonAdmin'>Borrar Actividad</button>
                </NavLink>
              </li>
            </ul>

            <h2>Horarios</h2>
            <ul className="adminPanelul">
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/GetSchedule">
                  <button className='botonAdmin'>Mostrar Horarios</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/CreateSchedule">
                  <button className='botonAdmin'>Crear Horarios</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/UpdateSchedule">
                  <button className='botonAdmin'>Actualizar Horarios</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/DeleteSchedule">
                  <button className='botonAdmin'>Borrar Horarios</button>
                </NavLink>
              </li>
            </ul>

            <h2>Agenda</h2>
            <ul className="adminPanelul">
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/CreateUserinSchedule">
                  <button className='botonAdmin'>Crear usuario en el horario.</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/DeleteUsertoSchedule">
                  <button className='botonAdmin'>Borrar usuario del horario</button>
                </NavLink>
              </li>
              <li className='adminLi'>
                <NavLink className="boton" to="/auth/DeleteUsertoDiary">
                  <button className='botonAdmin'>Dar de baja al usuario en la agenda</button>
                </NavLink>
              </li>
            </ul>

          </div>

        </>
      )
    }
  }
}
