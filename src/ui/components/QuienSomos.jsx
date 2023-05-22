import "../css/quiensomos.css";

export const QuienSomos = () => {
    return (
        <section id="quiensomos">
            <div className="quiencontainer">
                <div className="pdiv">

                    <p className="pquien">
                        <strong>¡Bienvenidos a Hebe!</strong> La escuela de taekwondo en Moaña que ofrece <strong>clases divertidas y desafiantes para niños y adultos</strong> . Además del taekwondo, también ofrecemos pilates, funcore y tricking para aquellos que buscan variedad en su entrenamiento.
                    </p>
                    <p className="pquien">
                        Nuestros instructores altamente cualificados se centran en desarrollar habilidades físicas y sociales fomentando el autocontrol. En Hebe, nuestros estudiantes aprenden <strong><i>taekwondo</i> mientras mejoran su coordinación, equilibrio y flexibilidad.</strong>
                    </p>
                    <p className="pquien">
                        Ofrecemos entrenamiento para adultos con un enfoque en mejorar la salud y la fuerza en Moaña. Y si buscas algo diferente, también puedes probar nuestras clases de <strong><i>pilates</i> para mejorar tu fuerza y flexibilidad,</strong> o nuestros entrenamientos de <strong><i>funcore</i> para un desafío extra.</strong>
                    </p>
                    <p className="pquien">
                        Si quieres probar algo realmente emocionante, <strong>¡prueba nuestro <i>tricking</i>! </strong>Esta actividad combina elementos del <strong>taekwondo con acrobacias</strong>. ¡Es perfecto para aquellos que buscan desafiar sus límites y aprender nuevos trucos!
                    </p>
                    <p className="pquien">
                        En nuestra escuela de taekwondo en Pontevedra, encontrarás un ambiente acogedor y motivador. No importa si eres principiante o experto en artes marciales,<strong>¡te ayudaremos a alcanzar tus objetivos!</strong>  ¡Únete a la comunidad de Hebe y descubre todo lo que podemos ofrecerte!
                    </p>
                </div>
                <div className="pdivmovil">

                    <p className="pquien">
                        <strong>¡Bienvenidos a Hebe!</strong>La escuela de taekwondo en Moaña que ofrece <strong>clases divertidas y desafiantes para niños y adultos</strong>. Además del taekwondo, también ofrecemos pilates, funcore y tricking para aquellos que buscan variedad en su entrenamiento.
                    </p>
                    <br/>            
                    <p className="pquien">
                        En Hebe, nuestros estudiantes aprenden los fundamentos del <strong><i>taekwondo</i> mientras mejoran su coordinación, equilibrio y flexibilidad.</strong>
                    </p>
                    <br/>
                    <p className="pquien">
                         Y si buscas algo diferente, también puedes probar nuestras clases de <strong><i>pilates</i>para mejorar tu fuerza y flexibilidad,</strong>  o nuestros entrenamientos de <strong><i>funcore </i>para un desafío extra.</strong> 
                    </p>
                    <br/>
                    <p className="pquien">
                        Si quieres probar algo realmente emocionante, <strong>¡prueba nuestro Tricking!</strong> Esta actividad combina elementos del <strong>taekwondo con acrobacias.</strong> ¡Es perfecto para aquellos que buscan desafiar sus límites y aprender nuevos trucos!
                    </p>
                    <br/>
                    <p className="pquien">
                        No importa si eres principiante o experto,<strong>¡te ayudaremos a alcanzar tus objetivos!</strong>  ¡Únete a la comunidad de Hebe y descubre todo lo que podemos ofrecerte!
                    </p>
                </div>
                <br></br>
                <div className="buttondiv">

                    {/* OJO CAMBIAR MAIL */}
                    <a href="mailto:almudena85perez@gmail.com">
                        <button className="butempiezahoy">¡Prueba gratis!</button>
                        {/* <button className="butempiezahoy">Unete</button> */}
                    </a>
                </div>

            </div>
        </section>
    )
}
