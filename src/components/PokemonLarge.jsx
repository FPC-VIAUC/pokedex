function PokemonLarge({ pokemon }) {
  if (pokemon == null) return <></>;

  // const stats = pokemon.stats.map((stat) => ({stat.name: stat.base_stat}))
  const stats = pokemon.stats.reduce(
    (acc, s) => Object.assign(acc, { [s.stat.name]: s.base_stat }),
    {},
  );

  return (
    <div className="card" style={{ backgroundColor: pokemon.color }}>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
            <div
              className="col-lg-6 rounded-5 text-center fw-bold p-3"
              style={{
                mixBlendMode: "difference",
                backgroundColor: "#444",
                color: "#DDD",
              }}
            >
              <p>Type(s): {pokemon.types.map((t) => t.type.name).join(", ")}</p>
              <p>
                Abilities(s):{" "}
                {pokemon.abilities.map((a) => a.ability.name).join(", ")}
              </p>
              <div className="container mb-2">
                <div className="row">
                  <div className="col-6">Height: {pokemon.height}</div>
                  <div className="col-6">Weight: {pokemon.weight}</div>
                </div>
              </div>
              <div className="container rounded-2 pb-2 border">
                <div className="row">
                  <div className="col-12 mb-2">Stats</div>
                  <hr />
                  <div className="col-6">Health: {stats.hp}</div>
                  <div className="col-6">Attack: {stats.attack}</div>
                  <div className="col-6">Defense: {stats.defense}</div>
                  <div className="col-6">Speed: {stats.speed}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default PokemonLarge;
