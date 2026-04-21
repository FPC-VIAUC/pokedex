import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import PokemonSmall from "../components/PokemonSmall";

function PokemonPage() {
  const pokemonsPerPage = 36;

  let { pageNumber } = useParams();
  pageNumber = Math.max(0, pageNumber - 1);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${pageNumber * pokemonsPerPage}`,
    )
      .then((response) => response.json())
      .then(({ results }) =>
        results.map(({ url }) =>
          fetch(url).then((response) => response.json()),
        ),
      )
      .then((pokemons) => Promise.all(pokemons))
      .then((pokemons) =>
        pokemons.map(async (p) =>
          Object.assign(p, {
            color: await fetch(p.species.url)
              .then((response) => response.json())
              .then(({ color }) => color.name),
          }),
        ),
      )
      .then((pokemons) => Promise.all(pokemons))
      .then(setPokemons);
  });

  const pokemonPageHTML = (page) => {
    if (page == null) return <></>;
    if (page.length == 0)
      return <p>There seems to be no pokemons on this page...</p>;
    return page.map((p) => (
      <div
        className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2"
        key={p.id}
      >
        <PokemonSmall pokemon={p}></PokemonSmall>
      </div>
    ));
  };

  return (
    <>
      <div className="container">
        <div className="row">{pokemonPageHTML(pokemons)}</div>
      </div>
      <div className="container my-2">
        <div className="row">
          <Link
            to={`/page/${Math.max(1, pageNumber)}`}
            className="col-4 btn btn-primary"
          >
            Previous page
          </Link>
          <div className="col-4 text-center">
            <p>Page {pageNumber + 1}</p>
          </div>
          <Link
            to={`/page/${pageNumber + 2}`}
            className="col-4 btn btn-primary"
          >
            Next page
          </Link>
        </div>
      </div>
    </>
  );
}

export default PokemonPage;
