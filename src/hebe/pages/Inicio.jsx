import { ActInicio, Cartel, Footer, Horarios, QuienSomos, Slide } from "../../ui/components"
import "../../ui/css/cartel.css";



export const Inicio = () => {

  return (
    <>
      <Slide/>
      <br/>
      <ActInicio />
      <QuienSomos />
      <Horarios/>    
      <Footer/>
    </>
  )
}
