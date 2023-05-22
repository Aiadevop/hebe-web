import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const Taekwondo = () => {
  return (
    <>
      <br />
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
          <h1 className='taeh1'>Taekwondo Hebe Moaña</h1>
          <br/>
          <p>
            <strong>¡Descubre los beneficios del taekwondo en Hebe!</strong> En nuestro club de taekwondo en Moaña, aprenderás <strong>técnicas de defensa personal, mejorarás tu forma física y desarrollarás habilidades sociales</strong>. Nuestros instructores altamente cualificados se enfocan en desarrollar tu confianza y autocontrol, mientras mejoran tu coordinación, equilibrio y flexibilidad. A través de nuestras clases divertidas y desafiantes, tanto niños como adultos pueden disfrutar de los beneficios del taekwondo en un ambiente acogedor y motivador. ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          </p>
        </div>
        <img className='taekwondoImg' src='\resources\img\taekwondoweb.png'></img>
      </div>

      <div className='taekwondoContainerMovil'>
      <h1 className='taeh1 movil'>Taekwondo Hebe Moaña</h1>
      <br/>
        <img className='taekwondoImgx ' src='\resources\img\taekwondoweb.png'></img>
        <div className='taekwondo'>


          <p>
            <strong>¡Descubre los beneficios del taekwondo en Hebe!</strong> En nuestro club de taekwondo en Moaña,<strong> aprenderás técnicas de defensa personal, mejorarás tu forma física y desarrollarás habilidades sociales.</strong>  Nuestros instructores altamente cualificados se enfocan en desarrollar tu confianza y autocontrol, mientras mejoran tu coordinación, equilibrio y flexibilidad. A través de nuestras clases divertidas y desafiantes, tanto niños como adultos pueden disfrutar de los beneficios del taekwondo en un ambiente acogedor y motivador. ¡Únete a nosotros ahora y comienza a mejorar tu vida!
          </p>
        </div>
      </div>
      <br/>
      <h2 className='horarioH2'>Horarios</h2>
      <a href="\resources\descargas\horariosHebe.pdf" download className='horarioH5'>Descargar horarios</a>
      <div className='horariocontainer'>
        <div>
          <br />

          <br />
          <img className='taehorario' src='\resources\img\horarios\horarioTaeHebe.png'></img>
        </div>
        <div>
          <br />

          <br />
          <img className='taehorario' src='\resources\img\horarios\horarioQuintela.png'></img>
        </div>
      </div>
      <Footer />
    </>
  )
}
