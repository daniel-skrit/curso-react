import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { pokemons = [], isLoading, page } = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map(({name}) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading || page <= 1}
        onClick={() => dispatch(getPokemons(page - 2))}
      >
        Previous
      </button>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
      <hr />
      <span>Page <b>{page}</b></span>
    </>
  );
};
