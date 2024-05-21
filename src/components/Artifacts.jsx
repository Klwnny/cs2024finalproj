import React, { useState } from "react";
import { Artifacts } from "../data/Artifacts";

function Artifact() {
  const [filter, setFilter] = useState("");

  const filteredProducts = Artifacts.filter((Artifacts) =>
    Artifacts.Name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="App">
      <h1>Artifacts Collection</h1>
      <input
        className="uk-input"
        type="text"
        placeholder="Filter by Name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br />
      <div className="uk-child-width-1-3@m uk-grid">
      {filteredProducts.map((Artifacts) => (
      <div key={Artifacts.ID}>
        <div className="uk-card uk-card-default">
            <div className="uk-card-body">
                <h3 className="uk-card-title">{Artifacts.Name}</h3>
                <div class="uk-card-badge uk-label">ID: {Artifacts.ID}</div>
                <p>{Artifacts.Desc}</p>
            </div>
            <div className="uk-card-media-bottom">
                <img src={`${Artifacts.Picture}`} alt={`${Artifacts.Name}`}/>
            </div>
        </div>
        <br />
    </div>
      ))}
      </div>
    </div>
  );
}
export default Artifact;
