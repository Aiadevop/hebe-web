export async function onSubmitGetUsers(event) {

    event.preventDefault();
    try {

      const response = await fetch(`http://localhost:8080/api/usuarios?limite=100`, {
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