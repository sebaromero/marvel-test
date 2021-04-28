import { useState, useEffect } from "react";
import axios from "axios";

export const App = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8277a0618682db7527b4280363fba12f&hash=e57cd1585c0cc0d59902dd29acddb147"
      )
      .then((res) => {
        setCharacters(res.data.data.results);
        //console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(characters);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {characters.map((hero) => (
        <div className="col">
          <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              className="card-img-top"
              alt="..."
              style={{ width: "80%", height: "80%" }}
            />
            <div className="card-body">
              <p className="card-text">{hero.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
