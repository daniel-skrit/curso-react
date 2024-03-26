import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("me volvi a renderizar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incremento
    </button>
  );
});
