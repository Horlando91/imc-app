
import { TypeAnimation } from "react-type-animation";

export const HeaderAnimate = () => {

  return (

      <TypeAnimation
        sequence={[
          'Calculadora',
          500,
          'Calculadora de', //  Continuing previous Text
          500,
          'Calculadora de grasa',
          500,
          'Calculadora de grasa corporal',
          500,
          'Versión 1.1',
          500,
          '',
          500,
        ]}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
    speed={60}
  />
  )
}
