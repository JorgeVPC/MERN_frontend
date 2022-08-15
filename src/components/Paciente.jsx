import usePacientes from '../hooks/usePacientes'

const Paciente = ({paciente}) => {
  const{email,fecha,nombre,propietario,sintomas,_id} = paciente

  const {setEdicion, eliminarPaciente} = usePacientes()

/*    para cambiar el formato de la fecha */
  const formatearFecha=(fecha=>{
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-ES', { dateStyle:'long'}).format(nuevaFecha)
  })

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"> 
      <p className="font-bold uppercase text-indigo-700">
        Nombre: {''}
          <span className="font-normal normal-case text-black my-2">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700">
        Propietario: {''}
          <span className="font-normal normal-case text-black my-2">{propietario}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700">
        Email de contacto: {''}
          <span className="font-normal normal-case text-black my-2">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700">
        Fecha de Alta: {''}
          <span className="font-normal normal-case text-black my-2">{formatearFecha(fecha)}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700">
        Sintomas: {''}
          <span className="font-normal normal-case text-black my-2">{sintomas}</span>
      </p>
      <div className="flex justify-between my-5">
        <button
          type = "button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"       
          onClick={() => setEdicion(paciente)}   
        >
          Editar
        </button>
        <button
          type = "button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"    
          onClick={() => eliminarPaciente(_id)}       
        >
          Eliminar
        </button>
        
      </div>

    </div>
  )
}

export default Paciente