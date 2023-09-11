import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({ url }) => {

  const [ resident, getResident ] = useFetch(url) 
  
  useEffect(() => {
   getResident()
  }, [])

  return (

  

  <article className="resident  resident-cards">
        <header className="resident__header"> 
        <img className="resident__image"src={resident?.image} alt=""/>
        <div className="resident__status">
          <span className="resident__status__circle">{}</span>
          <span className="resident__status__values">{resident?.status}</span>
        </div>
        </header> 
        <section className="resident__body">
          <h3 className="resident__neme">{resident?.name}</h3>
          <hr className="resident__separato"/>

            <li className="resident__list">
                <span className="resident__item">Specie:</span>
                <span className="resident__value">{resident?.species}</span>
            </li>
        
              <li className="resident__List">
                  <span className="resident__item">Origin: </span>
                  <span className="resident___Value">{resident?.origin.name}</span>
              </li>
              
                <li lassName="resident__list">
                  <span className="resident__item" >Episodes where appear:</span>
                  <span className="resident__Value"> 
                  {resident?.episode.length}</span>
               </li>
                
          </section>

      </article>
  
  )
}

export default ResidentCard