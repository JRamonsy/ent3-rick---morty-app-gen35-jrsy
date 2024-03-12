import axios from "axios"
import { useState } from "react"

const useGet = (url) => {
  const [response, setResponse] = useState() /* Nos permite guardar la informacón de la Api que utilicemos*/

  const [hasError, setHasError] = useState(false) /*estado para el manejo de errores el cual  comienza en false por que al comienzo no se sabe si va a haber un error, primero se tiene que ejecutar el catch para que halla un error.*/

  const getApi = () => { // funcion que se pasa como parametro a otra funcion
    axios.get(url) // se tiene qeu guardar en algun lugar puede ser en useGet o getApi es lo mismo
    // axios retora una promesa ya que es una peticiones asincronas, esto por medio del .then y .catch
      .then(res => {     
      // en el .then es que exitosamente todo se ejecuta.       
        setResponse(res.data)//res es un objeto de 6 propiedades, dentro de data esta la info del objeto y dentro de setter se guarda el JSON.
        setHasError(false) //no hay error
      })  
      .catch(err => {
        console.log(err)
        setHasError(true) //si hay error en .catch se ejecuta el estado setHasError por eso se coloca en true
      })
    }
    
  return [response, getApi, hasError] // el return debé de ir afuera de axios
                           // useGet retorna un arreglo 
}

export default useGet