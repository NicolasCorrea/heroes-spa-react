import { useMemo } from "react";
import { getHereosByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHereosByPublisher(publisher), [publisher]) ;
  return (
    <div className='card-columns animate__animated animate__fadeIn' >
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div >
  )
}
