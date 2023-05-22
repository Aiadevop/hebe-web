import React from 'react'
import "../../../../src/ui/css/actividades.css";
import { Footer } from '../../../ui/components';

export const FunCore = () => {
  return (
    <>
      <br />
      <div className='taekwondoContainer'>
        <div className='taekwondo'>
          <h1 className='taeh1'>Funcore Hebe Moaña</h1>
          <br/>
          <p>
            ¡Descubre la mejor combinación de <strong>CrossFit y trabajo del core</strong> en Hebe con nuestro entrenamiento Funcore! En nuestra escuela de Funcore en Moaña,<strong>mejorarás tu fuerza, resistencia, equilibrio y flexibilidad,</strong>  mientras trabajas en tu núcleo y quemas calorías. Nuestros instructores altamente cualificados se enfocan en desafiarte a través de rutinas que combinan levantamiento de pesas, entrenamiento cardiovascular y movimientos funcionales, mientras te ayudan a mejorar tu técnica y a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases dinámicas y personalizadas, tanto los principiantes como los atletas experimentados pueden disfrutar de los beneficios del funcore en un <strong>ambiente motivador y divertido. </strong>¡Únete a nosotros ahora y comienza a transformar tu cuerpo y mente!

          </p>
        </div>
        <img className='taekwondoImg funcore' src='\resources\img\funcoreweb.png'></img>
      </div>

      <div className='taekwondoContainerMovil'>
      <h1 className='taeh1 movil'>Funcore Hebe Moaña</h1>
          <br/>
        <img className='taekwondoImgx' src='\resources\img\funcoreweb.png'></img>
        <div className='taekwondo'>
          <p>
            ¡Descubre la mejor combinación de <strong>CrossFit y trabajo del core en Hebe</strong> con nuestro entrenamiento Funcore! En nuestra escuela de Funcore en Moaña, <strong>mejorarás tu fuerza, resistencia, equilibrio y flexibilidad,</strong> mientras trabajas en tu núcleo y quemas calorías. Nuestros instructores altamente cualificados se enfocan en desafiarte a través de rutinas que combinan levantamiento de pesas, entrenamiento cardiovascular y movimientos funcionales, mientras te ayudan a mejorar tu técnica y a alcanzar tus objetivos de acondicionamiento físico. A través de nuestras clases dinámicas y personalizadas, tanto los principiantes como los atletas experimentados pueden disfrutar de los beneficios del Funcore en un <strong>ambiente motivador y divertido. </strong>¡Únete a nosotros ahora y comienza a transformar tu cuerpo y mente!

          </p>
        </div>
      </div>
      <div >
        <br />
        <h3 className='divHorario'>Horarios</h3>
        <a href="\resources\descargas\horariosHebe.pdf" download className='horarioH5'>Descargar horarios</a>
        <br />
        <h3 className='divHorarioh3'>Tenemos clases de funcore todos los <strong>lunes</strong> y <strong>miércoles</strong> de <strong>9:30-10:30 </strong>y de <strong>21:30 a 22:30</strong> en el club Hebe</h3>
        <br />
      </div>
      <Footer />
    </>
  )
}
