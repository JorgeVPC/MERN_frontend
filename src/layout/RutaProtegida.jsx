// NAVIGATE permite redireccionar
import {Outlet,Navigate} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
// para sacar variables
import useAuth from '../hooks/useAuth'

const RutaProtegida = () => {

    const {auth,cargando} = useAuth()

    if(cargando) return 'cargando...'
    return (
      <>
{/* //veterinario */}
        <Header /> 
          {/*  {auth?._id ? <Outlet/> : (<Navigate to="/"/>)} 
          {auth?.veterinario._id ? (   */}
          {auth?._id ? (
            <main className="container mx-auto mt-10">
              <Outlet/>
            </main>
            ) : (<Navigate to="/"/>)
          }

        <Footer />


      </>
    )
}

export default RutaProtegida