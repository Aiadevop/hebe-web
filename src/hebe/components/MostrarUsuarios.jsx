// import axios from 'axios';
import { useState } from 'react';

export const MostrarUsuarios = () => {
  const url=  'http://localhost:8080/'
  
    const [users, setUsers] = useState([]) 

    async function onSubmit(event) {

      event.preventDefault();
      try {
  
        const response = await fetch(`${url}api/usuarios?limite=100`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }  
        });   
  
        const data = await response.json();
    
        if (response.status !== 200) {
          throw data.error || new Error(`Request failed with status ${response.status}`);
        }
  
        setUsers(data.usuarios);
      } catch (error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    }

    return (
        <>
            <br />
            <h1>Admin</h1>
            <form onSubmit={onSubmit}>        
              <input type="submit" value="Mostrar usuarios" />
            </form>
            <div className='users'>
                <ol>
                    {
                        users.map(({ id, nombre, correo }) => (
                            <>
                                <li key={id}>
                                {nombre}
                                <br/>
                                {correo}
                                </li>                        
                            </>
                        ))}
                </ol>
            </div>
        </>
    )
}
