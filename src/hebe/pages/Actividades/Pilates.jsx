import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const Pilates = () => {
  return (
    <>
      <br />
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
      <h1 className='taeh1'>Pilates Hebe Moaña</h1>
      <br/>
          <p>
          <strong>¡Descubre los beneficios del Pilates en Hebe!</strong> En nuestra escuela de Pilates en Moaña, <strong>mejorarás tu fuerza, equilibrio y flexibilidad, y reducirás el estrés</strong> mientras aprendes la técnica correcta. Nuestros instructores altamente cualificados se enfocan en <strong>desarrollar tu control corporal, postura y respiración</strong>, mientras te ayudan a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases personalizadas y adaptadas a todos los niveles, tanto los principiantes como los avanzados pueden disfrutar de los beneficios del Pilates en un <strong>ambiente relajado y acogedor.</strong> ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          
          </p>
        </div>
        <img className='taekwondoImg pilates' src='V'></img>
      </div>

      <div className='taekwondoContainerMovil'>
      <h1 className='taeh1 movil'>Pilates Hebe Moaña</h1>
        <img className='taekwondoImgx' src='\resources\img\pilatesweb.png'></img>
        <div className='taekwondo'>
          <p>
          <strong>¡Descubre los beneficios del Pilates en Hebe!</strong> En nuestra escuela de Pilates en Moaña, <strong>mejorarás tu fuerza, equilibrio y flexibilidad, y reducirás el estrés</strong> mientras aprendes la técnica correcta. Nuestros instructores altamente cualificados se enfocan en <strong>desarrollar tu control corporal, postura y respiración</strong> mientras te ayudan a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases personalizadas y adaptadas a todos los niveles, tanto los principiantes como los avanzados pueden disfrutar de los beneficios del Pilates en un <strong>ambiente relajado y acogedor.</strong> ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          
          </p>
        </div>
      </div>
      <div >        
          <br/>
          <h3 className='divHorario'>Horarios</h3>
          <a href="\resources\descargas\horariosHebe.pdf" download className='horarioH5'>Descargar horarios</a>
          <br/>
          <h3 className='divHorarioh3'>Tenemos clases de pilates todos los <strong>martes</strong> y <strong>jueves</strong> de <strong>9:30-10:30 </strong>y de <strong>21:30 a 22:30</strong> en el Club Hebe.</h3>   
          <br/>
      </div>
      <Footer/>
    </>
  )
}
