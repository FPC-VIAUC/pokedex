import { Link } from "react-router";

function PokemonSmall({ pokemon }) {
  if (pokemon == null) return <></>;

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="text-decoration-none">
      <div className="card" style={{ backgroundColor: pokemon.color }}>
        <div className="card-body">
          <img
            className="card-img-top text-center"
            style={{ imageRendering: "pixelated" }}
            src={pokemon.sprites.front_default}
          ></img>
          <div
            className="card-title text-center rounded-5"
            style={{ mixBlendMode: "difference", backgroundColor: "#444" }}
          >
            <h5 className="fw-bold pb-1" style={{ color: "#DDD" }}>
              {capitalize(pokemon.name)}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default PokemonSmall;
