import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ({ setLocationSelect }) => {

  const inputSearch = useRef() //capturar un elemento del virtual dom

  const handleSubmit = e => { // guardar info del input
    e.preventDefault()
    setLocationSelect(inputSearch.current.value.trim())
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" ref={inputSearch} type="text" />
      <button className="form__btn" >Search</button>
    </form>
  )
}

export default FormSearch