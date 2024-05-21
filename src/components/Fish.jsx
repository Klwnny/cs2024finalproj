import React, { useState } from "react";
import { Fishes } from "../data/Fish";

function Fish() {
  const [filter, setFilter] = useState("");

  const filteredProducts = Fishes.filter((Fishes) =>
    Fishes.Name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="uk-margin-xlarge-left uk-margin-xlarge-right App">
      <h1>Fishes Collection</h1>
      <input
        className="uk-input"
        type="text"
        placeholder="Filter by Name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br />
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right" uk-grid="">
        {filteredProducts.map((Fishes) => (
          <div className="uk-inline" key={Fishes.ID}>
            <button
              className="uk-button uk-button-default uk-margin-small-right uk-button-large"
              type="button"
              uk-toggle={`target: #modal`}
            >
              <img src={`${Fishes.Picture}`} alt={Fishes.Name} />
            </button>
            <div id="modal" uk-modal="">
              <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">{Fishes.Name}</h2>
                <p>
                    {Fishes.Desc}
                </p>
                <p className="uk-text-right">
                  <button
                    className="uk-button uk-button-default uk-modal-close"
                    type="button"
                  >
                    Cancel
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Fish;
