import { heroes } from "../data/heroes";

export const getHereosByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];
  if (!validPublisher.includes(publisher)) throw new Error(`publisher '${publisher}' is not valid`);
  return heroes.filter(hero => hero.publisher === publisher)
}