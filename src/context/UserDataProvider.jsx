import { useState } from 'react';
import { UserDataContext } from './UserDataContext';

export const UserDataProvider = ({ children })  => {

   const [data, setData] = useState({
    edadUser:0,
    generoUser:''
   })

   const setDataUser = (edadUser, generoUser) => {
    setData({
        edadUser,
        generoUser
    })
   }

  return (
    <UserDataContext.Provider value={{ data, setDataUser }}>
        { children }
    </UserDataContext.Provider>
  )
}
