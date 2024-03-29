import { useMemo } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const { search, handleInputChange } = useForm({ search: q });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find hero"
              value={search}
              name="search"
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control"
            />
            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === '' && <div className="alert alert-info">search a hero</div>}
          {(q !== ''  && heroesFiltered.length === 0)&& <div className="alert alert-danger">there is no a hero</div>}

          {q !== '' && heroesFiltered.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
