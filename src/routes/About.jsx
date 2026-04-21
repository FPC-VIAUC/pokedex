import { useState, useRef } from "react";
import { Link } from "react-router";

function About() {
  const [inputText, setInputText] = useState("");
  const searchRef = useRef(null);

  return (
    <>
      <div className="container-fluid text-center">
        <h1>Pokédex</h1>
        <p>Hello and welcome to my Pokédex!</p>
        <p>
          To get started got to the <Link to={"/page/1"}>Pokédex pages</Link> or
          search for a Pokémon below!
        </p>
        <div className="input-group container" style={{ maxWidth: "720px" }}>
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter")
                setTimeout(() => searchRef.current?.click(), 0);
              setInputText(event.currentTarget.value);
            }}
            placeholder="Pokémon name or id"
            className="form-control"
            type="text"
          />
          <Link
            to={`/pokemon/${inputText}`}
            ref={searchRef}
            className="btn btn-primary"
          >
            Search
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
