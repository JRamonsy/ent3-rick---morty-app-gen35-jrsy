import { useEffect } from "react"
import useGet from "../hooks/useGet"
import './styles/ResidentCard.css'

const ResidentCard = ({ url }) => {
  const [ character, getCharacter ] = useGet(url)
  /* se reutiliza el hook useGet para utilizar toda su funcionalidad, lo mismo que en App.jsx pero ahora se renombran los parametros a nuestra cenvenencia*/

  // se realiza la petición por medio de useEffect
  useEffect(() => {
    getCharacter()
  }, [])

  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__image" src={character?.image} alt="" />
        <div className="status">
          <div className={`status__circle ${character?.status}`}></div>
          <div className="status__value">{character?.status}</div>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{character?.name}</h3>
        <hr className="resident__hr" />
        <ul className="resident__list">
          <li className="resident__item"><span className="resident__label">Specie</span><span className="resident__value">{ character?.species}</span></li>
          <li className="resident__item"><span className="resident__label">Origin</span><span className="resident__value">{ character?.origin.name}</span></li>
          <li className="resident__item"><span className="resident__label">Episodes where appear</span><span className="resident__value">{character?.episode.length}</span></li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard

// pascalCase
// es una function
// retorna jsx