npm run dev

Instalamos para poder hacer condicionales en el css

npm i styled-components react-icons

package.json manipulado para poder usar carousel

npm i react-responsive-carousel

npm install axios

Para trabajar con la base de datos:

Documentación en https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/

- Instalamos npm install mongodb@5.1
- Vamos a mongoAtlas que lo tenemos previamente instalado.
- Creamos un proyecto y creamos nuestra primera base de datos.
- Creamos los datos de autenticacion de la base de datos.
- Creamos una base de datos en la interfaz de Atlas.
  Seleccionamos clúster compartido para que sea gratuito y lo creamos. ClusterHebeWeb
- Usamos la extensión MongoDB for VS Code para conectarnos.
  Click on "View" and open "Command Palette."
  Search "MongoDB: Connect" on the Command Palette and click on "Connect with Connection String." ctrl+may+p
  and paste mongodb+srv://<username>:<password>@clusterhebeweb.0qtss0j.mongodb.net/test

- Otra opcion es conectarnos con Mongocompass
  Usando la misma dirección en la entrada.

- npm i express dotenv cors
- Al instalar express debemos crear en la raiz de nuestro proyecto el archivo app.js

  const express = require('express')
  const app = express()
  const port = 3000

  app.get('/', (req, res) => {
  res.send('Hello World!')
  })

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })

  Para ejecutar la aplicación node app.js
