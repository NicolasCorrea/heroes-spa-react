import { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) return <Redirect to="/" />;
  const handleReturn = () =>
    history.lenght <= 2 ? history.push('/') : history.goBack();
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush animate__animated animate__fadeIn">
          <li>
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li>
            <b>Publisher:</b>
            {publisher}
          </li>
          <li>
            <b>First appearence:</b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
