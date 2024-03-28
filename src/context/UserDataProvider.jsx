import { useState } from 'react';
import { UserDataContext } from './UserDataContext';

export const UserDataProvider = ({ children })  => {

   const [data, setData] = useState({
    edad:0,
    genero:'masculino'
   })

   const setDataUser = (edad, genero) => {
    setData({
        edad,
        genero
    })
   }

  return (
    <UserDataContext.Provider value={{ data, setDataUser }}>
        { children }
    </UserDataContext.Provider>
  )
}
