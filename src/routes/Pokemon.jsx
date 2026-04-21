import { useParams } from "react-router";
import { useState, useEffect } from "react";
import PokemonLarge from "../components/PokemonLarge";

class NotFoundError extends Error {}

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [noPokemon, setNoPokemon] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (response.status == 404) throw new NotFoundError();
        return response;
      })
      .then((response) => response.json())
      .then(async (p) =>
        Object.assign(p, {
          color: await fetch(p.species.url)
            .then((response) => response.json())
            .then(({ color }) => color.name),
        }),
      )
      .then(setPokemon)
      .catch((e) => {
        if (e instanceof NotFoundError) setNoPokemon(true);
        else throw e;
      });
  });

  if (noPokemon)
    return (
      <p className="ms-3">Pokemon with id or name, "{id}", does not exist...</p>
    );

  return (
    <>
      <div className="container">
        <PokemonLarge pokemon={pokemon} />
      </div>
    </>
  );
}

export default Pokemon;
