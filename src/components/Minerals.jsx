import React, { useState } from "react";
import { Mineralss } from "../data/Minerals";

function Fish() {
  const [filter, setFilter] = useState("");

  const filteredProducts = Mineralss.filter((Mineralss) =>
    Mineralss.Name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="uk-margin-xlarge-left uk-margin-xlarge-right App">
      <h1>Minerals Collection</h1>
      <input
        className="uk-input"
        type="text"
        placeholder="Filter by Name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br />
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right" uk-grid="" uk-lightbox="animation:fade">
        {filteredProducts.map((Mineralss) => (
            <div className="uk-inline" key={Mineralss.ID} uk-tooltip={`title: ${Mineralss.Name}`}>
                 <a className="uk-button uk-button-default" href={Mineralss.Picture} data-caption={Mineralss.Desc}>
                    <img src={Mineralss.Picture} alt={Mineralss.Name} />
                </a>
            </div>
        ))}
      </div>
    </div>
  );
}
export default Fish;
