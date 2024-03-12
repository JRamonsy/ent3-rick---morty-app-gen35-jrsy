import { useEffect, useState } from 'react'
import './App.css'
import useGet from './hooks/useGet'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'


function App() {

  
  const randomLocation = getRandomNumber(126) /*se importa y se guarda en una variable llamada "randomLocation" la funcion "getRandomeNumber" en la cual se realizo la logica de seleccion de un numero al azar de 1 hasta un limite, tambien se le agrega el limite el cual es 126, para despues concatenarla en la url */
  
  const [locationSelect, setLocationSelect] = useState(randomLocation) // estudiar guarda la info del input

  console.log(locationSelect)

  const url = `https://rickandmortyapi.com/api/location/${locationSelect || getRandomNumber(126)}` /* se coloca getRandomeNumber para que cuando se haga una busqueda sin clocar valor este elija un numero al azar y lo muestre*/

  const [location, getLocation, hasError] = useGet(url)/* useGet retorna un arreglo de las ´posiciones que necesitemos, en el cual contiene dentro un estado el cual es "response" y lo renombraremos "location" que guarda la data de Api y una funcion que permite hacer la peticion asincronica la cual es "GetApi" y renombraremos como "getLocation", hasError es la logica del manejo de errores se puede cambiar el nombre pero por motivos semanticos se deja igual*/
  
  useEffect(() => {
    getLocation()
  }, [locationSelect]) // url o locationselect
  
  return (
    <div className='app'>
      <img className='app__image' src="/public/baner.jpg" alt="" />
      <FormSearch setLocationSelect={setLocationSelect} />
      {hasError ? (
        <h2 className='app__error'>❌Hey! you must provide an id from 1 to 126 😢</h2>
      ) : (
        <>
            <LocationInfo location={location} /> 
          <div className='container-resident'>
            {location?.residents.map(url => ( //Cada vez que se hace un map se necesita un key
              <ResidentCard key={url} url={url} /> // estudiar
                ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
