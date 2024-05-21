import React, { useState } from "react";
import { Cookings } from "../data/Cooking";
function Cooking() {
  const [filter, setFilter] = useState("");

  const filteredProducts = Cookings.filter((Cookings) =>
    Cookings.Name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="uk-margin-xlarge-left uk-margin-xlarge-right">
      <h1>Cooking Collection</h1>
      <input
        className="uk-input"
        type="text"
        placeholder="Filter by Name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br />
      <ul uk-accordion="multiple: true">
        <li className="uk-open">
          <a className="uk-accordion-title" href>
            Cooking Accordion
          </a>
          <div className="uk-accordion-content">
            <p>Click on a accordion below!!</p>
          </div>
        </li>
        {filteredProducts.map((Cookings) => (
          <li key={Cookings.ID}>
            <a className="uk-accordion-title" href>
              {" "}
              {Cookings.Name}
            </a>
            <div className="uk-accordion-content">
              <p>{Cookings.Desc}</p>
              <img src={Cookings.Picture} alt={Cookings.Name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cooking;
