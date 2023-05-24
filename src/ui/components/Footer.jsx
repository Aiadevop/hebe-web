import "../css/quiensomos.css";
import "../css/footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <section id="quiensomos">
            <div className="contactoinicio">
                <div >
                    <h2>Club de taekwondo Hebe Moaña</h2>
                    <br/>
                    <h3>Rúa de Miguel Enríquez, 36, 36950 Moaña, Pontevedra</h3>
                    <h3>662 07 76 28</h3>
                    <div className="flex flex-row">
                        
                    </div>

                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.1991628231394!2d-8.741551424113727!3d42.274271771200986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f63dd1dab50b5%3A0xab727b80e726d0ff!2sR%C3%BAa%20de%20Miguel%20Enr%C3%ADquez%2C%2036%2C%2036950%20Moa%C3%B1a%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1682149345222!5m2!1ses!2ses" ></iframe>
                </div>
            </div>

            <div>Para ver las atribuciones de las fotografías de esta web pulse <NavLink to="/atribuciones">aquí</NavLink></div>
        </section>
    )
}
