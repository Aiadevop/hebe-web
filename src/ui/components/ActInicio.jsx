import { NavLink } from "react-router-dom";
import "../css/actinicio.css";


export function ActInicio() {
    return (


        <section>

            <div className="imageContainer">
                <ul className="listImage">
                    <NavLink className="carta" to="/taekwondo">
                        <div className="cartaActividad">
                            <img className="imagenicon" src="\resources\iconos\taeicon.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Taekwondo</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                    <NavLink className="carta" to="/pilates">
                        <div className="cartaActividad" >
                            <img className="imagenicon" src="\resources\iconos\pilatesicon.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Pilates</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                    <NavLink className="carta" to="/funcore">
                        <div className="cartaActividad" >
                            <img className="imagenicon" src="\resources\iconos\funcoreicon.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Fun Core</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                    <NavLink className="carta" to="/tricking">
                        <div className="cartaActividad" >
                            <img className="imagenicon" src="\resources\iconos\deporte.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Tricking</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                </ul>
            </div>


            <div className="imageContainerMobile">
                <ul className="listImage">
                    <NavLink className="carta" to="/taekwondo">
                        <div className="cartaActividad">
                            <img className="imagenicon" src="\resources\iconos\taeicon.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Taekwondo</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                    <NavLink className="carta"  to="/pilates">
                        <div className="cartaActividad">
                            <img className="imagenicon" src="\resources\iconos\pilatesicon.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Pilates</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                </ul>
                <ul className="listImage">
                    <NavLink className="carta"  to="/funcore">
                        <div className="cartaActividad">
                            <img className="imagenicon" src="\resources\iconos\funcoreicon.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Fun Core</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                    <NavLink className="carta" to="/tricking">
                        <div className="cartaActividad" >
                            <img className="imagenicon" src="\resources\iconos\deporte.png" alt="iconotaekwondo" />
                            <h2 className="h2icon">Tricking</h2>
                            <p className="picon">Saber más ...</p>
                        </div>
                    </NavLink>
                </ul>
            </div>
            <div className="h1div">
                <h1> Hebe - Club de taekwondo </h1>
            </div>
        </section>
    );
}
