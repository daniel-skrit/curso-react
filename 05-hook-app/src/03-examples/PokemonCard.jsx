import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, types = [], sprites = [] }) => {
  const pokeRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const {height, width} = pokeRef.current.getBoundingClientRect();
    setBoxSize({height, width });
  }, []);

  return (
    <>
      <section style={{ display: "flex" }} ref={pokeRef}>
        <h2 className="text-capitalize">
          #{id} - {name}{" "}
        </h2>
        <h2 className="text-capitalize">
          {" "}
          Types: {types[0]?.type.name}
          {types.length === 2 && ", "}
          {types[1]?.type.name}
        </h2>
        {/* Imagenes */}
        <div>
          {sprites.map((sprite) => {
            return <img src={sprite} key={sprite} />;
          })}
        </div>
      </section>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
