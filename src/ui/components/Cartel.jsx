import "../css/cartel.css";


export function Cartel() {
  return (


    <div className="contenedor">
      <img className="cartel" src="../src/ui/img/taepc.jpg" alt="chica pegando patada" />,
      <img className="cartelmovil" src="../src/ui/img/taemovil.jpg" alt="chica pegando patada" />,

      {/* He dejado este codigo por si no lo queremos hacer como única imagen, ojo tb hay que borrar el css */}
      {/* <div className="padre">Haz que el ejercicio sea divertido</div>
      "Descubre tu fuerza interior y desata tu potencial con nosotros"
      "Desafía tus límites y alcanza tus metas junto a nuestra comunidad"
      "La perseverancia es la clave del éxito, ¡únete a nosotros y alcanza lo imposible!"
      "No te rindas, entrena con nosotros y alcanza tus objetivos"
      "Encuentra la disciplina que necesitas para triunfar en la vida, ¡únete a nuestro equipo!"
      "Atrévete a ser diferente, únete a nuestra comunidad y descubre lo que eres capaz de lograr"
      <img className="hijo" src="../src/ui/img/tae22.png" alt="chica pegando patada" />, */}
    </div>
  );
}

