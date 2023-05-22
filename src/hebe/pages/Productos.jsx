import "../../ui/css/form.css";

export const Productos = () => {

  return (
    <>
      <div className="bodyInicio">
        <h1>Productos</h1>
      </div>
      <div class="formContent">
        <form class="content" action="/api/usuarios?limite=100" method="get">
          <h2>Obtener usuarios</h2>
          <br></br>
          Cuantos usuarios quieres ver<br />

          <input type="text" name="limite" value="5" placeholder="5" />
          <br />
          <input className="submit" type="submit" value="Enviar" />
        </form>
      </div>
      <br/>
      <div class="formContent">
        <form class="content" action="/api/usuarios" method="post">
          <h2>Crear usuario</h2>
          <br></br>
          Introduce los datos<br />

          <input type="text" name="nombre" value="Lara Alonso González" /><br />
          <input type="text" name="correo" value="almudena85perez@gmail.com" /><br />
          <input type="password" name="password" value="12345678" /><br />
          <input type="text" name="rol" value="ADMIN_ROLE" /><br />
      
          <input className="submit" type="submit" value="Enviar" />
        </form>
      </div>

    </>
  )
}
