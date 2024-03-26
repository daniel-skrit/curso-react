import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isloading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Multiple Custom Hooks</h1>
      <hr />
      {isloading ? (
        <LoadingMessage></LoadingMessage>
      ) : (
        <PokemonCard
          types={data?.types}
          name={data?.name}
          id={data?.id}
          sprites={[
            data?.sprites.front_default,
            data?.sprites.front_shiny,
            data?.sprites.back_default,
            data?.sprites.back_shiny,
          ]}
        ></PokemonCard>
      )}
      <br />
      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement(1) : null)}
        disabled={counter === 1}
      >
        Anterior
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter < 1025 ? increment(1) : null)}
        disabled={counter === 1025}
      >
        Siguiente
      </button>
    </>
  );
};
