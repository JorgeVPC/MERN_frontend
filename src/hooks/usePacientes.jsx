import {useContext} from 'react'
import PacientesContext from '../context/PacientesProvider'

const usePacientes = () =>{

    // para poder extraer los valores
    return useContext(PacientesContext)


}

export default usePacientes