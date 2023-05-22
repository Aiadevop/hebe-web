import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const Tricking = () => {
  
  return (
    <>
      <br />
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
      <h1 className='taeh1'>Tricking Hebe Moaña</h1>
      <br/>
          <p>
          <strong>¿Quieres probar algo nuevo y emocionante? </strong>¡Prueba nuestro entrenamiento de Tricking en Hebe! El Tricking es un deporte que <strong>combina artes marciales, acrobacias y gimnasia </strong>en una secuencia fluida de movimientos impresionantes. Nuestros instructores expertos te guiarán a través de técnicas de volteretas, saltos y patadas, mientras mejoras tu coordinación, fuerza y flexibilidad. En nuestra escuela de Tricking en Moaña, te desafiamos a alcanzar nuevos niveles de habilidad y a <strong>descubrir tu verdadero potencial atlético.</strong> Además, nuestro ambiente de apoyo y amistoso te permitirá conectarte con otros apasionados del Tricking y disfrutar de la comunidad. Únete a nosotros ahora y experimenta la emoción del Tricking en Hebe.
          
          </p>
        </div>        <img className='taekwondoImg tricking' src='\resources\img\trikingweb.png'></img>
      </div>

      <div className='taekwondoContainerMovil'>
      <h1 className='taeh1 movil'>Tricking Hebe Moaña</h1>

        <img className='taekwondoImgx' src='\resources\img\trikingweb.png'></img>
        <div className='taekwondo'>
   
          <p>
          <strong>¿Quieres probar algo nuevo y emocionante?</strong> ¡Prueba nuestro entrenamiento de Tricking en Hebe! El Tricking es un deporte que <strong>combina artes marciales, acrobacias y gimnasia</strong> en una secuencia fluida de movimientos impresionantes. Nuestros instructores expertos te guiarán a través de técnicas de volteretas, saltos y patadas, mientras mejoras tu coordinación, fuerza y flexibilidad. En nuestra escuela de Tricking en Moaña, te desafiamos a alcanzar nuevos niveles de habilidad y a <strong>descubrir tu verdadero potencial atlético.</strong> Además, nuestro ambiente de apoyo y amistoso te permitirá conectarte con otros apasionados del Tricking y disfrutar de la comunidad. Únete a nosotros ahora y experimenta la emoción del Tricking en Hebe.
          
          </p>
        </div>
      </div>
      <div >        
          <br/>
          <h3 className='divHorario'>Horarios</h3>
          <a href="\resources\descargas\horariosHebe.pdf" download className='horarioH5'>Descargar horarios</a>
          <br/>
          <h3 className='divHorarioh3'>Tenemos clases de tricking de <strong>lunes a viernes</strong> de <strong>17:30-19:30 </strong> en el pabellón de Quintela.</h3>   
          <br/>
      </div>
      <Footer/>


    </>
  )
}
