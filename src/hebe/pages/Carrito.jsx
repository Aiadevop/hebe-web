import { useState } from "react";


export const Carrito = () => {
  const [numeroInput, setnumeroInput] = useState("");

  const [result, setResult] = useState();

  async function onSubmit(event) {

    event.preventDefault();
    try {

      const response = await fetch(`http://localhost:8080/api/usuarios?limite=10`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   numero: numeroInput,
   
        // }),

      });



      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setnumeroInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="bodyInicio">
        <main>
          <div>
            <form onSubmit={onSubmit}>
              <label>¿Cuántos usuarios quieres ver?</label>
              {/* <input
                type="text"
                name="numero"
                placeholder="numero"
                value={numeroInput}
                onChange={(e) => setnumeroInput(e.target.value)}
              />      */}
            
              <br/>
              <input type="submit" value="Enviar" />
            </form>
          </div>
          <div >
            <div>{result}</div>
          </div>
        </main>
      </div>
    
    </div>
  );
}
