// con esto se puede extraer los datos
import {useContext} from 'react'
// se tiene que identificar con el de arriba
import AuthContext from '../context/AuthProvider'

const useAuth = () =>{

    // para poder extraer los valores
    return useContext(AuthContext)


}

export default useAuth